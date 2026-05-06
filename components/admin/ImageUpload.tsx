'use client';

import { useState } from 'react';
import { FormField } from './FormField';

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  error?: string;
  required?: boolean;
}

export function ImageUpload({ label, value, onChange, error, required }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [tab, setTab] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState(value || '');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    setUploadError('');
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || `Upload failed (${res.status})`);
      }

      onChange(json.url);
      setUrlInput(json.url);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setUploadError(message + ' — try the URL tab instead');
    } finally {
      setUploading(false);
    }
  };

  const handleUrlApply = () => {
    onChange(urlInput.trim());
  };

  const handleRemove = () => {
    onChange('');
    setUrlInput('');
  };

  return (
    <FormField label={label} error={error} required={required}>
      <div className="space-y-3">
        {/* Tabs */}
        <div className="flex border border-gray-200 rounded-lg overflow-hidden w-fit">
          <button
            type="button"
            onClick={() => setTab('upload')}
            className={`px-3 py-1.5 text-xs font-medium transition ${
              tab === 'upload' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Upload File
          </button>
          <button
            type="button"
            onClick={() => setTab('url')}
            className={`px-3 py-1.5 text-xs font-medium transition ${
              tab === 'url' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Paste URL
          </button>
        </div>

        {tab === 'upload' ? (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              className="block w-full text-sm text-gray-700
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-medium
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700
                disabled:opacity-50"
            />
            {uploading && <p className="text-sm text-blue-600 mt-1">Uploading...</p>}
            {uploadError && <p className="text-sm text-red-500 mt-1">{uploadError}</p>}
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleUrlApply}
              className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            >
              Apply
            </button>
          </div>
        )}

        {/* Preview */}
        {value && (
          <div className="relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={value}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border border-gray-300"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition"
            >
              Remove
            </button>
            <p className="text-[11px] text-gray-400 mt-1 truncate">{value}</p>
          </div>
        )}
      </div>
    </FormField>
  );
}
