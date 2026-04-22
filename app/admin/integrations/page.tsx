'use client';

import { useEffect, useState } from 'react';

interface Integrations {
  id: string;
  ga_measurement_id: string;
  gsc_verification_code: string;
  gtm_id: string;
  head_scripts: string;
  body_scripts: string;
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integrations | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchIntegrations();
  }, []);

  const fetchIntegrations = async () => {
    try {
      const res = await fetch('/api/admin/integrations');
      if (res.ok) {
        const data = await res.json();
        setIntegrations(data);
      }
    } catch (error) {
      console.error('Error fetching integrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!integrations) return;

    setSaving(true);
    try {
      const res = await fetch('/api/admin/integrations', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(integrations),
      });

      if (res.ok) {
        alert('Integrations saved');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!integrations) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Integrations & Scripts</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GA4 Measurement ID</label>
          <input
            type="text"
            value={integrations.ga_measurement_id}
            onChange={(e) => setIntegrations({ ...integrations, ga_measurement_id: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="G-XXXXXXXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GSC Verification Code</label>
          <input
            type="text"
            value={integrations.gsc_verification_code}
            onChange={(e) => setIntegrations({ ...integrations, gsc_verification_code: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GTM Container ID</label>
          <input
            type="text"
            value={integrations.gtm_id}
            onChange={(e) => setIntegrations({ ...integrations, gtm_id: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="GTM-XXXXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Custom Head Scripts</label>
          <textarea
            value={integrations.head_scripts}
            onChange={(e) => setIntegrations({ ...integrations, head_scripts: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            placeholder="<script>...</script>"
            rows={6}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Custom Body Scripts</label>
          <textarea
            value={integrations.body_scripts}
            onChange={(e) => setIntegrations({ ...integrations, body_scripts: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            placeholder="<script>...</script>"
            rows={6}
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Integrations'}
        </button>
      </form>
    </div>
  );
}
