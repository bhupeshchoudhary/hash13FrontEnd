// src/app/api/admin/settings/profile/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Admin } from '@/models/admin';

export async function PUT(request: Request) {
  try {
    await dbConnect();
    const { name, email } = await request.json();

    // Add validation here

    const admin = await Admin.findOneAndUpdate(
      { email: email },
      { name },
      { new: true }
    );

    if (!admin) {
      return NextResponse.json(
        { error: 'Admin not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, admin });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}