// lib/db.ts
import dbConnect from './mongodb';
import { Course } from '../../src/models/course';
// src/lib/db.ts
import { Model, Document } from 'mongoose';

export async function leanQuery<T extends Document, L = Omit<T, keyof Document>>(
  query: ReturnType<typeof Model.find>
): Promise<L[]> {
  return query.lean().exec() as Promise<L[]>;
}

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