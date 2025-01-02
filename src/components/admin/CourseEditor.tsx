// // src/components/admin/CourseEditor.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { X, Plus, Trash2 } from 'lucide-react';
// import type { Course, Module, Highlight, Project, ProgramFor, ToolData } from '../../../types/courses';

// interface CourseEditorProps {
//   courseId: string;
// }

// export function CourseEditor({ courseId }: CourseEditorProps) {
//   const [course, setCourse] = useState<Course | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSaving, setIsSaving] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchCourse();
//   }, [courseId]);

//   const fetchCourse = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`/api/admin/courses/${courseId}`);
//       if (!response.ok) throw new Error('Failed to fetch course');
//       const data = await response.json();
//       setCourse(data);
//     } catch (error) {
//       setError(error instanceof Error ? error.message : 'Failed to fetch course');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!course) return;

//     setIsSaving(true);
//     setError(null);

//     try {
//       const response = await fetch(`/api/admin/courses/${courseId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(course),
//       });

//       if (!response.ok) throw new Error('Failed to update course');

//       // Show success message or redirect
//       alert('Course updated successfully');
//     } catch (error) {
//       setError(error instanceof Error ? error.message : 'Failed to update course');
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm('Are you sure you want to delete this course?')) return;

//     try {
//       const response = await fetch(`/api/admin/courses/${courseId}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) throw new Error('Failed to delete course');

//       // Redirect to courses list
//       window.location.href = '/admin/courses';
//     } catch (error) {
//       setError(error instanceof Error ? error.message : 'Failed to delete course');
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
//         {error}
//       </div>
//     );
//   }

//   if (!course) {
//     return <div>Course not found</div>;
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-8">
//       {/* Basic Information */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Course Title</label>
//             <input
//               type="text"
//               value={course.title}
//               onChange={(e) => setCourse({
//                 ...course,
//                 title: e.target.value,
//                 slug: e.target.value.toLowerCase().replace(/\s+/g, '-')
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Price</label>
//             <input
//               type="number"
//               value={course.price}
//               onChange={(e) => setCourse({
//                 ...course,
//                 price: Number(e.target.value)
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Original Price</label>
//             <input
//               type="number"
//               value={course.originalPrice}
//               onChange={(e) => setCourse({
//                 ...course,
//                 originalPrice: Number(e.target.value)
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Duration</label>
//             <input
//               type="text"
//               value={course.duration}
//               onChange={(e) => setCourse({
//                 ...course,
//                 duration: e.target.value
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Hours</label>
//             <input
//               type="text"
//               value={course.hours}
//               onChange={(e) => setCourse({
//                 ...course,
//                 hours: e.target.value
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Category</label>
//             <input
//               type="text"
//               value={course.category}
//               onChange={(e) => setCourse({
//                 ...course,
//                 category: e.target.value
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Level</label>
//             <input
//               type="text"
//               value={course.level}
//               onChange={(e) => setCourse({
//                 ...course,
//                 level: e.target.value
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Language</label>
//             <input
//               type="text"
//               value={course.language}
//               onChange={(e) => setCourse({
//                 ...course,
//                 language: e.target.value
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Status</label>
//             <select
//               value={course.status}
//               onChange={(e) => setCourse({
//                 ...course,
//                 status: e.target.value as 'draft' | 'published'
//               })}
//               className="w-full p-2 border rounded"
//             >
//               <option value="draft">Draft</option>
//               <option value="published">Published</option>
//             </select>
//           </div>
//         </div>

//         <div className="mt-4">
//           <label className="block text-sm font-medium mb-1">Background Image URL</label>
//           <input
//             type="text"
//             value={course.backgroundImage}
//             onChange={(e) => setCourse({
//               ...course,
//               backgroundImage: e.target.value
//             })}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div className="mt-4">
//           <label className="block text-sm font-medium mb-1">Short Description</label>
//           <textarea
//             value={course.shortDescription}
//             onChange={(e) => setCourse({
//               ...course,
//               shortDescription: e.target.value
//             })}
//             className="w-full p-2 border rounded"
//             rows={3}
//             required
//           />
//         </div>

//         <div className="mt-4">
//           <label className="block text-sm font-medium mb-1">Long Description</label>
//           <textarea
//             value={course.longDescription}
//             onChange={(e) => setCourse({
//               ...course,
//               longDescription: e.target.value
//             })}
//             className="w-full p-2 border rounded"
//             rows={6}
//             required
//           />
//         </div>
//       </div>

