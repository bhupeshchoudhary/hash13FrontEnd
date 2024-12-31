// src/app/api/admin/students/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Student } from '@/models/student';

export async function GET() {
  try {
    await dbConnect();
    const students = await Student.find({})
      .sort({ createdAt: -1 })
      .select('-password');
      
    return NextResponse.json(students);
  } catch (error) {
    console.error('Failed to fetch students:', error);
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    );
  }
}