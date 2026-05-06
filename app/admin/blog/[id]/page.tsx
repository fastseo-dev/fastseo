'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { validateAndSanitize, validators } from '@/lib/validation';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { FormInput } from '@/components/admin/FormInput';
import { FormTextarea } from '@/components/admin/FormTextarea';
import { FormField } from '@/components/admin/FormField';
import { toast } from 'sonner';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  categories: string[];
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

export default function BlogEditorPage() {
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === 'new';

  const [post, setPost] = useState<BlogPost>({
    id: '',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'FastSEO',
    date: new Date().toISOString().split('T')[0],
    categories: [],
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
    schema_type: 'BlogPosting',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);

  useEffect(() => {
    if (!isNew && params.id) {
      fetchPost(params.id as string);
    }
  }, [params.id, isNew]);

  const fetchPost = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/blog/${id}`);
      if (res.ok) {
        const data = await res.json();
        setPost({
          ...data,
          focus_keyword: data.focus_keyword ?? '',
          seo_title: data.seo_title ?? '',
          meta_description: data.meta_description ?? '',
          canonical_url: data.canonical_url ?? '',
          robots: data.robots ?? 'index/follow',
          og_title: data.og_title ?? '',
          og_description: data.og_description ?? '',
          og_image: data.og_image ?? '',
          schema_type: data.schema_type ?? 'BlogPosting',
        });
      } else {
        alert('Failed to load post');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      alert('Error loading post');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const titleError = validators.required(post.title, 'Title');
    if (titleError) newErrors.title = titleError;

    const slugError = validators.required(post.slug, 'Slug');
    if (slugError) {
      newErrors.slug = slugError;
    } else {
      const slugFormatError = validators.slug(post.slug);
      if (slugFormatError) newErrors.slug = slugFormatError;
    }

    const contentError = validators.required(post.content, 'Content');
    if (contentError) newErrors.content = contentError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSaving(true);

    try {
      const method = isNew ? 'POST' : 'PUT';
      const endpoint = isNew ? '/api/admin/blog' : `/api/admin/blog/${post.id}`;

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          title: validateAndSanitize(post.title),
          slug: validateAndSanitize(post.slug),
          excerpt: validateAndSanitize(post.excerpt),
          content: validateAndSanitize(post.content),
          author: validateAndSanitize(post.author),
        }),
      });

      if (res.ok) {
        toast.success('Post saved successfully');
        router.push('/admin/blog');
      } else {
        toast.error('Failed to save post');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Error saving post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {isNew ? 'New Blog Post' : 'Edit Blog Post'}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <FormInput
            label="Title"
            name="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Post title"
            required
            error={errors.title}
          />

          <FormInput
            label="Slug"
            name="slug"
            value={post.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
            placeholder="post-slug"
            required
            error={errors.slug}
          />

          <FormInput
            label="Publish Date"
            name="date"
            type="date"
            value={post.date}
            onChange={(e) => setPost({ ...post, date: e.target.value })}
          />

          <FormTextarea
            label="Excerpt"
            name="excerpt"
            value={post.excerpt}
            onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
            placeholder="Short summary"
            rows={2}
          />

          <ImageUpload
            label="Featured Image"
            value={post.featured_image_url}
            onChange={(url) => setPost({ ...post, featured_image_url: url })}
          />

          <RichTextEditor
            label="Content"
            value={post.content}
            onChange={(html) => setPost({ ...post, content: html })}
            required
            error={errors.content}
            placeholder="Write your post content here..."
          />

          <FormInput
            label="Author"
            name="author"
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            placeholder="Author name"
          />

          <FormInput
            label="Categories (comma-separated)"
            name="categories"
            value={post.categories.join(', ')}
            onChange={(e) =>
              setPost({
                ...post,
                categories: e.target.value.split(',').map((c) => c.trim()),
              })
            }
            placeholder="SEO, Marketing, Tips"
          />

          <FormField label="Status">
            <select
              value={post.status}
              onChange={(e) => setPost({ ...post, status: e.target.value as 'draft' | 'published' })}
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
                These fields control how this post appears in Google search results and social media previews.
              </p>

              <FormInput
                label="Focus Keyword"
                name="focus_keyword"
                value={post.focus_keyword}
                onChange={(e) => setPost({ ...post, focus_keyword: e.target.value })}
                placeholder="e.g. iGaming SEO"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  SEO Title
                  <CharCount value={post.seo_title} limit={60} />
                </label>
                <input
                  type="text"
                  value={post.seo_title}
                  onChange={(e) => setPost({ ...post, seo_title: e.target.value })}
                  placeholder="SEO title (leave blank to use post title)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Meta Description
                  <CharCount value={post.meta_description} limit={160} />
                </label>
                <textarea
                  value={post.meta_description}
                  onChange={(e) => setPost({ ...post, meta_description: e.target.value })}
                  placeholder="Meta description (leave blank to use excerpt)"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <FormInput
                label="Canonical URL"
                name="canonical_url"
                value={post.canonical_url}
                onChange={(e) => setPost({ ...post, canonical_url: e.target.value })}
                placeholder="https://www.fastseosolutions.com/blog/post-slug/"
              />

              <FormField label="Robots">
                <select
                  value={post.robots}
                  onChange={(e) => setPost({ ...post, robots: e.target.value })}
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
                value={post.og_title}
                onChange={(e) => setPost({ ...post, og_title: e.target.value })}
                placeholder="Open Graph title (leave blank to use SEO title)"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">OG Description</label>
                <textarea
                  value={post.og_description}
                  onChange={(e) => setPost({ ...post, og_description: e.target.value })}
                  placeholder="Open Graph description (leave blank to use meta description)"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <ImageUpload
                label="OG Image"
                value={post.og_image}
                onChange={(url) => setPost({ ...post, og_image: url })}
              />

              <FormField label="Schema Type">
                <select
                  value={post.schema_type}
                  onChange={(e) => setPost({ ...post, schema_type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                >
                  <option value="BlogPosting">BlogPosting</option>
                  <option value="Article">Article</option>
                  <option value="HowTo">HowTo</option>
                  <option value="FAQPage">FAQPage</option>
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
            {saving ? 'Saving...' : 'Save Post'}
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
