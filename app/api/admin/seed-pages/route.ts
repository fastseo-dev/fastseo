import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

const SERVICE_PAGES = [
  {
    title:         'eCommerce SEO Services — Grow Your Online Store\'s Revenue',
    slug:          'ecommerce-seo',
    hero_label:    'eCommerce SEO',
    hero_subtitle: 'Most online stores lose 70% of potential customers because Google can\'t find their product pages. We fix that — with technical SEO, category optimisation, and content strategies that turn search traffic into sales.',
    excerpt:       'Specialist eCommerce SEO services that improve rankings, increase organic traffic, and drive measurable revenue growth for online retailers.',
    features: [
      {
        title: 'Technical SEO Audits',
        desc:  'We crawl your store like Googlebot does — fixing crawl budget waste, duplicate content from faceted navigation, and slow Core Web Vitals that silently kill your rankings.',
      },
      {
        title: 'Category & Product Optimisation',
        desc:  'Strategic keyword mapping across categories and individual products, with structured data markup that earns rich snippets and boosts click-through rates.',
      },
      {
        title: 'Competitor Gap Analysis',
        desc:  'We identify exactly which keywords your competitors rank for that you don\'t, and build a prioritised roadmap to capture that traffic before they consolidate it.',
      },
      {
        title: 'eCommerce Link Building',
        desc:  'Industry-relevant backlinks from product reviews, supplier directories, and digital PR campaigns that build domain authority without risking a penalty.',
      },
      {
        title: 'Content & Buying Guides',
        desc:  'Buyer-intent articles and buying guides that attract top-of-funnel traffic and nurture shoppers from discovery through to purchase decision.',
      },
      {
        title: 'Conversion-Focused SEO',
        desc:  'We don\'t just drive traffic — we analyse on-site behaviour to ensure your organic visitors actually convert into paying customers.',
      },
    ],
    faqs: [
      {
        q: 'How long does eCommerce SEO take to see results?',
        a: 'Most clients see measurable ranking improvements within 3–4 months, with significant traffic and revenue gains by months 6–12. SEO is a compounding strategy — the longer it runs, the stronger the returns.',
      },
      {
        q: 'Do you work with Shopify and WooCommerce?',
        a: 'Yes. We have deep experience with both platforms, including their specific technical quirks — canonicalisation, faceted navigation, duplicate product URLs, and pagination handling.',
      },
      {
        q: 'What makes eCommerce SEO different from regular SEO?',
        a: 'eCommerce sites face unique challenges: thousands of product pages, faceted navigation creating URL proliferation, thin product descriptions, and competing with aggregators like Amazon. Our strategies are built specifically around these problems.',
      },
      {
        q: 'How do you handle seasonal products or inventory changes?',
        a: 'We build SEO strategies that hold value through seasonal cycles, using evergreen category pages rather than individual product URLs that disappear when stock runs out.',
      },
      {
        q: 'Do I need to change my website design?',
        a: 'Rarely. Most SEO improvements are technical or content-based and don\'t require redesigning your store. Where UX changes would help conversion, we flag them clearly with the evidence to support the change.',
      },
      {
        q: 'What reporting do you provide?',
        a: 'Monthly reports cover keyword rankings, organic traffic, revenue attribution, and progress against agreed milestones. You\'ll have a dedicated account manager — not a ticket queue.',
      },
    ],
    content: `<h2>Why eCommerce SEO Is Different</h2>
<p>Ranking an online store is a fundamentally different challenge to ranking a blog or a brochure site. You're dealing with thousands of indexable URLs, faceted navigation that creates duplicate content at scale, product pages that change when items go out of stock, and the constant pressure of competing against Amazon, eBay, and category aggregators with vastly larger budgets.</p>
<p>Generic SEO tactics don't work here. You need strategies built specifically for the architecture of eCommerce — and that's exactly what we deliver.</p>

<h2>Our eCommerce SEO Process</h2>
<p>We begin every engagement with a comprehensive technical audit. Crawl budget waste, JavaScript rendering issues, slow page speeds, and poor Core Web Vitals scores are the silent killers of eCommerce rankings. Before we touch a single piece of content, we make sure Google can actually crawl and index your store efficiently.</p>
<p>From there, we build a structured keyword strategy — mapping commercial intent keywords to category pages, informational keywords to blog and guide content, and long-tail product queries to individual product pages. Every page has a purpose, a target, and a measurable success metric.</p>

<h2>Who We Work With</h2>
<p>We work with growing eCommerce brands generating between £100k and £50m in annual revenue — businesses that have outgrown generic SEO agencies and need specialists who understand the intersection of technical performance, content, and commercial strategy.</p>
<p>Whether you're on Shopify, WooCommerce, Magento, or a custom platform, our team has the technical depth to deliver results.</p>

<h2>The FastSEO Difference</h2>
<p>We don't send monthly reports and disappear. Your dedicated SEO strategist is embedded in your growth goals — proactively identifying opportunities rather than simply reacting to algorithm updates. Our work is transparent, measurable, and built to compound over time, giving you an organic channel that reduces your dependency on paid advertising.</p>`,
    focus_keyword:    'eCommerce SEO',
    seo_title:        'eCommerce SEO Services | FastSEO',
    meta_description: 'Specialist eCommerce SEO for online retailers. Technical audits, category optimisation, and content strategies that convert organic traffic into revenue. Free audit.',
    og_title:         'eCommerce SEO Services — Grow Organic Revenue | FastSEO',
    og_description:   'Stop losing customers to Google. Our eCommerce SEO specialists fix the technical issues holding your store back.',
    schema_type:      'Service',
    template:         'service',
    page_type:        'service',
    author:           'FastSEO',
    robots:           'index/follow',
    status:           'published',
  },
  {
    title:         'Law Firm SEO Services — Rank for High-Value Legal Keywords',
    slug:          'law-firm-seo',
    hero_label:    'Law Firm SEO',
    hero_subtitle: 'Potential clients search for legal help on Google every day — and choose the firm that ranks first. We help law firms dominate local search, build E-E-A-T authority, and turn organic traffic into qualified enquiries.',
    excerpt:       'Specialist SEO for law firms and solicitors. Local search domination, practice area pages, and E-E-A-T optimisation that generates a consistent flow of qualified enquiries.',
    features: [
      {
        title: 'Local Search Domination',
        desc:  'Google Business Profile optimisation, local citation building, and map pack strategies that put your firm in front of clients searching for legal help in your area right now.',
      },
      {
        title: 'Practice Area Pages',
        desc:  'Keyword-researched, authoritative pages for each practice area that rank for high-value queries and demonstrate genuine expertise to both Google and prospective clients.',
      },
      {
        title: 'E-E-A-T Optimisation',
        desc:  'Legal is a YMYL (Your Money or Your Life) vertical. We build the Experience, Expertise, Authoritativeness, and Trust signals that Google requires to rank legal content highly.',
      },
      {
        title: 'Competitor Keyword Analysis',
        desc:  'We identify exactly which high-value legal keywords your local competitors rank for — and build a clear, prioritised plan to outrank them.',
      },
      {
        title: 'Legal Content Strategy',
        desc:  'Solicitor-reviewed, SEO-optimised articles and guides that drive top-of-funnel traffic and establish your firm as the authoritative resource in your practice areas.',
      },
      {
        title: 'Citation & Link Building',
        desc:  'Consistent NAP citations across legal directories, bar association listings, and editorial backlinks that strengthen your domain authority and reinforce your local signals.',
      },
    ],
    faqs: [
      {
        q: 'How long before we see results from law firm SEO?',
        a: 'Local map pack improvements typically appear within 2–3 months. Organic ranking gains for competitive practice area keywords usually take 4–8 months, depending on your domain\'s existing authority and the competition in your specific market.',
      },
      {
        q: 'Do you understand legal compliance around marketing?',
        a: 'Yes. We\'re familiar with Solicitors Regulation Authority (SRA) guidelines and equivalent bodies. Our content is factually accurate and structured to avoid claims that could breach professional conduct rules.',
      },
      {
        q: 'Can SEO work for both large firms and sole practitioners?',
        a: 'Absolutely. We tailor our strategy to the competitive landscape you\'re actually operating in. A sole practitioner in a mid-sized city has different opportunities to a regional firm — and we build accordingly.',
      },
      {
        q: 'What practice areas get the best ROI from SEO?',
        a: 'Personal injury, family law, criminal defence, employment, and conveyancing typically have high search volumes and strong conversion intent. Commercial law and niche practice areas also benefit significantly from thought-leadership content.',
      },
      {
        q: 'How do you handle firms with multiple office locations?',
        a: 'We build location-specific landing pages and Google Business Profile strategies for each office, ensuring you rank in the local pack across all your markets without cannibalising your own search results.',
      },
      {
        q: 'What does your reporting include?',
        a: 'Monthly ranking reports, organic traffic data, enquiry attribution (where possible), and a strategic review of the next 90 days. You\'ll always know what\'s been done, what\'s coming next, and why.',
      },
    ],
    content: `<h2>Why Law Firms Need Specialist SEO</h2>
<p>Legal is one of the most competitive — and highest-stakes — verticals in organic search. Google classifies legal queries as "Your Money or Your Life" (YMYL) content, applying stricter quality thresholds and placing enormous weight on E-E-A-T signals: Experience, Expertise, Authoritativeness, and Trustworthiness.</p>
<p>Generic SEO agencies rarely understand these nuances. We do — and we've built our entire law firm SEO practice around the specific signals that move the needle in legal search.</p>

<h2>Local Search: Where Cases Are Won</h2>
<p>The majority of legal enquiries begin with a local search: "personal injury solicitor London" or "family law firm near me." Ranking in the Google local pack — the three-result map listing that dominates the top of local search results — can transform your enquiry volume overnight.</p>
<p>We optimise your Google Business Profile, build consistent NAP citations across the legal directories that Google trusts, and implement structured data that signals your locations, practice areas, and service hours clearly.</p>

<h2>Content That Builds Authority</h2>
<p>High rankings in legal search require more than technical optimisation. Google wants to see genuine expertise demonstrated through content. We work with your team to create practice area pages, guides, and articles that answer the real questions potential clients are searching for — positioning your firm as the authoritative resource in your niche.</p>
<p>Every piece of content is keyword-researched, written to the highest editorial standard, and structured to pass Google's E-E-A-T assessment.</p>

<h2>Transparent, Measurable Results</h2>
<p>You'll receive clear monthly reporting on keyword rankings, organic traffic, and enquiry trends. Your dedicated strategist will meet with you regularly to review progress, adjust priorities, and ensure your SEO investment is delivering a measurable return — not just vanity metrics.</p>`,
    focus_keyword:    'law firm SEO',
    seo_title:        'Law Firm SEO Services | FastSEO',
    meta_description: 'Specialist SEO for law firms and solicitors. Local search, E-E-A-T optimisation, and practice area pages that generate consistent qualified enquiries. Free audit.',
    og_title:         'Law Firm SEO Services — More Qualified Enquiries | FastSEO',
    og_description:   'Rank for high-value legal keywords. Our law firm SEO specialists build the authority signals that Google needs to rank legal content.',
    schema_type:      'Service',
    template:         'service',
    page_type:        'service',
    author:           'FastSEO',
    robots:           'index/follow',
    status:           'published',
  },
];

