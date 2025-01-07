// src/app/api/admin/courses/[courseId]/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Course } from '@/models/course';

// GET handler
export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    await dbConnect();
    const course = await Course.findById(params.courseId);
    
    if (!course) {
      return NextResponse.json(
        { message: 'Course not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching course' },
      { status: 500 }
    );
  }
}

// PUT handler
export async function PUT(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const course = await Course.findByIdAndUpdate(
      params.courseId,
      body,
      { new: true }
    );
    
    if (!course) {
      return NextResponse.json(
        { message: 'Course not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating course' },
      { status: 500 }
    );
  }
}

// DELETE handler
export async function DELETE(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    await dbConnect();
    const course = await Course.findByIdAndDelete(params.courseId);
    
    if (!course) {
      return NextResponse.json(
        { message: 'Course not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Course deleted successfully' }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error deleting course' },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Allow': 'GET, PUT, DELETE, OPTIONS',
    },
  });
}