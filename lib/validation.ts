// Input validation utilities
export const validators = {
  required: (value: string, fieldName: string) => {
    if (!value || !value.trim()) {
      return `${fieldName} is required`;
    }
    return null;
  },

  slug: (value: string) => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
      return 'Slug must be lowercase letters, numbers, and hyphens only';
    }
    return null;
  },

  email: (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Invalid email address';
    }
    return null;
  },

  url: (value: string) => {
    try {
      new URL(value);
      return null;
    } catch {
      return 'Invalid URL';
    }
  },

  minLength: (value: string, min: number, fieldName: string) => {
    if (value.length < min) {
      return `${fieldName} must be at least ${min} characters`;
    }
    return null;
  },

  maxLength: (value: string, max: number, fieldName: string) => {
    if (value.length > max) {
      return `${fieldName} must be less than ${max} characters`;
    }
    return null;
  },
};

// Sanitize HTML to prevent XSS
export function sanitizeHtml(html: string): string {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Validate and sanitize input
export function validateAndSanitize(value: string, maxLength = 10000): string {
  if (!value) return '';
  if (value.length > maxLength) {
    return value.substring(0, maxLength);
  }
  return value.trim();
}
