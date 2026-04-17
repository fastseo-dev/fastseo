import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep trailing slashes on pages (canonical URLs in metadata already use them)
  trailingSlash: true,

  // Prevent Next.js from redirecting /api/... routes to /api/.../
  // This is needed so Keystatic's OAuth callback URL works without trailing slash
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
