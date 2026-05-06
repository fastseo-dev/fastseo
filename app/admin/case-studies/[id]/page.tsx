'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { validateAndSanitize, validators } from '@/lib/validation';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { FormInput } from '@/components/admin/FormInput';
import { FormField } from '@/components/admin/FormField';
import { toast } from 'sonner';

const NICHES = ['iGaming', 'Crypto', 'Adult', 'Cannabis', 'Dental', 'SaaS'];

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  niche: string;
  client: string;
  result: string;
  metric: string;
  period: string;
  tags: string[];
  body: string;
  featured_image_url: string;
  status: 'draft' | 'published';
  // SEO fields
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

function CharCount({ value, limit }: { value: string; limit: number }) {
  const len = value.length;
  const over = len > limit;
  return (
    <span className={`text-xs ml-2 ${over ? 'text-yellow-500 font-semibold' : 'text-gray-400'}`}>
      {len}/{limit}{over ? ' — too long' : ''}
    </span>
  );
}

export default function CaseStudyEditorPage() {
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === 'new';

  const [study, setStudy] = useState<CaseStudy>({
    id: '',
    title: '',
    slug: '',
    niche: 'iGaming',
    client: '',
    result: '',
    metric: '',
    period: '',
    tags: [],
    body: '',
    featured_image_url: '',
    status: 'draft',
    focus_keyword: '',
    seo_title: '',
    meta_description: '',
    canonical_url: '',
    robots: 'index/follow',
    og_title: '',
    og_description: '',
    og_image: '',
    schema_type: 'Article',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);

  useEffect(() => {
    if (!isNew && params.id) {
      fetchStudy(params.id as string);
    }
  }, [params.id, isNew]);

  const fetchStudy = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/case-studies/${id}`);
      if (res.ok) {
        const data = await res.json();
        setStudy({
          ...data,
          focus_keyword: data.focus_keyword ?? '',
          seo_title: data.seo_title ?? '',
          meta_description: data.meta_description ?? '',
          canonical_url: data.canonical_url ?? '',
          robots: data.robots ?? 'index/follow',
          og_title: data.og_title ?? '',
          og_description: data.og_description ?? '',
          og_image: data.og_image ?? '',
          schema_type: data.schema_type ?? 'Article',
        });
      } else {
        toast.error('Failed to load case study');
      }
    } catch (error) {
      console.error('Error fetching study:', error);
      toast.error('Error loading case study');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const titleError = validators.required(study.title, 'Title');
    if (titleError) newErrors.title = titleError;

    const slugError = validators.required(study.slug, 'Slug');
    if (slugError) {
      newErrors.slug = slugError;
    } else {
      const slugFormatError = validators.slug(study.slug);
      if (slugFormatError) newErrors.slug = slugFormatError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSaving(true);

    try {
      const method = isNew ? 'POST' : 'PUT';
      const endpoint = isNew ? '/api/admin/case-studies' : `/api/admin/case-studies/${study.id}`;

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...study,
          title: validateAndSanitize(study.title),
          slug: validateAndSanitize(study.slug),
          client: validateAndSanitize(study.client),
          body: validateAndSanitize(study.body),
        }),
      });

      if (res.ok) {
        toast.success('Case study saved');
        router.push('/admin/case-studies');
      } else {
        toast.error('Failed to save case study');
      }
    } catch (error) {
      console.error('Error saving:', error);
      toast.error('Error saving case study');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {isNew ? 'New Case Study' : 'Edit Case Study'}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <FormInput
            label="Title"
            name="title"
            value={study.title}
            onChange={(e) => setStudy({ ...study, title: e.target.value })}
            placeholder="Case study title"
            required
            error={errors.title}
          />

          <FormInput
            label="Slug"
            name="slug"
            value={study.slug}
            onChange={(e) => setStudy({ ...study, slug: e.target.value })}
            placeholder="case-study-slug"
            required
            error={errors.slug}
          />

          <FormField label="Niche">
            <select
              value={study.niche}
              onChange={(e) => setStudy({ ...study, niche: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            >
              {NICHES.map((niche) => (
                <option key={niche} value={niche}>
                  {niche}
                </option>
              ))}
            </select>
          </FormField>

          <FormInput
            label="Client Description"
            name="client"
            value={study.client}
            onChange={(e) => setStudy({ ...study, client: e.target.value })}
            placeholder="Client description"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Result"
              name="result"
              value={study.result}
              onChange={(e) => setStudy({ ...study, result: e.target.value })}
              placeholder="0 → 180,000"
            />
            <FormInput
              label="Metric"
              name="metric"
              value={study.metric}
              onChange={(e) => setStudy({ ...study, metric: e.target.value })}
              placeholder="Monthly organic visits"
            />
          </div>

          <FormInput
            label="Time Period"
            name="period"
            value={study.period}
            onChange={(e) => setStudy({ ...study, period: e.target.value })}
            placeholder="14 months"
          />

          <FormInput
            label="Tags (comma-separated)"
            name="tags"
            value={study.tags.join(', ')}
            onChange={(e) =>
              setStudy({ ...study, tags: e.target.value.split(',').map((t) => t.trim()) })
            }
            placeholder="organic, seo, ranking"
          />

          <ImageUpload
            label="Featured Image"
            value={study.featured_image_url}
            onChange={(url) => setStudy({ ...study, featured_image_url: url })}
          />

          <RichTextEditor
            label="Details"
            value={study.body}
            onChange={(html) => setStudy({ ...study, body: html })}
            placeholder="Write case study details here..."
          />

          <FormField label="Status">
            <select
              value={study.status}
              onChange={(e) => setStudy({ ...study, status: e.target.value as 'draft' | 'published' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </FormField>
        </div>

        {/* SEO Settings */}
        <div className="mt-4 bg-white rounded-lg shadow overflow-hidden">
          <button
            type="button"
            onClick={() => setSeoOpen(!seoOpen)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-600">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-semibold text-gray-900">SEO Settings</span>
            </div>
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className={`text-gray-400 transition-transform ${seoOpen ? 'rotate-180' : ''}`}
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {seoOpen && (
            <div className="px-6 pb-6 space-y-5 border-t border-gray-100">
              <p className="text-xs text-gray-500 pt-4">
                These fields control how this case study appears in Google search results and social media previews.
              </p>

              <FormInput
                label="Focus Keyword"
                name="focus_keyword"
                value={study.focus_keyword}
                onChange={(e) => setStudy({ ...study, focus_keyword: e.target.value })}
                placeholder="e.g. iGaming SEO case study"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  SEO Title
                  <CharCount value={study.seo_title} limit={60} />
                </label>
                <input
                  type="text"
                  value={study.seo_title}
                  onChange={(e) => setStudy({ ...study, seo_title: e.target.value })}
                  placeholder="SEO title (leave blank to use case study title)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Meta Description
                  <CharCount value={study.meta_description} limit={160} />
                </label>
                <textarea
                  value={study.meta_description}
                  onChange={(e) => setStudy({ ...study, meta_description: e.target.value })}
                  placeholder="Meta description for search results"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <FormInput
                label="Canonical URL"
                name="canonical_url"
                value={study.canonical_url}
                onChange={(e) => setStudy({ ...study, canonical_url: e.target.value })}
                placeholder="https://www.fastseosolutions.com/case-studies/slug/"
              />

              <FormField label="Robots">
                <select
                  value={study.robots}
                  onChange={(e) => setStudy({ ...study, robots: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                >
                  <option value="index/follow">index/follow (default)</option>
                  <option value="noindex/follow">noindex/follow</option>
                  <option value="index/nofollow">index/nofollow</option>
                  <option value="noindex/nofollow">noindex/nofollow</option>
                </select>
              </FormField>

              <FormInput
                label="OG Title"
                name="og_title"
                value={study.og_title}
                onChange={(e) => setStudy({ ...study, og_title: e.target.value })}
                placeholder="Open Graph title (leave blank to use SEO title)"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">OG Description</label>
                <textarea
                  value={study.og_description}
                  onChange={(e) => setStudy({ ...study, og_description: e.target.value })}
                  placeholder="Open Graph description (leave blank to use meta description)"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <ImageUpload
                label="OG Image"
                value={study.og_image}
                onChange={(url) => setStudy({ ...study, og_image: url })}
              />

              <FormField label="Schema Type">
                <select
                  value={study.schema_type}
                  onChange={(e) => setStudy({ ...study, schema_type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                >
                  <option value="Article">Article</option>
                  <option value="CaseStudy">CaseStudy</option>
                  <option value="None">None</option>
                </select>
              </FormField>
            </div>
          )}
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Case Study'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
