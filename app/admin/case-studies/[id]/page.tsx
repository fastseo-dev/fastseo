'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { validateAndSanitize, validators } from '@/lib/validation';

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
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

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
        setStudy(data);
      } else {
        alert('Failed to load case study');
      }
    } catch (error) {
      console.error('Error fetching study:', error);
      alert('Error loading case study');
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
        alert('Case study saved successfully');
        router.push('/admin/case-studies');
      } else {
        alert('Failed to save case study');
      }
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving case study');
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

      <form onSubmit={handleSubmit} className="max-w-4xl bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={study.title}
              onChange={(e) => setStudy({ ...study, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Case study title"
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
            <input
              type="text"
              value={study.slug}
              onChange={(e) => setStudy({ ...study, slug: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="case-study-slug"
            />
            {errors.slug && <p className="text-red-600 text-sm mt-1">{errors.slug}</p>}
          </div>

          {/* Niche */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Niche</label>
            <select
              value={study.niche}
              onChange={(e) => setStudy({ ...study, niche: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {NICHES.map((niche) => (
                <option key={niche} value={niche}>
                  {niche}
                </option>
              ))}
            </select>
          </div>

          {/* Client */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Client Description</label>
            <input
              type="text"
              value={study.client}
              onChange={(e) => setStudy({ ...study, client: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Client description"
            />
          </div>

          {/* Result */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Result</label>
              <input
                type="text"
                value={study.result}
                onChange={(e) => setStudy({ ...study, result: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0 → 180,000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Metric</label>
              <input
                type="text"
                value={study.metric}
                onChange={(e) => setStudy({ ...study, metric: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Monthly organic visits"
              />
            </div>
          </div>

          {/* Period */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
            <input
              type="text"
              value={study.period}
              onChange={(e) => setStudy({ ...study, period: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="14 months"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={study.tags.join(', ')}
              onChange={(e) =>
                setStudy({ ...study, tags: e.target.value.split(',').map((t) => t.trim()) })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="organic, seo, ranking"
            />
          </div>

          {/* Body */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
            <textarea
              value={study.body}
              onChange={(e) => setStudy({ ...study, body: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="Case study details (HTML)"
              rows={12}
            />
          </div>
        </div>

        <div className="mt-8 flex space-x-3">
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
