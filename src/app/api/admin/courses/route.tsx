// src/app/api/admin/courses/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Course } from '@/models/course';

export async function GET() {
  try {
    await dbConnect();
    const courses = await Course.find({}).sort({ createdAt: -1 });
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const course = await Course.create(body);
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    );
  }
}