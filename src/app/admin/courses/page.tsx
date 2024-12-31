// src/app/admin/courses/page.tsx
import { CourseList } from '@/components/admin/CourseList';
import { CreateCourseButton } from '@/components/admin/CreateCourseButton';

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Courses</h1>
        <CreateCourseButton />
      </div>
      <CourseList />
    </div>
  );
}