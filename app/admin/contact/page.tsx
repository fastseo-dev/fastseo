'use client';

import { useEffect, useState } from 'react';

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function ContactPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/contact');
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Submissions</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : submissions.length === 0 ? (
        <p className="text-gray-500">No submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div key={sub.id} className="bg-white rounded-lg shadow p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium text-gray-900">{sub.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{sub.email}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Message</p>
                <p className="text-gray-700 whitespace-pre-wrap">{sub.message}</p>
              </div>
              <p className="text-xs text-gray-500">
                {new Date(sub.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
