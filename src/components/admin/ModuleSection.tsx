// components/admin/ModuleSection.tsx
import { UseFormReturn, useFieldArray } from 'react-hook-form'
import { Course, Module } from '../../../types/courses'

interface ModuleSectionProps {
  form: UseFormReturn<Course>
  fields: any[]
  append: (value: Module) => void
}

export function ModuleSection({ form, fields, append }: ModuleSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Modules</h2>
        <button
          type="button"
          onClick={() =>
            append({
              id: fields.length + 1,
              title: '',
              description: '',
              content: [],
            })
          }
          className="btn btn-secondary"
        >
          Add Module
        </button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded-lg">
          <input
            {...form.register(`module.${index}.title`)}
            placeholder="Module Title"
            className="input w-full mb-2"
          />
          <textarea
            {...form.register(`module.${index}.description`)}
            placeholder="Module Description"
            className="textarea w-full mb-2"
          />
          {/* Add content array handling here */}
        </div>
      ))}
    </div>
  )
}