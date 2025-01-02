
"use client"

// components/admin/RecentCourses.tsx
import { useEffect, useState } from 'react'
import { Course } from '../../../types/courses'
import Link from 'next/link'

export function RecentCourses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchRecentCourses()
  }, [])

  const fetchRecentCourses = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/admin/courses/recent')
      const data = await response.json()
      setCourses(data)
    } catch (error) {
      console.error('Failed to fetch recent courses:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Courses</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="flex items-center justify-between border-b pb-4 last:border-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={course.backgroundImage}
                  alt={course.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">{course.title}</h3>
                  <p className="text-sm text-gray-500">
                    {course.enrolledStudents} students enrolled
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">${course.price}</span>
                <Link
                  href={`/admin/courses/${course._id}/edit`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t p-4">
        <Link
          href="/admin/courses"
          className="text-blue-500 hover:text-blue-600 text-sm"
        >
          View all courses →
        </Link>
      </div>
    </div>
  )
}