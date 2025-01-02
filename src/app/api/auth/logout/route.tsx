// src/app/api/auth/logout/route.ts

import { NextResponse } from 'next/server';
import { clearAuthCookie } from '../../../../../utils/auth';

export async function POST() {
  clearAuthCookie();
  return NextResponse.json({ success: true });
}