// src/components/admin/EditCourseModal.tsx

import { useState } from 'react';
import { X } from 'lucide-react';
import type { Course } from '../../../types/courses';

interface EditCourseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedCourse: Course) => void;
}

export function EditCourseModal({ course, isOpen, onClose, onUpdate }: EditCourseModalProps) {
  const [formData, setFormData] = useState<Course>(course);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/courses/${course._id}`, {  // Use _id instead of id
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update course');
      }

      const updatedCourse = await response.json();
      onUpdate(updatedCourse);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  // ... rest of the component


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Edit Course</h3>
              <button onClick={onClose}>
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-md font-medium mb-4">Basic Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({
                        ...formData,
                        title: e.target.value,
                        slug: e.target.value.toLowerCase().replace(/\s+/g, '-')
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({
                        ...formData,
                        price: Number(e.target.value)
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({
                        ...formData,
                        duration: e.target.value
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Hours</label>
                    <input
                      type="text"
                      value={formData.hours}
                      onChange={(e) => setFormData({
                        ...formData,
                        hours: e.target.value
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({
                        ...formData,
                        status: e.target.value as 'draft' | 'published'
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({
                        ...formData,
                        category: e.target.value
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Short Description
                  </label>
                  <textarea
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({
                      ...formData,
                      shortDescription: e.target.value
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    rows={3}
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Long Description
                  </label>
                  <textarea
                    value={formData.longDescription}
                    onChange={(e) => setFormData({
                      ...formData,
                      longDescription: e.target.value
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    rows={6}
                    required
                  />
                </div>
              </div>

              {/* Add more sections for other fields */}

              <div className="mt-5 sm:mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm disabled:opacity-50"
                >
                  {isLoading ? 'Updating...' : 'Update Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}