// components/admin/CourseCard.tsx
import { Course } from '../../../types/courses'
import Link from 'next/link'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img
        src={course.backgroundImage}
        alt={course.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.shortDescription}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold">${course.price}</span>
        <Link
          href={`/admin/courses/${course.id}/edit`}
          className="btn btn-primary"
        >
          Edit
        </Link>
      </div>
    </div>
  )
}