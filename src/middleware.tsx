// // src/middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { jwtVerify } from 'jose';

// // Export the config directly in the same file
// export const config = {
//   matcher: ['/admin/:path*'],
//   runtime: 'nodejs'
// };

// const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// async function verifyAuth(token: string) {
//   try {
//     const { payload } = await jwtVerify(token, secret);
//     return payload;
//   } catch {
//     return null;
//   }
// }

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow public routes
//   if (pathname === '/admin/login') {
//     const token = request.cookies.get('auth-token')?.value;
//     if (token) {
//       try {
//         const payload = await verifyAuth(token);
//         if (payload) {
//           return NextResponse.redirect(new URL('/admin/dashboard', request.url));
//         }
//       } catch {
//         // Invalid token, continue to login page
//       }
//     }
//     return NextResponse.next();
//   }

//   // Protect admin routes
//   if (pathname.startsWith('/admin')) {
//     const token = request.cookies.get('auth-token')?.value;

//     if (!token) {
//       return NextResponse.redirect(new URL('/admin/login', request.url));
//     }

//     const payload = await verifyAuth(token);
//     if (!payload) {
//       return NextResponse.redirect(new URL('/admin/login', request.url));
//     }

//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }





// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Paths that don't require authentication
const publicPaths = ['/admin/login', '/admin/register'];

// Paths that require super-admin role
const superAdminPaths = ['/admin/settings'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Get token from cookies
  const token = request.cookies.get('auth-token');

  // If no token, redirect to login
  if (!token) {
    return RedirectToLogin(request);
  }

  try {
    // Verify token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token.value, secret);
    
    // Check role for super-admin paths
    if (superAdminPaths.includes(pathname) && payload.role !== 'super-admin') {
      return NextResponse.redirect(new URL('/admin/unauthorized', request.url));
    }

    // Add user info to headers for API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('user', JSON.stringify(payload));

    // Continue with modified headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    // If token is invalid, clear it and redirect to login
    const response = RedirectToLogin(request);
    response.cookies.delete('auth-token');
    return response;
  }
}

function RedirectToLogin(request: NextRequest) {
  const loginUrl = new URL('/admin/login', request.url);
  loginUrl.searchParams.set('from', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};