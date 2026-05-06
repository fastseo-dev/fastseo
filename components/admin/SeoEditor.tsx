'use client';

import { useMemo, useState } from 'react';
import { ImageUpload } from './ImageUpload';

export interface SeoData {
  focus_keyword: string;
  seo_title: string;
  meta_description: string;
  canonical_url: string;
  robots: string;
  og_title: string;
  og_description: string;
  og_image: string;
  schema_type: string;
}

interface Issue {
  type: 'pass' | 'warning' | 'error';
  message: string;
}

interface AnalysisResult {
  score: number;
  issues: Issue[];
  words: number;
  headings: { h1: number; h2: number; h3: number };
  keywordDensity: number;
}

interface SeoEditorProps {
  data: SeoData;
  onChange: (updated: SeoData) => void;
  title: string;
  content: string;
  slug: string;
  excerpt?: string;
  baseUrl?: string;
  schemaOptions?: string[];
}

type Tab = 'analysis' | 'seo' | 'social' | 'schema';

// ── helpers ──────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function extractHeadings(html: string) {
  return {
    h1: (html.match(/<h1[\s>]/gi) || []).length,
    h2: (html.match(/<h2[\s>]/gi) || []).length,
    h3: (html.match(/<h3[\s>]/gi) || []).length,
  };
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function analyze(
  data: SeoData,
  title: string,
  content: string,
  excerpt: string
): AnalysisResult {
  const issues: Issue[] = [];
  let score = 0;

  const keyword = data.focus_keyword.toLowerCase().trim();
  const contentText = stripHtml(content).toLowerCase();
  const words = countWords(contentText);
  const headings = extractHeadings(content);
  const seoTitleStr = data.seo_title || title;
  const metaDescStr = data.meta_description || excerpt;

  let keywordDensity = 0;

  // ── Focus keyword ──
  if (keyword) {
    score += 5;
    issues.push({ type: 'pass', message: 'Focus keyword is set' });

    if (seoTitleStr.toLowerCase().includes(keyword)) {
      score += 10;
      issues.push({ type: 'pass', message: 'Focus keyword in SEO title ✓' });
    } else {
      issues.push({ type: 'error', message: 'Focus keyword not found in SEO title' });
    }

    if (metaDescStr.toLowerCase().includes(keyword)) {
      score += 10;
      issues.push({ type: 'pass', message: 'Focus keyword in meta description ✓' });
    } else {
      issues.push({ type: 'warning', message: 'Add focus keyword to meta description' });
    }

    if (contentText.includes(keyword)) {
      score += 10;
      const count = (contentText.match(new RegExp(escapeRegex(keyword), 'g')) || []).length;
      keywordDensity = words > 0 ? parseFloat(((count / words) * 100).toFixed(1)) : 0;
      if (keywordDensity > 3) {
        issues.push({ type: 'warning', message: `Keyword density ${keywordDensity}% — slightly high (aim for 1–3%)` });
      } else {
        score += 5;
        issues.push({ type: 'pass', message: `Keyword density: ${keywordDensity}% ✓` });
      }
    } else {
      issues.push({ type: 'error', message: 'Focus keyword not found in content body' });
    }
  } else {
    issues.push({ type: 'warning', message: 'No focus keyword set — add one for targeted SEO' });
  }

  // ── SEO Title ──
  const titleLen = seoTitleStr.length;
  if (titleLen === 0) {
    issues.push({ type: 'error', message: 'SEO title is empty' });
  } else if (titleLen >= 50 && titleLen <= 60) {
    score += 10;
    issues.push({ type: 'pass', message: `SEO title: ${titleLen} chars — perfect (50–60) ✓` });
  } else if (titleLen >= 40 && titleLen <= 69) {
    score += 5;
    issues.push({ type: 'warning', message: `SEO title: ${titleLen} chars — aim for 50–60` });
  } else if (titleLen < 40) {
    issues.push({ type: 'warning', message: `SEO title: ${titleLen} chars — too short, aim for 50–60` });
  } else {
    issues.push({ type: 'error', message: `SEO title: ${titleLen} chars — too long, keep under 60` });
  }

  // ── Meta Description ──
  const descLen = metaDescStr.length;
  if (descLen === 0) {
    issues.push({ type: 'error', message: 'Meta description is missing' });
  } else {
    score += 10;
    if (descLen >= 120 && descLen <= 160) {
      score += 10;
      issues.push({ type: 'pass', message: `Meta description: ${descLen} chars — perfect (120–160) ✓` });
    } else if (descLen >= 100 && descLen <= 170) {
      score += 5;
      issues.push({ type: 'warning', message: `Meta description: ${descLen} chars — aim for 120–160` });
    } else if (descLen < 100) {
      issues.push({ type: 'warning', message: `Meta description: ${descLen} chars — too short` });
    } else {
      issues.push({ type: 'error', message: `Meta description: ${descLen} chars — too long, trim to 160` });
    }
  }

  // ── OG Image ──
  if (data.og_image) {
    score += 5;
    issues.push({ type: 'pass', message: 'OG image set for social sharing ✓' });
  } else {
    issues.push({ type: 'warning', message: 'No OG image — page may look poor when shared' });
  }

  // ── Canonical URL ──
  if (data.canonical_url) {
    score += 5;
    issues.push({ type: 'pass', message: 'Canonical URL set ✓' });
  } else {
    issues.push({ type: 'warning', message: 'No canonical URL set (auto-generated from slug)' });
  }

  // ── Headings ──
  if (headings.h1 > 0) {
    score += 5;
    issues.push({ type: 'pass', message: `H1 heading found (${headings.h1}) ✓` });
  } else {
    issues.push({ type: 'warning', message: 'No H1 heading in content' });
  }
  if (headings.h2 > 0) {
    score += 5;
    issues.push({ type: 'pass', message: `H2/H3 structure found (H2: ${headings.h2}, H3: ${headings.h3}) ✓` });
  } else {
    issues.push({ type: 'warning', message: 'No H2 headings — add structure with subheadings' });
  }

  // ── Word count ──
  if (words >= 600) {
    score += 10;
    issues.push({ type: 'pass', message: `${words.toLocaleString()} words — great content length ✓` });
  } else if (words >= 300) {
    score += 5;
    issues.push({ type: 'warning', message: `${words.toLocaleString()} words — aim for 600+ for better rankings` });
  } else if (words > 0) {
    issues.push({ type: 'warning', message: `${words.toLocaleString()} words — content is too short` });
  } else {
    issues.push({ type: 'error', message: 'Content is empty' });
  }

  return { score: Math.min(score, 100), issues, words, headings, keywordDensity };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ScoreCircle({ score }: { score: number }) {
  const r = 26;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 80 ? '#22c55e' :
    score >= 60 ? '#eab308' :
    score >= 40 ? '#f97316' : '#ef4444';
  const label =
    score >= 80 ? 'Excellent' :
    score >= 60 ? 'Good' :
    score >= 40 ? 'Needs Work' : 'Poor';

  return (
    <div className="flex items-center gap-3">
      <svg width="68" height="68" viewBox="0 0 68 68" style={{ flexShrink: 0 }}>
        <circle cx="34" cy="34" r={r} fill="none" stroke="#e5e7eb" strokeWidth="5" />
        <circle
          cx="34" cy="34" r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 34 34)"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
        <text x="34" y="39" textAnchor="middle" fontSize="15" fontWeight="700" fill={color}>{score}</text>
      </svg>
      <div>
        <div className="font-bold text-base" style={{ color }}>{label}</div>
        <div className="text-xs text-gray-500">SEO Score / 100</div>
      </div>
    </div>
  );
}

