'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface Page {
  id: string;
  title: string;
  slug: string;
  page_type: string;
  status: 'draft' | 'published';
  updated_at: string;
}

const PAGE_TYPE_LABELS: Record<string, string> = {
  page: 'Page',
  service: 'Service',
  landing: 'Landing',
  legal: 'Legal',
};

export default function PagesAdminPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [migrating, setMigrating] = useState(false);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const res = await fetch('/api/admin/pages');
      const data = await res.json();
      if (res.ok) {
        setPages(Array.isArray(data) ? data : []);
      } else {
        toast.error('Failed to load pages: ' + (data.error || res.status));
      }
    } catch {
      toast.error('Error loading pages');
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (!confirm('Import all MDX pages from content/pages/ into Supabase? Already-imported pages will be skipped.')) return;
    setMigrating(true);
    try {
      const res = await fetch('/api/admin/migrate-pages', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        const msg = `Found ${data.totalFiles} files → Imported ${data.imported}, Skipped ${data.skipped}, Failed ${data.failed}.`;
        if (data.failed > 0) {
          const firstError = data.failedDetails?.[0];
          toast.error(`${msg} First error: ${firstError?.slug}: ${firstError?.error}`);
        } else {
          toast.success(msg);
        }
        if (data.imported > 0) fetchPages();
      } else {
        toast.error(data.error || 'Migration failed');
      }
    } catch (error) {
      toast.error('Migration error: ' + String(error));
    } finally {
      setMigrating(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm('Import pre-written eCommerce SEO and Law Firm SEO service pages? Already-existing slugs will be skipped.')) return;
    setSeeding(true);
    try {
      const res = await fetch('/api/admin/seed-pages', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        toast.success(`Done! Imported ${data.imported}, Skipped ${data.skipped}.`);
        if (data.imported > 0) fetchPages();
      } else {
        toast.error(data.error || 'Seeding failed');
      }
    } catch (error) {
      toast.error('Error: ' + String(error));
    } finally {
      setSeeding(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this page?')) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPages(pages.filter((p) => p.id !== id));
        toast.success('Page deleted');
      } else {
        toast.error('Failed to delete page');
      }
    } catch {
      toast.error('Error deleting page');
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (iso: string) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Pages</h1>
        <div className="flex gap-3">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 disabled:opacity-50 text-sm font-medium"
          >
            {seeding ? 'Importing...' : '⬇ Import Service Pages'}
          </button>
          <button
            onClick={handleMigrate}
            disabled={migrating}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-sm font-medium"
          >
            {migrating ? 'Importing...' : '⬇ Import MDX Pages'}
          </button>
          <Link
            href="/admin/pages/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
          >
            + New Page
          </Link>
        </div>
      </div>

      <div className="mb-4 rounded-lg bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-800">
        <strong>Note:</strong> Pages created here are served at{' '}
        <code className="bg-blue-100 px-1 rounded">/pages/[slug]</code>. Run the SQL in the setup
        instructions to create the <code className="bg-blue-100 px-1 rounded">pages</code> table first.
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : pages.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium mb-2">No pages yet</p>
          <p className="text-sm">Click &quot;+ New Page&quot; to create one, or &quot;⬇ Import MDX Pages&quot; to import existing pages.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Slug</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Updated</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{page.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono">{page.slug}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {PAGE_TYPE_LABELS[page.page_type] ?? page.page_type}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        page.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{formatDate(page.updated_at)}</td>
                  <td className="px-6 py-4 text-sm space-x-3">
                    <a
                      href={`/pages/${page.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      View ↗
                    </a>
                    <Link href={`/admin/pages/${page.id}`} className="text-blue-600 hover:text-blue-800">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(page.id)}
                      disabled={deleting === page.id}
                      className="text-red-600 hover:text-red-800 disabled:opacity-50"
                    >
                      {deleting === page.id ? 'Deleting...' : 'Delete'}
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