export async function POST() {
  try {
    const results: { slug: string; action: string }[] = [];

    for (const page of SERVICE_PAGES) {
      const { data: existing } = await supabaseServer
        .from('pages')
        .select('id')
        .eq('slug', page.slug)
        .single();

      if (existing) {
        results.push({ slug: page.slug, action: 'skipped (already exists)' });
        continue;
      }

      const now = new Date().toISOString();
      const { data: inserted, error: insertError } = await supabaseServer
        .from('pages')
        .insert([{
          title:      page.title,
          slug:       page.slug,
          content:    page.content,
          date:       now.split('T')[0],
          created_at: now,
          updated_at: now,
        }])
        .select('id')
        .single();

      if (insertError || !inserted) {
        results.push({ slug: page.slug, action: `failed: ${insertError?.message}` });
        continue;
      }

      await supabaseServer.from('pages').update({
        excerpt:          page.excerpt,
        author:           page.author,
        page_type:        page.page_type,
        template:         page.template,
        hero_label:       page.hero_label,
        hero_subtitle:    page.hero_subtitle,
        features:         page.features,
        faqs:             page.faqs,
        featured_image_url: '',
        status:           page.status,
        focus_keyword:    page.focus_keyword,
        seo_title:        page.seo_title,
        meta_description: page.meta_description,
        canonical_url:    `https://www.fastseosolutions.com/pages/${page.slug}/`,
        robots:           page.robots,
        og_title:         page.og_title,
        og_description:   page.og_description,
        og_image:         '',
        schema_type:      page.schema_type,
        updated_at:       now,
      }).eq('id', inserted.id);

      results.push({ slug: page.slug, action: 'imported' });
    }

    const imported = results.filter((r) => r.action === 'imported').length;
    const skipped  = results.filter((r) => r.action.startsWith('skipped')).length;

    return NextResponse.json({ success: true, imported, skipped, results });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
