// utils/courseUtils.ts
import { courseInfo } from '../data/courses/courses';
import { Course } from '../types/courses';

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courseInfo.find(course => course.slug === slug);
};

export const getCourseById = (id: string): Course | undefined => {
  return courseInfo.find(course => course._id === id);
};