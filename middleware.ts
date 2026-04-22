import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    // Allow /admin/login without authentication
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for admin_session cookie on other /admin routes
    const adminSession = request.cookies.get('admin_session')?.value;

    if (!adminSession) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
