"use client"

// components/admin/CreateCourseButton.tsx
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlusCircle, X } from 'lucide-react'
import CourseForm from './CourseForm'

export function CreateCourseButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [courseTitle, setCourseTitle] = useState('')
  const router = useRouter()

  const handleCreateCourse = async () => {
    if (!courseTitle.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: courseTitle,
          slug: courseTitle.toLowerCase().replace(/\s+/g, '-'),
          price: 0,
          originalPrice: 0,
          rating: 0,
          totalRatings: 0,
          enrolledStudents: 0,
          shortDescription: '',
          longDescription: '',
          backgroundImage: '',
          instructor: {
            name: '',
            title: '',
            image: '',
            bio: '',
            rating: 0,
            totalStudents: 0,
            courses: 0,
          },
          learningOutcomes: [],
          features: [],
          skills: [],
          requirements: [],
          level: 'Beginner',
          language: 'English',
          lastUpdated: new Date().toISOString(),
          category: '',
          highlights: [],
          module: [],
          certificateImage: '',
          project: [],
          programFor: [],
          toolsData: [],
        }),
      })

      const data = await response.json()
      if (data.id) {
        router.push(`/admin/courses/${data.id}/edit`)
      }
    } catch (error) {
      console.error('Failed to create course:', error)
      // Add error handling/notification here
    } finally {
      setIsLoading(false)
      setShowModal(false)
    }
  }


  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Create Course
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-lg p-6 w-full max-w-[90%] max-h-[90vh] overflow-y-auto mx-4 my-8">
            <div className="sticky top-0 bg-white pb-4 mb-4 border-b">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-semibold">Create New Course</h2>
            </div>

            <div className="space-y-4 ">
              <CourseForm />

            </div>
          </div>
        </div>
      )}
    </>
  )
}