// src/app/admin/courses/[courseId]/edit.tsx
'use client';

import { useEffect, useState } from 'react';
import { CourseEditor } from '@/components/admin/CourseEditor';
import type { Course } from '../../../../../types/courses';

interface EditCoursePageProps {
  params: {
    courseId: string;
  };
}

export default function EditCoursePage({ params }: EditCoursePageProps) {
  const { courseId } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/admin/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course');
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleUpdate = (updatedCourse: Course) => {
    setCourse(updatedCourse);
    // Optionally show success message or redirect
  };

  const handleClose = () => {
    // Implement navigation back or close modal
    window.history.back();
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-red-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold text-red-800">Error</h2>
          <p className="mt-2 text-red-700">{error || 'Course not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <CourseEditor
        course={course}
        onClose={handleClose}
        onUpdate={handleUpdate}
      />
    </div>
  );
}