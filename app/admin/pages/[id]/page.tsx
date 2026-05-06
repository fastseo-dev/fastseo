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

interface Page {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  page_type: string;
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

const PAGE_TYPES = ['page', 'service', 'landing', 'legal'];

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function PageEditorPage() {
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === 'new';

  const [page, setPage] = useState<Page>({
    id: '',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'FastSEO',
    date: new Date().toISOString().split('T')[0],
    page_type: 'page',
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
    schema_type: 'WebPage',
  });

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isNew && params.id) fetchPage(params.id as string);
  }, [params.id, isNew]);

  const fetchPage = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/pages/${id}`);
      if (res.ok) {
        const data = await res.json();
        setPage({
          ...data,
          focus_keyword:    data.focus_keyword    ?? '',
          seo_title:        data.seo_title        ?? '',
          meta_description: data.meta_description ?? '',
          canonical_url:    data.canonical_url    ?? '',
          robots:           data.robots           ?? 'index/follow',
          og_title:         data.og_title         ?? '',
          og_description:   data.og_description   ?? '',
          og_image:         data.og_image         ?? '',
          schema_type:      data.schema_type      ?? 'WebPage',
          page_type:        data.page_type        ?? 'page',
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

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!page.title.trim()) e.title = 'Title is required';
    if (!page.slug.trim()) e.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(page.slug)) e.slug = 'Slug must be lowercase letters, numbers, and hyphens only';
    if (!page.content.trim()) e.content = 'Content is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleTitleChange = (value: string) => {
    setPage((prev) => ({
      ...prev,
      title: value,
      slug: prev.slug || slugify(value),
    }));
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
        toast.success('Page saved successfully');
        router.push('/admin/pages');
      } else {
        const err = await res.json().catch(() => ({}));
        toast.error(err.error || err.message || 'Failed to save page');
      }
    } catch (error) {
      toast.error(String(error));
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {isNew ? 'New Page' : 'Edit Page'}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm whitespace-nowrap">/pages/</span>
              <input
                type="text"
                value={page.slug}
                onChange={(e) => setPage({ ...page, slug: e.target.value })}
                placeholder="page-slug"
                className={`flex-1 px-3 py-2 border rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono text-sm ${errors.slug ? 'border-red-400' : 'border-gray-300'}`}
              />
            </div>
            {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug}</p>}
          </div>

          {/* Type + Date + Status row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormField label="Page Type">
              <select
                value={page.page_type}
                onChange={(e) => setPage({ ...page, page_type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {PAGE_TYPES.map((t) => (
                  <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                ))}
              </select>
            </FormField>

            <FormInput
              label="Publish Date"
              name="date"
              type="date"
              value={page.date}
              onChange={(e) => setPage({ ...page, date: e.target.value })}
            />

            <FormField label="Status">
              <select
                value={page.status}
                onChange={(e) => setPage({ ...page, status: e.target.value as 'draft' | 'published' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </FormField>
          </div>

          {/* Excerpt */}
          <FormTextarea
            label="Excerpt"
            name="excerpt"
            value={page.excerpt}
            onChange={(e) => setPage({ ...page, excerpt: e.target.value })}
            placeholder="Short summary of this page"
            rows={2}
          />

          {/* Featured Image */}
          <ImageUpload
            label="Featured Image"
            value={page.featured_image_url}
            onChange={(url) => setPage({ ...page, featured_image_url: url })}
          />

          {/* Content */}
          <div>
            <RichTextEditor
              label="Content"
              value={page.content}
              onChange={(html) => setPage({ ...page, content: html })}
              required
              error={errors.content}
              placeholder="Write page content here..."
            />
          </div>

          {/* Author */}
          <FormInput
            label="Author"
            name="author"
            value={page.author}
            onChange={(e) => setPage({ ...page, author: e.target.value })}
            placeholder="Author name"
          />
        </div>

        {/* SEO Editor */}
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
          onChange={(seoData: SeoData) => setPage({ ...page, ...seoData })}
          title={page.title}
          content={page.content}
          slug={page.slug}
          excerpt={page.excerpt}
          baseUrl="https://www.fastseosolutions.com/pages"
          schemaOptions={['WebPage', 'Article', 'Service', 'AboutPage', 'ContactPage', 'FAQPage', 'None']}
        />

        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
          >
            {saving ? 'Saving...' : 'Save Page'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
          >
            Cancel
          </button>
          {!isNew && (
            <a
              href={`/pages/${page.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
            >
              View Page ↗
            </a>
          )}
        </div>
      </form>
    </div>
  );
}
