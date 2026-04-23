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

      <form onSubmit={handleSubmit} className="max-w-4xl bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
