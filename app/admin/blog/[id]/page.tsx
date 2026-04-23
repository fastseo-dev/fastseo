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
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

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
        setPost(data);
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

      <form onSubmit={handleSubmit} className="max-w-4xl bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </FormField>
        </div>

        <div className="mt-8 flex space-x-3">
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
