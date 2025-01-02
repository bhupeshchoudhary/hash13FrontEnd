// src/utils/auth.ts

import { jwtVerify, SignJWT, JWTPayload } from 'jose';
import { cookies } from 'next/headers';
import type { AdminRole, AdminJWTPayload } from './../types/admin';

// Define a type that extends JWTPayload
interface ExtendedJWTPayload extends JWTPayload {
  userId?: string;
  role?: AdminRole;
  email?: string;
  name?: string;
}

// Update the type guard to use ExtendedJWTPayload
function isAdminJWTPayload(payload: ExtendedJWTPayload): payload is ExtendedJWTPayload & AdminJWTPayload {
  return (
    typeof payload.userId === 'string' &&
    typeof payload.role === 'string' &&
    typeof payload.email === 'string' &&
    typeof payload.name === 'string' &&
    (payload.role === 'admin' || payload.role === 'super-admin')
  );
}

export async function getUser(): Promise<AdminJWTPayload | null> {
  const token = cookies().get('auth-token');

  if (!token) {
    return null;
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token.value, secret);
    
    if (isAdminJWTPayload(payload)) {
      return {
        userId: payload.userId,
        role: payload.role,
        email: payload.email,
        name: payload.name
      };
    }
    
    return null;
  } catch {
    return null;
  }
}

export async function createToken(user: AdminJWTPayload): Promise<string> {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const tokenData: ExtendedJWTPayload = {
    userId: user.userId,
    role: user.role,
    email: user.email,
    name: user.name,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 hours
  };

  return await new SignJWT(tokenData)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
}

export function setAuthCookie(token: string) {
  cookies().set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 86400 // 1 day
  });
}

export function clearAuthCookie() {
  cookies().delete('auth-token');
}

// Helper function to extract user data from token payload
export function extractUserFromPayload(payload: ExtendedJWTPayload): AdminJWTPayload | null {
  if (isAdminJWTPayload(payload)) {
    return {
      userId: payload.userId,
      role: payload.role,
      email: payload.email,
      name: payload.name
    };
  }
  return null;
}