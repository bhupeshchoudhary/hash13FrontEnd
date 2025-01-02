

// // src/components/admin/CourseList.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { BookOpen, Pencil, Trash2 } from 'lucide-react';
// import { EditCourseModal } from './EditCourseModal';
// import type { Course } from '../../../types/courses';

// export function CourseList() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [editingCourse, setEditingCourse] = useState<Course | null>(null);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
      
//       const response = await fetch('/api/admin/courses');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
      
//       if (Array.isArray(data)) {
//         setCourses(data);
//       } else if (data.error) {
//         throw new Error(data.error);
//       } else {
//         throw new Error('Invalid data format received');
//       }
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       setError(error instanceof Error ? error.message : 'Failed to fetch courses');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEdit = (course: Course) => {
//     setEditingCourse(course);
//   };

//   const handleUpdate = (updatedCourse: Course) => {
//     setCourses(courses.map(course => 
//       course._id === updatedCourse._id ? updatedCourse : course
//     ));
//     setEditingCourse(null);
//   };

//   const handleDelete = async (courseId: string) => {
//     if (!window.confirm('Are you sure you want to delete this course?')) {
//       return;
//     }

//     try {
//       const response = await fetch(`/api/admin/courses/${courseId}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete course');
//       }

//       setCourses(courses.filter(course => course._id !== courseId));
//     } catch (error) {
//       console.error('Error deleting course:', error);
//       alert('Failed to delete course');
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
//       <div className="bg-red-50 border border-red-200 rounded-md p-4">
//         <div className="flex">
//           <div className="flex-shrink-0">
//             <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <div className="ml-3">
//             <h3 className="text-sm font-medium text-red-800">Error loading courses</h3>
//             <p className="mt-1 text-sm text-red-700">{error}</p>
//             <button
//               onClick={fetchCourses}
//               className="mt-2 text-sm font-medium text-red-600 hover:text-red-500"
//             >
//               Try again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!courses.length) {
//     return (
//       <div className="text-center py-12 bg-white rounded-lg shadow">
//         <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
//         <h3 className="mt-2 text-sm font-medium text-gray-900">No courses</h3>
//         <p className="mt-1 text-sm text-gray-500">Get started by creating a new course.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="bg-white shadow rounded-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Title
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Category
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Duration
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Students
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {courses.map((course) => (
//                 <tr key={course._id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 h-10 w-10">
//                         {course.backgroundImage ? (
//                           <img
//                             className="h-10 w-10 rounded-lg object-cover"
//                             src={course.backgroundImage}
//                             alt={course.title}
//                           />
//                         ) : (
//                           <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
//                             <BookOpen className="h-5 w-5 text-gray-500" />
//                           </div>
//                         )}
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">{course.title}</div>
//                         <div className="text-sm text-gray-500">{course.slug}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{course.category}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">${course.price}</div>
//                     {course.originalPrice > course.price && (
//                       <div className="text-sm text-gray-500 line-through">
//                         ${course.originalPrice}
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{course.duration}</div>
//                     <div className="text-sm text-gray-500">{course.hours} hours</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{course.enrolledStudents}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       course.status === 'published' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {course.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button
//                       onClick={() => handleEdit(course)}
//                       className="text-indigo-600 hover:text-indigo-900 inline-flex items-center mr-4"
//                     >
//                       <Pencil className="h-4 w-4 mr-1" />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(course._id)}
//                       className="text-red-600 hover:text-red-900 inline-flex items-center"
//                     >
//                       <Trash2 className="h-4 w-4 mr-1" />
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {editingCourse && (
//         <EditCourseModal
//           course={editingCourse}
//           isOpen={!!editingCourse}
//           onClose={() => setEditingCourse(null)}
//           onUpdate={handleUpdate}
//         />
//       )}
//     </div>
//   );
// }


// src/components/admin/CourseList.tsx
'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Pencil, Trash2 } from 'lucide-react';
import { CourseEditor } from './CourseEditor';
import type { Course } from '../../../types/courses';

export function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/admin/courses/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setCourses(data);
      } else if (data.error) {
        throw new Error(data.error);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch courses');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setShowEditor(true);
  };

  const handleUpdate = (updatedCourse: Course) => {
    setCourses(courses.map(course => 
      course._id === updatedCourse._id ? updatedCourse : course
    ));
    setShowEditor(false);
    setSelectedCourse(null);
  };

  const handleDelete = async (courseId: string) => {
    if (!window.confirm('Are you sure you want to delete this course?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/courses/${courseId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete course');
      }

      setCourses(courses.filter(course => course._id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Failed to delete course');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error loading courses</h3>
            <p className="mt-1 text-sm text-red-700">{error}</p>
            <button
              onClick={fetchCourses}
              className="mt-2 text-sm font-medium text-red-600 hover:text-red-500"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!courses.length) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No courses</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by creating a new course.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {course.backgroundImage ? (
                          <img
                            className="h-10 w-10 rounded-lg object-cover"
                            src={course.backgroundImage}
                            alt={course.title}
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{course.title}</div>
                        <div className="text-sm text-gray-500">{course.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${course.price}</div>
                    {course.originalPrice > course.price && (
                      <div className="text-sm text-gray-500 line-through">
                        ${course.originalPrice}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.duration}</div>
                    <div className="text-sm text-gray-500">{course.hours} hours</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.enrolledStudents}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(course)}
                      className="text-indigo-600 hover:text-indigo-900 inline-flex items-center mr-4"
                    >
                      <Pencil className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="text-red-600 hover:text-red-900 inline-flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showEditor && selectedCourse && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => {
                setShowEditor(false);
                setSelectedCourse(null);
              }}
            />
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <CourseEditor 
                course={selectedCourse}
                onClose={() => {
                  setShowEditor(false);
                  setSelectedCourse(null);
                }}
                onUpdate={handleUpdate}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}