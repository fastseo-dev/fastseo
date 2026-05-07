'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { FormInput } from '@/components/admin/FormInput';
import { FormTextarea } from '@/components/admin/FormTextarea';
import { FormField } from '@/components/admin/FormField';
import { SeoEditor, type SeoData } from '@/components/admin/SeoEditor';
import { toast } from 'sonner';

interface Feature { title: string; desc: string }
interface Faq { q: string; a: string }

interface Page {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  page_type: string;
  template: 'article' | 'service';
  hero_label: string;
  hero_subtitle: string;
  features: Feature[];
  faqs: Faq[];
  featured_image_url: string;
  status: 'draft' | 'published';
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

const BLANK_PAGE: Page = {
  id: '', title: '', slug: '', excerpt: '', content: '',
  author: 'FastSEO',
  date: new Date().toISOString().split('T')[0],
  page_type: 'page',
  template: 'article',
  hero_label: '', hero_subtitle: '',
  features: [], faqs: [],
  featured_image_url: '', status: 'draft',
  focus_keyword: '', seo_title: '', meta_description: '',
  canonical_url: '', robots: 'index/follow',
  og_title: '', og_description: '', og_image: '',
  schema_type: 'WebPage',
};

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

// ── Feature card editor ───────────────────────────────────────────────────────
function FeaturesEditor({ features, onChange }: { features: Feature[]; onChange: (f: Feature[]) => void }) {
  const add = () => onChange([...features, { title: '', desc: '' }]);
  const remove = (i: number) => onChange(features.filter((_, idx) => idx !== i));
  const update = (i: number, field: keyof Feature, val: string) => {
    const next = [...features];
    next[i] = { ...next[i], [field]: val };
    onChange(next);
  };
  const move = (i: number, dir: -1 | 1) => {
    const next = [...features];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Feature Cards</label>
          <p className="text-xs text-gray-400 mt-0.5">Shown in the 3-column grid below the hero. Aim for 3–6 cards.</p>
        </div>
        <button
          type="button"
          onClick={add}
          disabled={features.length >= 6}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium disabled:opacity-40"
        >
          + Add Card
        </button>
      </div>

      {features.length === 0 && (
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center text-gray-400 text-sm">
          No feature cards yet — click &quot;+ Add Card&quot; to add up to 6.
        </div>
      )}

      <div className="space-y-3">
        {features.map((f, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-400 bg-gray-200 rounded-full px-2 py-0.5">
                Card {i + 1}
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0}
                  className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs px-1">↑</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === features.length - 1}
                  className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs px-1">↓</button>
                <button type="button" onClick={() => remove(i)}
                  className="text-red-500 hover:text-red-700 text-xs font-medium">Remove</button>
              </div>
            </div>
            <input
              type="text"
              value={f.title}
              onChange={(e) => update(i, 'title', e.target.value)}
              placeholder="Feature title (e.g. Competitor Audit)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm mb-2"
            />
            <textarea
              value={f.desc}
              onChange={(e) => update(i, 'desc', e.target.value)}
              placeholder="Short description (2–3 sentences)"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm resize-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── FAQ editor ────────────────────────────────────────────────────────────────
function FaqsEditor({ faqs, onChange }: { faqs: Faq[]; onChange: (f: Faq[]) => void }) {
  const add = () => onChange([...faqs, { q: '', a: '' }]);
  const remove = (i: number) => onChange(faqs.filter((_, idx) => idx !== i));
  const update = (i: number, field: keyof Faq, val: string) => {
    const next = [...faqs];
    next[i] = { ...next[i], [field]: val };
    onChange(next);
  };
  const move = (i: number, dir: -1 | 1) => {
    const next = [...faqs];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <label className="block text-sm font-semibold text-gray-700">FAQ Accordion</label>
          <p className="text-xs text-gray-400 mt-0.5">Shown below the body content. Enables FAQ rich results in Google.</p>
        </div>
        <button type="button" onClick={add} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          + Add FAQ
        </button>
      </div>

      {faqs.length === 0 && (
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center text-gray-400 text-sm">
          No FAQs yet — click &quot;+ Add FAQ&quot; to add accordion items.
        </div>
      )}

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-400 bg-gray-200 rounded-full px-2 py-0.5">FAQ {i + 1}</span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0}
                  className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs px-1">↑</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === faqs.length - 1}
                  className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs px-1">↓</button>
                <button type="button" onClick={() => remove(i)}
                  className="text-red-500 hover:text-red-700 text-xs font-medium">Remove</button>
              </div>
            </div>
            <input
              type="text"
              value={faq.q}
              onChange={(e) => update(i, 'q', e.target.value)}
              placeholder="Question (e.g. How long does SEO take?)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm mb-2"
            />
            <textarea
              value={faq.a}
              onChange={(e) => update(i, 'a', e.target.value)}
              placeholder="Answer — write a clear, helpful response"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm resize-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function PageEditorPage() {
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === 'new';

  const [page, setPage] = useState<Page>(BLANK_PAGE);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [aiModal, setAiModal] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [aiForm, setAiForm] = useState({ service: '', tone: 'professional', audience: '' });

  useEffect(() => {
    if (!isNew && params.id) fetchPage(params.id as string);
  }, [params.id, isNew]);

  const fetchPage = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/pages/${id}`);
      if (res.ok) {
        const data = await res.json();
        setPage({
          ...BLANK_PAGE,
          ...data,
          features: Array.isArray(data.features) ? data.features : [],
          faqs:     Array.isArray(data.faqs)     ? data.faqs     : [],
          template: data.template ?? 'article',
          hero_label:    data.hero_label    ?? '',
          hero_subtitle: data.hero_subtitle ?? '',
        });
      } else {
        toast.error('Failed to load page');
      }
    } catch {
      toast.error('Error loading page');
    } finally {
      setLoading(false);
    }
  };

  const set = (patch: Partial<Page>) => setPage((p) => ({ ...p, ...patch }));

  const handleTitleChange = (value: string) => {
    setPage((prev) => ({
      ...prev,
      title: value,
      slug: prev.slug || slugify(value),
      hero_label: prev.hero_label || value,
    }));
  };

  const handleGenerate = async () => {
    if (!aiForm.service.trim()) { toast.error('Enter a service or keyword'); return; }
    setGenerating(true);
    try {
      const res = await fetch('/api/admin/generate-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: aiForm.service, tone: aiForm.tone, targetAudience: aiForm.audience }),
      });
      const data = await res.json();
      if (!res.ok) { toast.error(data.error || 'Generation failed'); return; }
      setPage((prev) => ({
        ...prev,
        title:            data.title        || prev.title,
        slug:             data.slug         || prev.slug,
        hero_label:       data.hero_label   || prev.hero_label,
        hero_subtitle:    data.hero_subtitle || prev.hero_subtitle,
        excerpt:          data.excerpt      || prev.excerpt,
        features:         Array.isArray(data.features) ? data.features : prev.features,
        faqs:             Array.isArray(data.faqs)     ? data.faqs     : prev.faqs,
        content:          data.content      || prev.content,
        template:         'service',
        page_type:        'service',
        focus_keyword:    data.focus_keyword    || prev.focus_keyword,
        seo_title:        data.seo_title        || prev.seo_title,
        meta_description: data.meta_description || prev.meta_description,
        og_title:         data.og_title         || prev.og_title,
        og_description:   data.og_description   || prev.og_description,
        schema_type:      data.schema_type      || prev.schema_type,
      }));
      setAiModal(false);
      toast.success('Page generated! Review and publish when ready.');
    } catch (err) {
      toast.error(String(err));
    } finally {
      setGenerating(false);
    }
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!page.title.trim()) e.title = 'Title is required';
    if (!page.slug.trim()) e.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(page.slug)) e.slug = 'Lowercase letters, numbers, and hyphens only';
    if (!page.content.trim() && page.template === 'article') e.content = 'Content is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    try {
      const method = isNew ? 'POST' : 'PUT';
      const endpoint = isNew ? '/api/admin/pages' : `/api/admin/pages/${page.id}`;
      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(page),
      });
      if (res.ok) {
        toast.success('Page saved');
        router.push('/admin/pages');
      } else {
        const err = await res.json().catch(() => ({}));
        toast.error(err.error || 'Failed to save page');
      }
    } catch (error) {
      toast.error(String(error));
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;

  const isService = page.template === 'service';

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {isNew ? 'New Page' : 'Edit Page'}
        </h1>
        <button
          type="button"
          onClick={() => setAiModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg hover:from-violet-700 hover:to-blue-700 font-semibold text-sm shadow-md hover:shadow-lg transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          Generate with AI
        </button>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-4">

        {/* ── Core fields ─────────────────────────────────────────── */}
        <div className="bg-white rounded-xl shadow p-6 space-y-5">
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-3">Page Details</h2>

          {/* Template selector — most important decision */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Template</label>
            <div className="grid grid-cols-2 gap-3">
              {([
                {
                  id: 'service',
                  name: 'Service Page',
                  desc: 'Hero + feature cards + body + FAQ + CTA strip — matches the existing iGaming, Adult, Dental pages',
                  icon: '⚡',
                },
                {
                  id: 'article',
                  name: 'Article / Legal',
                  desc: 'Simple article layout — good for Privacy Policy, Terms, About, Blog posts',
                  icon: '📄',
                },
              ] as const).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => set({ template: t.id })}
                  className={`text-left rounded-xl border-2 p-4 transition-all ${
                    page.template === t.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                  }`}
                >
                  <div className="text-xl mb-1">{t.icon}</div>
                  <div className={`font-semibold text-sm mb-1 ${page.template === t.id ? 'text-blue-700' : 'text-gray-800'}`}>
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={page.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Page title"
              className={`w-full px-3 py-2 border rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.title ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Slug <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm font-mono whitespace-nowrap">/pages/</span>
              <input
                type="text"
                value={page.slug}
                onChange={(e) => set({ slug: e.target.value })}
                placeholder="page-slug"
                className={`flex-1 px-3 py-2 border rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono text-sm ${errors.slug ? 'border-red-400' : 'border-gray-300'}`}
              />
            </div>
            {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug}</p>}
          </div>

          {/* Type + Date + Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormField label="Page Type">
              <select
                value={page.page_type}
                onChange={(e) => set({ page_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {['page', 'service', 'landing', 'legal'].map((t) => (
                  <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                ))}
              </select>
            </FormField>
            <FormInput
              label="Publish Date"
              name="date"
              type="date"
              value={page.date}
              onChange={(e) => set({ date: e.target.value })}
            />
            <FormField label="Status">
              <select
                value={page.status}
                onChange={(e) => set({ status: e.target.value as 'draft' | 'published' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </FormField>
          </div>
        </div>

        {/* ── Service template fields ──────────────────────────────── */}
        {isService && (
          <div className="bg-white rounded-xl shadow p-6 space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <span className="text-lg">⚡</span>
              <h2 className="text-lg font-semibold text-gray-800">Service Page Content</h2>
            </div>

            {/* Hero fields */}
            <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Hero Section</p>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Badge Label
                  <span className="ml-2 font-normal text-gray-400 text-xs">(shown as "FastSEO · [label]")</span>
                </label>
                <input
                  type="text"
                  value={page.hero_label}
                  onChange={(e) => set({ hero_label: e.target.value })}
                  placeholder="e.g. iGaming SEO"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <FormTextarea
                label="Hero Subtitle"
                name="hero_subtitle"
                value={page.hero_subtitle}
                onChange={(e) => set({ hero_subtitle: e.target.value })}
                placeholder="1–2 sentence description shown under the page title in the hero section"
                rows={3}
              />
            </div>

            {/* Feature cards */}
            <FeaturesEditor
              features={page.features}
              onChange={(features) => set({ features })}
            />

            {/* Body content (optional middle section) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Body Content
                <span className="ml-2 font-normal text-gray-400 text-xs">(optional — shown between feature cards and FAQs)</span>
              </label>
              <RichTextEditor
                label=""
                value={page.content}
                onChange={(html) => set({ content: html })}
                placeholder="Add deeper content here — background, process description, who you work with, etc."
              />
            </div>

            {/* FAQs */}
            <FaqsEditor
              faqs={page.faqs}
              onChange={(faqs) => set({ faqs })}
            />
          </div>
        )}

        {/* ── Article template fields ──────────────────────────────── */}
        {!isService && (
          <div className="bg-white rounded-xl shadow p-6 space-y-5">
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-3">Article Content</h2>

            <FormTextarea
              label="Excerpt / Summary"
              name="excerpt"
              value={page.excerpt}
              onChange={(e) => set({ excerpt: e.target.value })}
              placeholder="Short summary shown under the title"
              rows={2}
            />

            <ImageUpload
              label="Featured Image"
              value={page.featured_image_url}
              onChange={(url) => set({ featured_image_url: url })}
            />

            <RichTextEditor
              label="Content"
              value={page.content}
              onChange={(html) => set({ content: html })}
              required
              error={errors.content}
              placeholder="Write page content here..."
            />

            <FormInput
              label="Author"
              name="author"
              value={page.author}
              onChange={(e) => set({ author: e.target.value })}
              placeholder="Author name"
            />
          </div>
        )}

        {/* ── SEO Editor ──────────────────────────────────────────── */}
        <SeoEditor
          data={{
            focus_keyword:    page.focus_keyword,
            seo_title:        page.seo_title,
            meta_description: page.meta_description,
            canonical_url:    page.canonical_url,
            robots:           page.robots,
            og_title:         page.og_title,
            og_description:   page.og_description,
            og_image:         page.og_image,
            schema_type:      page.schema_type,
          }}
          onChange={(seoData: SeoData) => set(seoData)}
          title={page.title}
          content={page.content}
          slug={page.slug}
          excerpt={page.excerpt || page.hero_subtitle}
          baseUrl="https://www.fastseosolutions.com/pages"
          schemaOptions={
            isService
              ? ['Service', 'WebPage', 'FAQPage', 'None']
              : ['WebPage', 'Article', 'AboutPage', 'ContactPage', 'FAQPage', 'None']
          }
        />

        {/* ── Actions ─────────────────────────────────────────────── */}
        <div className="flex gap-3 pb-8">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold text-sm"
          >
            {saving ? 'Saving...' : 'Save Page'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium text-sm"
          >
            Cancel
          </button>
          {!isNew && (
            <a
              href={`/pages/${page.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium text-sm"
            >
              View Live ↗
            </a>
          )}
        </div>
      </form>

      {/* ── AI Generator Modal ───────────────────────────────────── */}
      {aiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Generate Page with AI</h2>
                  <p className="text-sm text-gray-500">Creates a full service page with SEO-optimised content</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Service / Keyword <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={aiForm.service}
                  onChange={(e) => setAiForm((f) => ({ ...f, service: e.target.value }))}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  placeholder="e.g. eCommerce SEO, Law Firm SEO, SaaS SEO…"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-violet-500 focus:outline-none"
                  autoFocus
                />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['eCommerce SEO', 'Law Firm SEO', 'SaaS SEO', 'Local Business SEO', 'Healthcare SEO', 'Finance SEO'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setAiForm((f) => ({ ...f, service: s }))}
                      className={`px-2.5 py-1 text-xs rounded-full border transition-all ${
                        aiForm.service === s
                          ? 'bg-violet-100 border-violet-400 text-violet-700 font-medium'
                          : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tone</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'professional', label: 'Professional', icon: '💼' },
                    { id: 'authoritative', label: 'Authoritative', icon: '🏆' },
                    { id: 'conversational', label: 'Conversational', icon: '💬' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setAiForm((f) => ({ ...f, tone: t.id }))}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 text-sm transition-all ${
                        aiForm.tone === t.id
                          ? 'border-violet-500 bg-violet-50 text-violet-700 font-semibold'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-lg">{t.icon}</span>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Target Audience
                  <span className="ml-1 font-normal text-gray-400 text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  value={aiForm.audience}
                  onChange={(e) => setAiForm((f) => ({ ...f, audience: e.target.value }))}
                  placeholder="e.g. UK online retailers, personal injury law firms…"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-violet-500 focus:outline-none"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-700">
                <strong>Note:</strong> Existing page fields will be overwritten. This will set the template to <em>Service Page</em>. Review everything before publishing.
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex gap-3">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={generating}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg hover:from-violet-700 hover:to-blue-700 disabled:opacity-60 font-semibold text-sm transition-all"
              >
                {generating ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Generating…
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    Generate Page
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setAiModal(false)}
                disabled={generating}
                className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium text-sm disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
