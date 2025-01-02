// pages/admin/courses/[id]/edit.tsx

import { CourseEditor } from '@/components/admin/CourseEditor';
import { useRouter } from 'next/router';

export default function EditCoursePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return <div>Invalid course ID</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
        <CourseEditor courseId={id} />
      </div>
    </div>
  );
}