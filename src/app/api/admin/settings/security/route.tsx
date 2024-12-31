// src/app/api/admin/settings/security/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Admin } from '@/models/admin';
import bcrypt from 'bcryptjs';

export async function PUT(request: Request) {
  try {
    await dbConnect();
    const { currentPassword, newPassword, email } = await request.json();

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return NextResponse.json(
        { error: 'Admin not found' },
        { status: 404 }
      );
    }

    const isValid = await admin.comparePassword(currentPassword);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    
    admin.password = hashedPassword;
    await admin.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update password' },
      { status: 500 }
    );
  }
}