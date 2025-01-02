



"use client"

// components/admin/CourseForm.tsx

import { useState, useEffect } from 'react';
import type { NewCourse, Module } from '../../../types/courses';

// Then in your CourseForm:
const initialCourseData: NewCourse = {
  title: '',
  slug: '',
  rating: 0,
  totalRatings: 0,
  duration: '',
  hours: '',
  price: 0,
  originalPrice: 0,
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
  module: [],
  highlights: [],
  certificateImage: '',
  project: [],
  programFor: [],
  toolsData: [],
  status: 'draft'
};

const CourseFormContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialCourseData);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create course');
      }

      const data = await response.json();
      window.location.href = '/admin/courses';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error creating course:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleArrayFieldChange = (field: keyof NewCourse, value: string) => {
    setFormData({
      ...formData,
      [field]: value.split(',').map(item => item.trim()),
    });
  };

  const addModule = () => {
    setFormData({
      ...formData,
      module: [
        ...formData.module,
        {
          id: formData.module.length + 1,
          title: '',
          description: '',
          content: [],
        },
      ],
    });
  };

  const updateModule = (index: number, field: keyof Module, value: string) => {
    const updatedModules = [...formData.module];
    updatedModules[index] = {
      ...updatedModules[index],
      [field]: field === 'content' ? value.split(',').map(item => item.trim()) : value,
    };
    setFormData({ ...formData, module: updatedModules });
  };

  return (
    <div className=' '>
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Course Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({
                ...formData,
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
              value={formData.price}
              onChange={(e) => setFormData({
                ...formData,
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
              value={formData.originalPrice}
              onChange={(e) => setFormData({
                ...formData,
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
              value={formData.duration}
              onChange={(e) => setFormData({
                ...formData,
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
              value={formData.hours}
              onChange={(e) => setFormData({
                ...formData,
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
              value={formData.category}
              onChange={(e) => setFormData({
                ...formData,
                category: e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Short Description</label>
          <textarea
            value={formData.shortDescription}
            onChange={(e) => setFormData({
              ...formData,
              shortDescription: e.target.value
            })}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Long Description</label>
          <textarea
            value={formData.longDescription}
            onChange={(e) => setFormData({
              ...formData,
              longDescription: e.target.value
            })}
            className="w-full p-2 border rounded"
            rows={6}
            required
          />
        </div>
      </div>

      {/* Instructor Information */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Instructor Information</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.instructor.name}
              onChange={(e) => setFormData({
                ...formData,
                instructor: {
                  ...formData.instructor,
                  name: e.target.value
                }
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={formData.instructor.title}
              onChange={(e) => setFormData({
                ...formData,
                instructor: {
                  ...formData.instructor,
                  title: e.target.value
                }
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              value={formData.instructor.image}
              onChange={(e) => setFormData({
                ...formData,
                instructor: {
                  ...formData.instructor,
                  image: e.target.value
                }
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            value={formData.instructor.bio}
            onChange={(e) => setFormData({
              ...formData,
              instructor: {
                ...formData.instructor,
                bio: e.target.value
              }
            })}
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>
      </div>

      {/* Course Details */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Course Details</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Learning Outcomes (comma-separated)
            </label>
            <input
              type="text"
              value={formData.learningOutcomes.join(', ')}
              onChange={(e) => handleArrayFieldChange('learningOutcomes', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Features (comma-separated)
            </label>
            <input
              type="text"
              value={formData.features.join(', ')}
              onChange={(e) => handleArrayFieldChange('features', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              value={formData.skills.join(', ')}
              onChange={(e) => handleArrayFieldChange('skills', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Requirements (comma-separated)
            </label>
            <input
              type="text"
              value={formData.requirements.join(', ')}
              onChange={(e) => handleArrayFieldChange('requirements', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Modules</h2>
        
        {formData.module.map((module, index) => (
          <div key={module.id} className="mb-4 p-4 border rounded">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Module Title</label>
                <input
                  type="text"
                  value={module.title}
                  onChange={(e) => updateModule(index, 'title', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  type="text"
                  value={module.description}
                  onChange={(e) => updateModule(index, 'description', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Content (comma-separated)
                </label>
                <input
                  type="text"
                  value={module.content.join(', ')}
                  onChange={(e) => updateModule(index, 'content', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button
          type="button"
          onClick={addModule}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Module
        </button>
      </div>
      

{/* Highlights Section */}
<div className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-4">Highlights</h2>
  
  {formData.highlights.map((highlight, index) => (
    <div key={index} className="mb-4 p-4 border rounded">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Number</label>
          <input
            type="text"
            value={highlight.number}
            onChange={(e) => {
              const updatedHighlights = [...formData.highlights];
              updatedHighlights[index] = {
                ...updatedHighlights[index],
                number: e.target.value
              };
              setFormData({ ...formData, highlights: updatedHighlights });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            value={highlight.description}
            onChange={(e) => {
              const updatedHighlights = [...formData.highlights];
              updatedHighlights[index] = {
                ...updatedHighlights[index],
                description: e.target.value
              };
              setFormData({ ...formData, highlights: updatedHighlights });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  ))}
  
  <button
    type="button"
    onClick={() => setFormData({
      ...formData,
      highlights: [...formData.highlights, { number: '', description: '' }]
    })}
    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Add Highlight
  </button>
</div>

{/* Projects Section */}
<div className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-4">Projects</h2>
  
  {formData.project.map((proj, index) => (
    <div key={index} className="mb-4 p-4 border rounded">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Icon URL</label>
          <input
            type="text"
            value={proj.icon}
            onChange={(e) => {
              const updatedProjects = [...formData.project];
              updatedProjects[index] = {
                ...updatedProjects[index],
                icon: e.target.value
              };
              setFormData({ ...formData, project: updatedProjects });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={proj.title}
            onChange={(e) => {
              const updatedProjects = [...formData.project];
              updatedProjects[index] = {
                ...updatedProjects[index],
                title: e.target.value
              };
              setFormData({ ...formData, project: updatedProjects });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={proj.description}
            onChange={(e) => {
              const updatedProjects = [...formData.project];
              updatedProjects[index] = {
                ...updatedProjects[index],
                description: e.target.value
              };
              setFormData({ ...formData, project: updatedProjects });
            }}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">
            Skills (comma-separated)
          </label>
          <input
            type="text"
            value={proj.skills.join(', ')}
            onChange={(e) => {
              const updatedProjects = [...formData.project];
              updatedProjects[index] = {
                ...updatedProjects[index],
                skills: e.target.value.split(',').map(s => s.trim())
              };
              setFormData({ ...formData, project: updatedProjects });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  ))}
  
  <button
    type="button"
    onClick={() => setFormData({
      ...formData,
      project: [...formData.project, { icon: '', title: '', description: '', skills: [] }]
    })}
    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Add Project
  </button>
</div>

{/* Program For Section */}
<div className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-4">Program For</h2>
  
  {formData.programFor.map((program, index) => (
    <div key={index} className="mb-4 p-4 border rounded">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Image Source</label>
          <input
            type="text"
            value={program.src}
            onChange={(e) => {
              const updatedPrograms = [...formData.programFor];
              updatedPrograms[index] = {
                ...updatedPrograms[index],
                src: e.target.value
              };
              setFormData({ ...formData, programFor: updatedPrograms });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Alt Text</label>
          <input
            type="text"
            value={program.alt}
            onChange={(e) => {
              const updatedPrograms = [...formData.programFor];
              updatedPrograms[index] = {
                ...updatedPrograms[index],
                alt: e.target.value
              };
              setFormData({ ...formData, programFor: updatedPrograms });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Text</label>
          <input
            type="text"
            value={program.text}
            onChange={(e) => {
              const updatedPrograms = [...formData.programFor];
              updatedPrograms[index] = {
                ...updatedPrograms[index],
                text: e.target.value
              };
              setFormData({ ...formData, programFor: updatedPrograms });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  ))}
  
  <button
    type="button"
    onClick={() => setFormData({
      ...formData,
      programFor: [...formData.programFor, { src: '', alt: '', text: '' }]
    })}
    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Add Program
  </button>
</div>

{/* Tools Data Section */}
<div className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-4">Tools</h2>
  
  {formData.toolsData.map((tool, index) => (
    <div key={index} className="mb-4 p-4 border rounded">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Icon</label>
          <input
            type="text"
            value={tool.icon}
            onChange={(e) => {
              const updatedTools = [...formData.toolsData];
              updatedTools[index] = {
                ...updatedTools[index],
                icon: e.target.value
              };
              setFormData({ ...formData, toolsData: updatedTools });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={tool.title}
            onChange={(e) => {
              const updatedTools = [...formData.toolsData];
              updatedTools[index] = {
                ...updatedTools[index],
                title: e.target.value
              };
              setFormData({ ...formData, toolsData: updatedTools });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={tool.description}
            onChange={(e) => {
              const updatedTools = [...formData.toolsData];
              updatedTools[index] = {
                ...updatedTools[index],
                description: e.target.value
              };
              setFormData({ ...formData, toolsData: updatedTools });
            }}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tool Image</label>
          <input
            type="text"
            value={tool.toolsImage}
            onChange={(e) => {
              const updatedTools = [...formData.toolsData];
              updatedTools[index] = {
                ...updatedTools[index],
                toolsImage: e.target.value
              };
              setFormData({ ...formData, toolsData: updatedTools });
            }}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  ))}
  
  <button
    type="button"
    onClick={() => setFormData({
      ...formData,
      toolsData: [...formData.toolsData, { icon: '', title: '', description: '', toolsImage: '' }]
    })}
    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Add Tool
  </button>
</div>

{/* Images Section */}
<div className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-4">Images</h2>
  
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">Background Image URL</label>
      <input
        type="text"
        value={formData.backgroundImage}
        onChange={(e) => setFormData({
          ...formData,
          backgroundImage: e.target.value
        })}
        className="w-full p-2 border rounded"
      />
    </div>
    
    <div>
      <label className="block text-sm font-medium mb-1">Certificate Image URL</label>
      <input
        type="text"
        value={formData.certificateImage}
        onChange={(e) => setFormData({
          ...formData,
          certificateImage: e.target.value
        })}
        className="w-full p-2 border rounded"
      />
    </div>
  </div>
</div>
      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Creating...' : 'Create Course'}
        </button>
      </div>
    </form>
    </div>
  );
};

const CourseForm = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return <CourseFormContent />;
};

export default CourseForm;