//       {/* Instructor Information */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Instructor Information</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <input
//               type="text"
//               value={course.instructor.name}
//               onChange={(e) => setCourse({
//                 ...course,
//                 instructor: {
//                   ...course.instructor,
//                   name: e.target.value
//                 }
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Title</label>
//             <input
//               type="text"
//               value={course.instructor.title}
//               onChange={(e) => setCourse({
//                 ...course,
//                 instructor: {
//                   ...course.instructor,
//                   title: e.target.value
//                 }
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Image URL</label>
//             <input
//               type="text"
//               value={course.instructor.image}
//               onChange={(e) => setCourse({
//                 ...course,
//                 instructor: {
//                   ...course.instructor,
//                   image: e.target.value
//                 }
//               })}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Bio</label>
//             <textarea
//               value={course.instructor.bio}
//               onChange={(e) => setCourse({
//                 ...course,
//                 instructor: {
//                   ...course.instructor,
//                   bio: e.target.value
//                 }
//               })}
//               className="w-full p-2 border rounded"
//               rows={4}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       {/* Course Details */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Course Details</h2>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Learning Outcomes (comma-separated)
//             </label>
//             <input
//               type="text"
//               value={course.learningOutcomes.join(', ')}
//               onChange={(e) => setCourse({
//                 ...course,
//                 learningOutcomes: e.target.value.split(',').map(item => item.trim())
//               })}
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Features (comma-separated)
//             </label>
//             <input
//               type="text"
//               value={course.features.join(', ')}
//               onChange={(e) => setCourse({
//                 ...course,
//                 features: e.target.value.split(',').map(item => item.trim())
//               })}
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Skills (comma-separated)
//             </label>
//             <input
//               type="text"
//               value={course.skills.join(', ')}
//               onChange={(e) => setCourse({
//                 ...course,
//                 skills: e.target.value.split(',').map(item => item.trim())
//               })}
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Requirements (comma-separated)
//             </label>
//             <input
//               type="text"
//               value={course.requirements.join(', ')}
//               onChange={(e) => setCourse({
//                 ...course,
//                 requirements: e.target.value.split(',').map(item => item.trim())
//               })}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Modules */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Modules</h2>
//           <button
//             type="button"
//             onClick={() => setCourse({
//               ...course,
//               module: [
//                 ...course.module,
//                 {
//                   id: course.module.length + 1,
//                   title: '',
//                   description: '',
//                   content: []
//                 }
//               ]
//             })}
//             className="flex items-center text-blue-600 hover:text-blue-700"
//           >
//             <Plus className="w-4 h-4 mr-1" />
//             Add Module
//           </button>
//         </div>

//         {course.module.map((module, index) => (
//           <div key={module.id} className="mb-4 p-4 border rounded">
//             <div className="flex justify-between mb-2">
//               <h3 className="font-medium">Module {index + 1}</h3>
//               <button
//                 type="button"
//                 onClick={() => setCourse({
//                   ...course,
//                   module: course.module.filter((_, i) => i !== index)
//                 })}
//                 className="text-red-600 hover:text-red-700"
//               >
//                 <Trash2 className="w-4 h-4" />
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Title</label>
//                 <input
//                   type="text"
//                   value={module.title}
//                   onChange={(e) => {
//                     const updatedModules = [...course.module];
//                     updatedModules[index] = {
//                       ...module,
//                       title: e.target.value
//                     };
//                     setCourse({ ...course, module: updatedModules });
//                   }}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Description</label>
//                 <input
//                   type="text"
//                   value={module.description}
//                   onChange={(e) => {
//                     const updatedModules = [...course.module];
//                     updatedModules[index] = {
//                       ...module,
//                       description: e.target.value
//                     };
//                     setCourse({ ...course, module: updatedModules });
//                   }}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div className="col-span-2">
//                 <label className="block text-sm font-medium mb-1">
//                   Content (comma-separated)
//                 </label>
//                 <input
//                   type="text"
//                   value={module.content.join(', ')}
//                   onChange={(e) => {
//                     const updatedModules = [...course.module];
//                     updatedModules[index] = {
//                       ...module,
//                       content: e.target.value.split(',').map(item => item.trim())
//                     };
//                     setCourse({ ...course, module: updatedModules });
//                   }}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-between">
//         <button
//           type="button"
//           onClick={handleDelete}
//           className="px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50"
//         >
//           Delete Course
//         </button>

//         <div className="space-x-4">
//           <button
//             type="button"
//             onClick={() => window.location.href = '/admin/courses'}
//             className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={isSaving}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
//           >
//             {isSaving ? 'Saving...' : 'Save Changes'}
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }


// src/components/admin/CourseEditor.tsx

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