// src/app/api/admin/courses/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Course, ICourseDocument } from '@/models/course';

export async function GET() {
  try {
    await dbConnect();
    
    const courses = await Course.find({})
      .sort({ createdAt: -1 })
      .lean() as ICourseDocument[];

    const formattedCourses = courses.map(course => ({
      id: course._id.toString(),
      title: course.title,
      slug: course.slug,
      price: course.price,
      enrolledStudents: course.enrolledStudents,
      status: course.status,
      createdAt: course.createdAt?.toISOString(),
      updatedAt: course.updatedAt?.toISOString()
    }));

    return NextResponse.json(formattedCourses);
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    return NextResponse.json([]);
  }
}