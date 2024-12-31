// app/admin/page.tsx
import { CourseStats } from '@/components/admin/CourseStats'
import { RecentCourses } from '@/components/admin/RecentCourses'

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
      <CourseStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentCourses />
        {/* Add more dashboard widgets here */}
      </div>
    </div>
  )
}