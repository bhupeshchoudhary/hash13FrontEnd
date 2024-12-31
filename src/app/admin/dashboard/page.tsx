// src/app/admin/dashboard/page.tsx
import { CourseStats } from '@/components/admin/CourseStats';
import { RecentCourses } from '@/components/admin/RecentCourses';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <CourseStats />
      <RecentCourses />
    </div>
  );
}