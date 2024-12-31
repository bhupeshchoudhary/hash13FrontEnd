// components/admin/ToolSection.tsx
import { UseFormReturn, useFieldArray } from 'react-hook-form'
import { Course, ToolData } from '../../../types/courses'  // Changed from ToolSection to ToolData

interface ToolSectionProps {
  form: UseFormReturn<Course>
}

export function ToolSection({ form }: ToolSectionProps) {
  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'toolsData',
  })

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Tools</h2>
        <button
          type="button"
          onClick={() =>
            append({
              icon: '',
              title: '',
              description: '',
              toolsImage: '',
            } as ToolData)  // Added type assertion
          }
          className="btn btn-secondary"
        >
          Add Tool
        </button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded-lg">
          <input
            {...form.register(`toolsData.${index}.title`)}
            placeholder="Tool Title"
            className="input w-full mb-2"
          />
          <input
            {...form.register(`toolsData.${index}.icon`)}
            placeholder="Tool Icon URL"
            className="input w-full mb-2"
          />
          <textarea
            {...form.register(`toolsData.${index}.description`)}
            placeholder="Tool Description"
            className="textarea w-full mb-2"
          />
          <input
            {...form.register(`toolsData.${index}.toolsImage`)}
            placeholder="Tool Image URL"
            className="input w-full"
          />
        </div>
      ))}
    </div>
  )
}