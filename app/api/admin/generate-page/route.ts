import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY is not set in .env.local' }, { status: 500 });
  }

  const { service, tone = 'professional', targetAudience = '' } = await req.json();
  if (!service?.trim()) {
    return NextResponse.json({ error: 'service is required' }, { status: 400 });
  }

  const audience = targetAudience ? ` targeting ${targetAudience}` : '';
  const prompt = `You are a senior SEO copywriter for FastSEO Solutions (fastseosolutions.com), a specialist SEO agency.
Write a complete, high-converting service page for: "${service}"${audience}.

Tone: ${tone} — authoritative, trust-building, benefit-led. No hype, no filler.

Return ONLY a valid JSON object with these exact keys (no markdown, no prose outside JSON):

{
  "title": "H1 page title — keyword-rich, benefit-led, max 70 chars",
  "hero_label": "Short badge text shown as 'FastSEO · [label]', max 30 chars, e.g. 'eCommerce SEO'",
  "hero_subtitle": "2–3 compelling sentences shown under the title. Lead with the core problem you solve, end with a clear promise.",
  "excerpt": "2 sentences — concise page description for internal use / meta fallback",
  "features": [
    { "title": "Feature name, max 6 words", "desc": "2–3 sentence benefit-focused explanation. Be specific." },
    { "title": "...", "desc": "..." },
    { "title": "...", "desc": "..." },
    { "title": "...", "desc": "..." },
    { "title": "...", "desc": "..." },
    { "title": "...", "desc": "..." }
  ],
  "content_html": "400–700 words of well-structured body HTML. Use <h2> for section headings, <p> for paragraphs, <ul><li> for bullet lists where appropriate. Cover: what the service involves, why it matters, FastSEO's process/approach, who it's for. Do NOT include the page title (H1) — start with an H2.",
  "faqs": [
    { "q": "Full question?", "a": "Concise, helpful answer — 2–4 sentences. Answer the real intent." },
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." }
  ],
  "focus_keyword": "Primary target keyword, 2–4 words",
  "seo_title": "SEO title for <title> tag — include keyword near start, max 60 chars, brand suffix ' | FastSEO'",
  "meta_description": "Meta description — include keyword, clear value prop, soft CTA, 140–155 chars",
  "og_title": "OG/social title — slightly more conversational than SEO title, max 65 chars",
  "og_description": "OG description — engaging, hook-first, max 125 chars"
}

Rules:
- features must have exactly 6 items
- faqs must have exactly 6 items
- All values must be strings (no null, no arrays within arrays)
- content_html must be valid HTML, no <html>/<body>/<head> wrapper
- Naturally include the focus keyword in title, hero_subtitle, seo_title, meta_description, first H2, and 2–3 times in content_html
- Write for UK English spelling`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    });

    const raw = message.content[0].type === 'text' ? message.content[0].text : '';

    // Strip markdown code fences if present
    const jsonStr = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      return NextResponse.json({ error: 'AI returned invalid JSON', raw }, { status: 500 });
    }

    const title = String(parsed.title || service);
    const slug = slugify(title);

    return NextResponse.json({
      title,
      slug,
      hero_label:    String(parsed.hero_label    || service),
      hero_subtitle: String(parsed.hero_subtitle || ''),
      excerpt:       String(parsed.excerpt       || ''),
      features:      Array.isArray(parsed.features) ? parsed.features : [],
      faqs:          Array.isArray(parsed.faqs)     ? parsed.faqs     : [],
      content:       String(parsed.content_html  || ''),
      focus_keyword: String(parsed.focus_keyword || ''),
      seo_title:     String(parsed.seo_title     || title),
      meta_description: String(parsed.meta_description || ''),
      og_title:      String(parsed.og_title      || title),
      og_description: String(parsed.og_description || ''),
      schema_type:   'Service',
      template:      'service',
      page_type:     'service',
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
