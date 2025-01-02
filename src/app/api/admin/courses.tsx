// pages/api/admin/courses.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import { Course } from '@/models/course';
import type { NewCourse } from '../../../../types/courses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const courseData: NewCourse = req.body;
      const course = await Course.create(courseData);
      return res.status(201).json(course);
    } catch (error) {
      console.error('Failed to create course:', error);
      return res.status(500).json({ 
        message: 'Error creating course', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}