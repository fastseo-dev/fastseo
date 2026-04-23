'use client';

import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { FormField } from './FormField';

interface RichTextEditorProps {
  label: string;
  value: string;
  onChange: (html: string) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export function RichTextEditor({
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  placeholder,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Link.configure({ openOnClick: false }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onBlur: onBlur,
  });

  if (!editor) return null;

  return (
    <FormField label={label} error={error} required={required}>
      <div className="space-y-2">
        <div className="flex gap-1 flex-wrap bg-gray-100 p-2 rounded-lg border border-gray-300">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              editor.isActive('bold') ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              editor.isActive('italic') ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              editor.isActive('bulletList') ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              editor.isActive('codeBlock') ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Code
          </button>
          <button
            onClick={() => editor.chain().focus().clearNodes().run()}
            className="px-3 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition"
          >
            Clear
          </button>
        </div>

        <EditorContent
          editor={editor}
          className="border border-gray-300 rounded-lg p-3 min-h-80 prose prose-sm max-w-none focus-within:ring-2 focus-within:ring-blue-500"
        />
      </div>
    </FormField>
  );
}
