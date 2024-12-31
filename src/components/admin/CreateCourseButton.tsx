"use client"

// components/admin/CreateCourseButton.tsx
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlusCircle, X } from 'lucide-react'

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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-4">Create New Course</h2>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="courseTitle"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Course Title
                </label>
                <input
                  type="text"
                  id="courseTitle"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter course title"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateCourse}
                  disabled={isLoading || !courseTitle.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creating...' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}