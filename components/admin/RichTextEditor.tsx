'use client';

import { useRef } from 'react';
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

const TOOLBAR_ACTIONS = [
  { label: 'H2', wrap: ['<h2>', '</h2>'] },
  { label: 'H3', wrap: ['<h3>', '</h3>'] },
  { label: 'Bold', wrap: ['<strong>', '</strong>'] },
  { label: 'Italic', wrap: ['<em>', '</em>'] },
  { label: 'Link', wrap: ['<a href="URL">', '</a>'] },
  { label: 'UL', wrap: ['<ul>\n  <li>', '</li>\n</ul>'] },
  { label: 'OL', wrap: ['<ol>\n  <li>', '</li>\n</ol>'] },
  { label: 'LI', wrap: ['<li>', '</li>'] },
  { label: 'Para', wrap: ['<p>', '</p>'] },
  { label: 'Img', wrap: ['<img src="', '" alt="" />', true] },
  { label: 'HR', insert: '<hr />\n' },
  { label: 'BR', insert: '<br />\n' },
];

export function RichTextEditor({
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  placeholder,
}: RichTextEditorProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const insertAt = (action: typeof TOOLBAR_ACTIONS[number]) => {
    const ta = ref.current;
    if (!ta) return;

    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = value.slice(start, end);
    let newValue: string;
    let cursor: number;

    if ('insert' in action && action.insert) {
      newValue = value.slice(0, start) + action.insert + value.slice(end);
      cursor = start + action.insert.length;
    } else if ('wrap' in action) {
      const [open, close] = action.wrap as string[];
      newValue = value.slice(0, start) + open + selected + close + value.slice(end);
      cursor = start + open.length + selected.length + close.length;
    } else {
      return;
    }

    onChange(newValue);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(cursor, cursor);
    });
  };

  return (
    <FormField label={label} error={error} required={required}>
      <div className="space-y-0 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        {/* Toolbar */}
        <div className="flex flex-wrap gap-1 bg-gray-50 border-b border-gray-200 p-2">
          {TOOLBAR_ACTIONS.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={() => insertAt(action)}
              className="px-2.5 py-1 rounded text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition"
            >
              {action.label}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-gray-400 self-center pr-1">HTML editor</span>
        </div>

        {/* Textarea */}
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder || '<p>Write your content here using HTML tags...</p>'}
          rows={20}
          className="w-full px-4 py-3 font-mono text-sm text-gray-900 bg-white resize-y focus:outline-none leading-relaxed"
          spellCheck={false}
        />
      </div>
    </FormField>
  );
}
