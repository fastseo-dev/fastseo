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
  const [previewUrl, setPreviewUrl] = useState(value);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const { url } = await res.json();
      setPreviewUrl(url);
      onChange(url);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <FormField label={label} error={error} required={required}>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-medium
              file:bg-blue-600 file:text-white
              hover:file:bg-blue-700
              disabled:opacity-50"
          />
          {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
        </div>

        {previewUrl && (
          <div className="relative group">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border border-gray-300"
            />
            <button
              type="button"
              onClick={() => {
                setPreviewUrl('');
                onChange('');
              }}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </FormField>
  );
}
