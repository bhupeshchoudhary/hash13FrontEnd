// src/app/admin/courses/page.tsx
// import CourseForm from '@/components/admin/CourseForm';
import { CourseList } from '@/components/admin/CourseList';
// import CreateCoursePage from './create';
import { CreateCourseButton } from '@/components/admin/CreateCourseButton';

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Courses</h1>
        <CreateCourseButton />
        {/* <CreateCoursePage /> */}
      </div>
      <CourseList />
    </div>
  );
}