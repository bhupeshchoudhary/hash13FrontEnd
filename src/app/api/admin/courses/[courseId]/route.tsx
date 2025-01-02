// pages/api/admin/courses/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import {Course } from '../../../../../models/course';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case 'PUT':
      try {
        const updatedCourse = await Course.findByIdAndUpdate(
          id,
          { ...req.body, updatedAt: new Date() },
          { new: true }
        );
        
        if (!updatedCourse) {
          return res.status(404).json({ error: 'Course not found' });
        }

        return res.status(200).json(updatedCourse);
      } catch (error) {
        return res.status(500).json({ error: 'Error updating course' });
      }

    case 'DELETE':
      try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        
        if (!deletedCourse) {
          return res.status(404).json({ error: 'Course not found' });
        }

        return res.status(200).json({ message: 'Course deleted successfully' });
      } catch (error) {
        return res.status(500).json({ error: 'Error deleting course' });
      }

    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}