function CharBar({ value, limit }: { value: string; limit: number }) {
  const len = value.length;
  const pct = Math.min((len / limit) * 100, 110);
  const over = len > limit;
  const color =
    over ? '#ef4444' :
    len >= limit * 0.9 ? '#f97316' :
    len >= limit * 0.6 ? '#22c55e' : '#9ca3af';
  return (
    <div className="mt-1.5">
      <div className="flex justify-between text-xs mb-1">
        <span style={{ color }} className="font-medium">{len} / {limit} chars</span>
        {over && <span className="text-red-500 font-semibold">Too long!</span>}
        {!over && len >= limit * 0.9 && <span className="text-orange-500">Near limit</span>}
        {!over && len >= limit * 0.6 && len < limit * 0.9 && <span className="text-green-600">Good length</span>}
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200"
          style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function SerpPreview({ title, url, description }: { title: string; url: string; description: string }) {
  const displayUrl = url
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
    .replace(/\//g, ' › ');
  return (
    <div className="rounded-xl border border-gray-200 p-5 bg-white font-sans shadow-sm">
      <div className="text-[13px] text-gray-500 mb-1 truncate">{displayUrl || 'fastseosolutions.com'}</div>
      <div
        className="text-[#1a0dab] text-[19px] font-normal leading-snug mb-1 line-clamp-2 cursor-pointer hover:underline"
        style={{ fontFamily: 'arial,sans-serif' }}
      >
        {title || 'Page Title — FastSEO'}
      </div>
      <div
        className="text-gray-600 text-[13px] leading-relaxed line-clamp-3"
        style={{ fontFamily: 'arial,sans-serif' }}
      >
        {description || 'Your meta description will appear here. Write a compelling summary that encourages clicks from search results.'}
      </div>
    </div>
  );
}

function OgPreview({ image, title, description, domain }: {
  image: string; title: string; description: string; domain: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm max-w-sm">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-sm">No OG image set</span>
          </div>
        </div>
      )}
      <div className="p-3 border-t border-gray-100 bg-gray-50">
        <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">{domain}</div>
        <div className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
          {title || 'Page Title'}
        </div>
        {description && (
          <div className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</div>
        )}
      </div>
    </div>
  );
}

function IssueIcon({ type }: { type: Issue['type'] }) {
  if (type === 'pass') return <span className="text-green-500 font-bold text-sm leading-none mt-0.5 flex-shrink-0">✓</span>;
  if (type === 'warning') return <span className="text-amber-500 font-bold text-sm leading-none mt-0.5 flex-shrink-0">!</span>;
  return <span className="text-red-500 font-bold text-sm leading-none mt-0.5 flex-shrink-0">✕</span>;
}

// ── Main component ─────────────────────────────────────────────────────────────

export function SeoEditor({
  data,
  onChange,
  title,
  content,
  slug,
  excerpt = '',
  baseUrl = 'https://www.fastseosolutions.com',
  schemaOptions,
}: SeoEditorProps) {
  const [tab, setTab] = useState<Tab>('analysis');
  const [open, setOpen] = useState(true);

  const analysis = useMemo(
    () => analyze(data, title, content, excerpt),
    [data, title, content, excerpt]
  );

  const update = (field: keyof SeoData, value: string) =>
    onChange({ ...data, [field]: value });

  const effectiveTitle = data.seo_title || title || 'Page Title';
  const effectiveDesc = data.meta_description || excerpt || '';
  const effectiveUrl =
    data.canonical_url ||
    `${baseUrl.replace(/\/$/, '')}/${slug ? slug + '/' : ''}`;
  const ogTitle = data.og_title || effectiveTitle;
  const ogDesc = data.og_description || effectiveDesc;
  const domain = baseUrl.replace(/^https?:\/\//, '').split('/')[0];
  const defaultSchemaOptions = schemaOptions ?? ['BlogPosting', 'Article', 'WebPage', 'HowTo', 'FAQPage', 'Service', 'None'];

  const { score, issues, words, headings } = analysis;
  const errCount = issues.filter((i) => i.type === 'error').length;
  const warnCount = issues.filter((i) => i.type === 'warning').length;
  const passCount = issues.filter((i) => i.type === 'pass').length;

  const tabs: { id: Tab; label: string }[] = [
    { id: 'analysis', label: 'Analysis' },
    { id: 'seo', label: 'SEO Meta' },
    { id: 'social', label: 'Social / OG' },
    { id: 'schema', label: 'Schema' },
  ];

  return (
    <div className="mt-4 bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
      {/* Header / score strip */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <ScoreCircle score={score} />
          <div className="hidden sm:block">
            <div className="font-bold text-gray-900 text-[15px]">SEO Editor</div>
            <div className="text-xs text-gray-400 mt-0.5">
              <span className="text-red-500 font-semibold">{errCount} error{errCount !== 1 ? 's' : ''}</span>
              {' · '}
              <span className="text-amber-500 font-semibold">{warnCount} warning{warnCount !== 1 ? 's' : ''}</span>
              {' · '}
              <span className="text-green-600 font-semibold">{passCount} passed</span>
            </div>
          </div>
        </div>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none"
          className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M5 7l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-gray-100">
          {/* Tab bar */}
          <div className="flex border-b border-gray-100 bg-gray-50">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`px-5 py-3 text-[13px] font-semibold transition-colors border-b-2 -mb-px ${
                  tab === id
                    ? 'border-blue-500 text-blue-600 bg-white'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* ── Analysis tab ───────────────────────────────── */}
            {tab === 'analysis' && (
              <div className="space-y-6">
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Words', value: words.toLocaleString() },
                    { label: 'Read time', value: `${Math.max(1, Math.ceil(words / 200))} min` },
                    { label: 'Headings', value: (headings.h1 + headings.h2 + headings.h3).toString() },
                    { label: 'SEO Score', value: score.toString() },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                      <div className="text-xl font-bold text-gray-900">{value}</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                {/* SERP preview */}
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Google Search Preview
                  </div>
                  <SerpPreview title={effectiveTitle} url={effectiveUrl} description={effectiveDesc} />
                </div>

                {/* Issues list */}
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    SEO Checklist
                  </div>
                  <div className="space-y-2">
                    {issues.map((issue, i) => (
                      <div key={i} className={`flex items-start gap-2.5 px-3 py-2 rounded-lg text-sm ${
                        issue.type === 'pass'    ? 'bg-green-50 text-green-800' :
                        issue.type === 'warning' ? 'bg-amber-50 text-amber-800' :
                                                   'bg-red-50 text-red-800'
                      }`}>
                        <IssueIcon type={issue.type} />
                        <span>{issue.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SEO Meta tab ───────────────────────────────── */}
            {tab === 'seo' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Focus Keyword</label>
                  <input
                    type="text"
                    value={data.focus_keyword}
                    onChange={(e) => update('focus_keyword', e.target.value)}
                    placeholder="e.g. iGaming SEO services"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">The main keyword you want this page to rank for in Google</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">SEO Title</label>
                  <input
                    type="text"
                    value={data.seo_title}
                    onChange={(e) => update('seo_title', e.target.value)}
                    placeholder={title ? `Defaults to: "${title}"` : 'Enter SEO title...'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <CharBar value={data.seo_title || title} limit={60} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Meta Description</label>
                  <textarea
                    value={data.meta_description}
                    onChange={(e) => update('meta_description', e.target.value)}
                    placeholder={excerpt ? `Defaults to excerpt: "${excerpt.slice(0, 80)}..."` : 'Write a compelling meta description...'}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm resize-none"
                  />
                  <CharBar value={data.meta_description || excerpt} limit={160} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Canonical URL</label>
                  <input
                    type="url"
                    value={data.canonical_url}
                    onChange={(e) => update('canonical_url', e.target.value)}
                    placeholder={effectiveUrl}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">Leave blank to auto-generate from slug</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Robots Directive</label>
                  <select
                    value={data.robots}
                    onChange={(e) => update('robots', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="index/follow">index / follow — index this page (recommended)</option>
                    <option value="noindex/follow">noindex / follow — hide from search, follow links</option>
                    <option value="index/nofollow">index / nofollow — index page, don't follow links</option>
                    <option value="noindex/nofollow">noindex / nofollow — fully private page</option>
                  </select>
                </div>

                {/* Live SERP preview */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Live SERP Preview
                  </div>
                  <SerpPreview title={effectiveTitle} url={effectiveUrl} description={effectiveDesc} />
                </div>
              </div>
            )}

            {/* ── Social / OG tab ────────────────────────────── */}
            {tab === 'social' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">OG Title</label>
                      <input
                        type="text"
                        value={data.og_title}
                        onChange={(e) => update('og_title', e.target.value)}
                        placeholder={`Defaults to: "${effectiveTitle}"`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">OG Description</label>
                      <textarea
                        value={data.og_description}
                        onChange={(e) => update('og_description', e.target.value)}
                        placeholder="Defaults to meta description"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm resize-none"
                      />
                    </div>

                    <ImageUpload
                      label="OG Image (1200 × 630 recommended)"
                      value={data.og_image}
                      onChange={(url) => update('og_image', url)}
                    />
                    <p className="text-xs text-gray-400 -mt-1">
                      Used when shared on Facebook, LinkedIn, Slack, WhatsApp, etc.
                    </p>
                  </div>

                  {/* Preview */}
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      Social Card Preview
                    </div>
                    <OgPreview
                      image={data.og_image}
                      title={ogTitle}
                      description={ogDesc}
                      domain={domain}
                    />
                    <div className="mt-3 text-xs text-gray-400 space-y-1">
                      <div><span className="font-semibold">Facebook / LinkedIn:</span> 1200 × 630 px minimum</div>
                      <div><span className="font-semibold">Twitter:</span> 800 × 418 px minimum (large card)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Schema tab ─────────────────────────────────── */}
            {tab === 'schema' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Schema Type</label>
                  <select
                    value={data.schema_type}
                    onChange={(e) => update('schema_type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    {defaultSchemaOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-400 mt-1">
                    Structured data helps search engines understand your content and can enable rich results
                  </p>
                </div>

                {data.schema_type && data.schema_type !== 'None' && (
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      JSON-LD Preview
                    </div>
                    <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 overflow-auto max-h-72 leading-relaxed">
                      {JSON.stringify(
                        {
                          '@context': 'https://schema.org',
                          '@type': data.schema_type,
                          headline: effectiveTitle,
                          description: effectiveDesc || undefined,
                          url: effectiveUrl,
                          image: data.og_image || undefined,
                          author: { '@type': 'Organization', name: 'FastSEO' },
                          datePublished: new Date().toISOString().split('T')[0],
                        },
                        null,
                        2
                      )}
                    </pre>
                  </div>
                )}

                <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 text-sm text-blue-800">
                  <strong>Schema types explained:</strong>
                  <ul className="mt-2 space-y-1 text-xs">
                    <li><strong>BlogPosting</strong> — blog articles and news posts</li>
                    <li><strong>Article</strong> — general editorial content</li>
                    <li><strong>WebPage</strong> — service pages, landing pages</li>
                    <li><strong>HowTo</strong> — step-by-step guides (enables rich results)</li>
                    <li><strong>FAQPage</strong> — FAQ pages (enables FAQ rich results in SERP)</li>
                    <li><strong>Service</strong> — service description pages</li>
                    <li><strong>None</strong> — disable structured data for this page</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
