// components/admin/CourseForm.tsx
import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Course } from '../../../types/courses'
import { courseSchema } from '../../lib/validations/course'
import { Input } from '../../components/ui/input'
import { ModuleSection } from './ModuleSection'
import { ProjectSection } from './ProjectSection'
import { ToolSection } from './ToolSection'
import { ImageUpload } from './ImageUpload'

interface CourseFormProps {
  initialData?: Course
  onSubmit: (data: Course) => Promise<void>
}

export function CourseForm({ initialData, onSubmit }: CourseFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const form = useForm<Course>({
    resolver: zodResolver(courseSchema),
    defaultValues: initialData || {
      title: '',
      slug: '',
      price: 0,
      // ... other default values
    }
  })

  const { fields: moduleFields, append: appendModule } = useFieldArray({
    control: form.control,
    name: 'module'
  })

  const handleSubmit = async (data: Course) => {
    try {
      setIsLoading(true)
      await onSubmit(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Information</h2>
        <input
          {...form.register('title')}
          placeholder="Course Title"
          className="input w-full"
        />
        {/* Add other basic fields */}
        
        <ImageUpload 
          form={form} 
          fieldName="backgroundImage" 
          label="Background Image" 
        />
        
        <ImageUpload 
          form={form} 
          fieldName="certificateImage" 
          label="Certificate Image" 
        />
      </div>

      {/* Modules Section */}
      <ModuleSection 
        fields={moduleFields}
        append={appendModule}
        form={form}
      />

      {/* Projects Section */}
      <ProjectSection form={form} />

      {/* Tools Section */}
      <ToolSection form={form} />

      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary"
      >
        {isLoading ? 'Saving...' : 'Save Course'}
      </button>
    </form>
  )
}