'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { validateAndSanitize, validators } from '@/lib/validation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  categories: string[];
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
        alert('Post saved successfully');
        router.push('/admin/blog');
      } else {
        alert('Failed to save post');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post');
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
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Post title"
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
            <input
              type="text"
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="post-slug"
            />
            {errors.slug && <p className="text-red-600 text-sm mt-1">{errors.slug}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
            <input
              type="date"
              value={post.date}
              onChange={(e) => setPost({ ...post, date: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
            <textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Short summary"
              rows={2}
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="Post content (HTML)"
              rows={12}
            />
            {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
            <input
              type="text"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Author name"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories (comma-separated)
            </label>
            <input
              type="text"
              value={post.categories.join(', ')}
              onChange={(e) =>
                setPost({
                  ...post,
                  categories: e.target.value.split(',').map((c) => c.trim()),
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="SEO, Marketing, Tips"
            />
          </div>
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
