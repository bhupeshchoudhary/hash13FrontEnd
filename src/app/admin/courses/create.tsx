// pages/admin/courses/create.tsx

import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

// Import CourseForm with SSR disabled
const CourseForm = dynamic(() => import('@/components/admin/CourseForm'), {
  ssr: false,
});

const CreateCoursePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
        <CourseForm />
      </div>
    </div>
  );
};

export default CreateCoursePage;