// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Export the config directly in the same file
export const config = {
  matcher: ['/admin/:path*'],
  runtime: 'nodejs'
};

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

async function verifyAuth(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (pathname === '/admin/login') {
    const token = request.cookies.get('auth-token')?.value;
    if (token) {
      try {
        const payload = await verifyAuth(token);
        if (payload) {
          return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
      } catch {
        // Invalid token, continue to login page
      }
    }
    return NextResponse.next();
  }

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const payload = await verifyAuth(token);
    if (!payload) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}