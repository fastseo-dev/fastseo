'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Blog Posts', href: '/admin/blog' },
  { label: 'Case Studies', href: '/admin/case-studies' },
  { label: 'Settings', href: '/admin/settings' },
  { label: 'Integrations', href: '/admin/integrations' },
  { label: 'Pricing', href: '/admin/pricing' },
  { label: 'Contact Submissions', href: '/admin/contact' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    // Clear cookie by calling logout API
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold">FastSEO Admin</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {menuItems.find((item) => item.href === pathname)?.label || 'Admin'}
          </h2>
        </div>

        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
}
