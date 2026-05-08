'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  status: 'draft' | 'published';
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [migrating, setMigrating] = useState(false);
  const [resyncing, setResyncing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog');
      const data = await res.json();
      if (!res.ok) {
        toast.error('Failed to load posts: ' + (data.error || res.status));
      } else {
        setPosts(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Failed to fetch blog posts:', error);
      toast.error('Error loading blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (!confirm('Import all MDX blog posts into Supabase? Already-imported posts will be skipped.')) return;
    setMigrating(true);
    try {
      const res = await fetch('/api/admin/migrate-mdx', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        const msg = `Found ${data.totalFiles} files → Imported ${data.imported}, Skipped ${data.skipped}, Failed ${data.failed}.`;
        if (data.failed > 0) {
          const firstError = data.failedDetails?.[0];
          toast.error(`${msg} First error: ${firstError?.slug}: ${firstError?.error}`);
        } else {
          toast.success(msg);
        }
        if (data.imported > 0) fetchPosts();
      } else {
        toast.error(data.error || 'Migration failed');
      }
    } catch (error) {
      toast.error('Migration error: ' + String(error));
    } finally {
      setMigrating(false);
    }
  };

  const handleResync = async () => {
    if (!confirm('Resync all MDX blog posts to Supabase? This will overwrite existing Supabase content with the latest MDX file content.')) return;
    setResyncing(true);
    try {
      const res = await fetch('/api/admin/resync-mdx', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        toast.success(`Done! Updated ${data.updated}, Inserted ${data.inserted}, Failed ${data.failed}.`);
        if (data.inserted > 0) fetchPosts();
      } else {
        toast.error(data.error || 'Resync failed');
      }
    } catch (error) {
      toast.error('Resync error: ' + String(error));
    } finally {
      setResyncing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
        toast.success('Post deleted');
      } else {
        toast.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Error deleting post');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <div className="flex gap-3">
          <button
            onClick={handleResync}
            disabled={resyncing}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 text-sm font-medium"
          >
            {resyncing ? 'Resyncing...' : '🔄 Resync MDX Posts'}
          </button>
          <button
            onClick={handleMigrate}
            disabled={migrating}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-sm font-medium"
          >
            {migrating ? 'Importing...' : '⬇ Import MDX Posts'}
          </button>
          <Link
            href="/admin/blog/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
          >
            + New Post
          </Link>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500">No blog posts yet.</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Author</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{post.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{post.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        post.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-3">
                    <a
                      href={`/blog/${post.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      View ↗
                    </a>
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      disabled={deleting === post.id}
                      className="text-red-600 hover:text-red-800 disabled:opacity-50"
                    >
                      {deleting === post.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
