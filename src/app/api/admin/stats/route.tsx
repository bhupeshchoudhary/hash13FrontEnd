// // src/app/api/admin/stats/route.ts
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import { Course, ICourseDocument } from '@/models/course';
// import { Student } from '@/models/student';
// import { Types } from 'mongoose';
// import { LeanDocument } from '../../../../../types/mongoose';


// const recentCourses = await Course.find()
//   .sort({ createdAt: -1 })
//   .limit(5)
//   .lean<LeanDocument<ICourseDocument>>();

// interface LeanCourse {
//   _id: Types.ObjectId;
//   title: string;
//   enrolledStudents: number;
//   status: 'draft' | 'published';
//   price: number;
// }

// interface StatsResponse {
//   totalCourses: number;
//   totalStudents: number;
//   totalRevenue: number;
//   recentCourses: Array<{
//     id: string;
//     title: string;
//     enrolledStudents: number;
//     status: 'draft' | 'published';
//     price: number;
//   }>;
// }

// export async function GET() {
//   try {
//     await dbConnect();

//     const [
//       courseStats,
//       totalStudents,
//       recentCourses
//     ] = await Promise.all([
//       Course.getStats(),
//       Student.countDocuments(),
//       Course.find()
//         .sort({ createdAt: -1 })
//         .limit(5)
//         .lean()
//     ]) as [
//       Awaited<ReturnType<typeof Course.getStats>>,
//       number,
//       LeanCourse[]
//     ];

//     const response: StatsResponse = {
//       totalCourses: courseStats.totalCourses,
//       totalStudents,
//       totalRevenue: courseStats.totalRevenue,
//       recentCourses: recentCourses.map(course => ({
//         id: course._id.toString(),
//         title: course.title,
//         enrolledStudents: course.enrolledStudents,
//         status: course.status,
//         price: course.price
//       }))
//     };

//     return NextResponse.json(response);
//   } catch (error) {
//     console.error('Failed to fetch stats:', error);
    
//     const errorResponse: StatsResponse = {
//       totalCourses: 0,
//       totalStudents: 0,
//       totalRevenue: 0,
//       recentCourses: []
//     };
    
//     return NextResponse.json(errorResponse);
//   }
// }










// src/app/api/admin/stats/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Course, ICourseLean, CourseStats, ICourseDocument } from '@/models/course';
import { Student } from '@/models/student';
import { leanQuery } from '@/lib/db';

interface StatsResponse {
  totalCourses: number;
  totalStudents: number;
  totalRevenue: number;
  recentCourses: Array<{
    id: string;
    title: string;
    enrolledStudents: number;
    status: 'draft' | 'published';
    price: number;
  }>;
}


export async function GET() {
    try {
      await dbConnect();
  
      const [courseStats, totalStudents, recentCourses] = await Promise.all([
        Course.getStats(),
        Student.countDocuments(),
        leanQuery<ICourseDocument, ICourseLean>(
          Course.find().sort({ createdAt: -1 }).limit(5)
        )
      ]);
  
      const response: StatsResponse = {
        totalCourses: courseStats.totalCourses,
        totalStudents,
        totalRevenue: courseStats.totalRevenue,
        recentCourses: recentCourses.map(course => ({
          id: course._id.toString(),
          title: course.title,
          enrolledStudents: course.enrolledStudents,
          status: course.status,
          price: course.price
        }))
      };
  
      return NextResponse.json(response);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      return NextResponse.json<StatsResponse>({
        totalCourses: 0,
        totalStudents: 0,
        totalRevenue: 0,
        recentCourses: []
      });
    }
  }