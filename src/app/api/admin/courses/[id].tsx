// // pages/api/admin/courses/[id].ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/lib/mongodb';
// import {Course} from '../../../../models/course';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await dbConnect();
//   const { id } = req.query;

//   switch (req.method) {
//     case 'GET':
//       try {
//         const course = await Course.findById(id);
//         if (!course) {
//           return res.status(404).json({ message: 'Course not found' });
//         }
//         return res.status(200).json(course);
//       } catch (error) {
//         return res.status(500).json({ message: 'Error fetching course' });
//       }

//     case 'PUT':
//       try {
//         const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
//         if (!course) {
//           return res.status(404).json({ message: 'Course not found' });
//         }
//         return res.status(200).json(course);
//       } catch (error) {
//         return res.status(500).json({ message: 'Error updating course' });
//       }

//     case 'DELETE':
//       try {
//         const course = await Course.findByIdAndDelete(id);
//         if (!course) {
//           return res.status(404).json({ message: 'Course not found' });
//         }
//         return res.status(200).json({ message: 'Course deleted successfully' });
//       } catch (error) {
//         return res.status(500).json({ message: 'Error deleting course' });
//       }

//     default:
//       res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
//       return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }
// }