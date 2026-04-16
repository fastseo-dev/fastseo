"use client";

// Keystatic admin has its own full-page UI — strip out the site Navbar/Footer
export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
