// lib/db.ts
import dbConnect from './mongodb';
import { Course } from '../../src/models/course';

export async function getCourses() {
  await dbConnect();
  return Course.find({}).sort({ createdAt: -1 });
}

export async function getCourseBySlug(slug: string) {
  await dbConnect();
  return Course.findOne({ slug });
}

export async function createCourse(data: any) {
  await dbConnect();
  return Course.create(data);
}

export async function updateCourse(id: string, data: any) {
  await dbConnect();
  return Course.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

export async function deleteCourse(id: string) {
  await dbConnect();
  return Course.findByIdAndDelete(id);
}