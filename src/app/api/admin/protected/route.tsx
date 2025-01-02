// src/app/api/admin/protected/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { requireRole, getUserFromHeaders } from '@/middleware/auth';

const adminMiddleware = requireRole(['admin', 'super-admin']);

export async function GET(request: NextRequest) {
  // Apply middleware
  const middlewareResponse = await adminMiddleware(request);
  if (middlewareResponse.status === 403) {
    return middlewareResponse;
  }

  // Get user from headers
  const user = getUserFromHeaders(request.headers);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Your protected route logic here
  return NextResponse.json({
    message: 'Protected data',
    user
  });
}