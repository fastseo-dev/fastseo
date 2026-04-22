'use client';

import { useEffect, useState } from 'react';

interface Stats {
  blogPosts: number;
  caseStudies: number;
  contacts: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({ blogPosts: 0, caseStudies: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Blog Posts</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.blogPosts}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Case Studies</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.caseStudies}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Contact Submissions</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.contacts}</p>
          </div>
        </div>
      )}
    </div>
  );
}
