

import { useState } from 'react';
import { X } from 'lucide-react';
import type { Course } from '../../../types/courses';

interface CourseEditorProps {
  course: Course;
  onClose: () => void;
  onUpdate: (course: Course) => void;
}

export function CourseEditor({ course: initialCourse, onClose, onUpdate }: CourseEditorProps) {
  const [courseData, setCourseData] = useState<Course>(initialCourse);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/courses/${courseData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update course');
      }

      const updatedCourse = await response.json();
      onUpdate(updatedCourse);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-h-[90vh] overflow-y-auto">
      <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Edit Course</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={courseData.title}
              onChange={(e) => setCourseData({
                ...courseData,
                title: e.target.value,
                slug: e.target.value.toLowerCase().replace(/\s+/g, '-')
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              value={courseData.price}
              onChange={(e) => setCourseData({
                ...courseData,
                price: Number(e.target.value)
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Original Price</label>
            <input
              type="number"
              value={courseData.originalPrice}
              onChange={(e) => setCourseData({
                ...courseData,
                originalPrice: Number(e.target.value)
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input
              type="text"
              value={courseData.duration}
              onChange={(e) => setCourseData({
                ...courseData,
                duration: e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Hours</label>
            <input
              type="text"
              value={courseData.hours}
              onChange={(e) => setCourseData({
                ...courseData,
                hours: e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              value={courseData.category}
              onChange={(e) => setCourseData({
                ...courseData,
                category: e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={courseData.status}
              onChange={(e) => setCourseData({
                ...courseData,
                status: e.target.value as 'draft' | 'published'
              })}
              className="w-full p-2 border rounded"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Short Description</label>
          <textarea
            value={courseData.shortDescription}
            onChange={(e) => setCourseData({
              ...courseData,
              shortDescription: e.target.value
            })}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Long Description</label>
          <textarea
            value={courseData.longDescription}
            onChange={(e) => setCourseData({
              ...courseData,
              longDescription: e.target.value
            })}
            className="w-full p-2 border rounded"
            rows={6}
            required
          />
        </div>

        <div className="sticky bottom-0 bg-white pt-4 border-t flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}