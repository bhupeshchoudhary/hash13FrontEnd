// src/middleware/auth.ts

import { NextResponse } from 'next/server';
import { jwtVerify, JWTPayload as JoseJWTPayload } from 'jose';
import type { NextRequest } from 'next/server';
import type { AdminRole } from '../../types/admin';

// Extend the base JWTPayload from jose
interface CustomJWTPayload extends JoseJWTPayload {
  userId: string;
  role: AdminRole;
  email: string;
}

export async function verifyAuth(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  if (!token) {
    return null;
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token.value, secret);
    
    // Type check the payload
    if (
      typeof payload.userId === 'string' &&
      typeof payload.role === 'string' &&
      typeof payload.email === 'string' &&
      (payload.role === 'admin' || payload.role === 'super-admin')
    ) {
      return payload as CustomJWTPayload;
    }
    
    return null;
  } catch {
    return null;
  }
}

export function requireRole(roles: AdminRole[]) {
  return async function middleware(request: NextRequest) {
    const user = await verifyAuth(request);

    if (!user || !roles.includes(user.role)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Add user info to headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', user.userId);
    requestHeaders.set('x-user-role', user.role);
    requestHeaders.set('x-user-email', user.email);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  };
}

// Helper to get user from headers in API routes
export function getUserFromHeaders(headers: Headers) {
  const userId = headers.get('x-user-id');
  const role = headers.get('x-user-role') as AdminRole;
  const email = headers.get('x-user-email');

  if (!userId || !role || !email) {
    return null;
  }

  return { userId, role, email };
}