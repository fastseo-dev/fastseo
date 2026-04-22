'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  niche: string;
  result: string;
}

export default function CaseStudiesPage() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchStudies();
  }, []);

  const fetchStudies = async () => {
    try {
      const res = await fetch('/api/admin/case-studies');
      if (res.ok) {
        const data = await res.json();
        setStudies(data);
      }
    } catch (error) {
      console.error('Failed to fetch case studies:', error);
      alert('Error loading case studies');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/case-studies/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setStudies(studies.filter((s) => s.id !== id));
      } else {
        alert('Failed to delete case study');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting case study');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
        <Link
          href="/admin/case-studies/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + New Case Study
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : studies.length === 0 ? (
        <p className="text-gray-500">No case studies yet.</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Niche</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Result</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((study) => (
                <tr key={study.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{study.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{study.niche}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{study.result}</td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <Link
                      href={`/admin/case-studies/${study.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(study.id)}
                      disabled={deleting === study.id}
                      className="text-red-600 hover:text-red-800 disabled:opacity-50"
                    >
                      {deleting === study.id ? 'Deleting...' : 'Delete'}
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
