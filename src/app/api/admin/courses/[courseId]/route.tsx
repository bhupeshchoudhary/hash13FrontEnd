// src/app/api/admin/courses/[courseId]/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Course } from '@/models/course';

// PUT handler
export async function PUT(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    await dbConnect();
    const body = await request.json();

    const updatedCourse = await Course.findByIdAndUpdate(
      params.courseId,
      { ...body, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedCourse) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCourse);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating course' },
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
    
    const deletedCourse = await Course.findByIdAndDelete(params.courseId);

    if (!deletedCourse) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Course deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting course' },
      { status: 500 }
    );
  }
}

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
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching course' },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Allow': 'GET, PUT, DELETE, OPTIONS',
    },
  });
}