// components/admin/ProjectSection.tsx
import { UseFormReturn, useFieldArray } from 'react-hook-form'
import { Course, Project } from '../../../types/courses'

interface ProjectSectionProps {
  form: UseFormReturn<Course>
}

export function ProjectSection({ form }: ProjectSectionProps) {
  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'project',
  })

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Projects</h2>
        <button
          type="button"
          onClick={() =>
            append({
              icon: '',
              title: '',
              description: '',
              skills: [],
            })
          }
          className="btn btn-secondary"
        >
          Add Project
        </button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded-lg">
          <input
            {...form.register(`project.${index}.title`)}
            placeholder="Project Title"
            className="input w-full mb-2"
          />
          <input
            {...form.register(`project.${index}.icon`)}
            placeholder="Project Icon URL"
            className="input w-full mb-2"
          />
          <textarea
            {...form.register(`project.${index}.description`)}
            placeholder="Project Description"
            className="textarea w-full mb-2"
          />
          {/* Add skills array handling here */}
        </div>
      ))}
    </div>
  )
}