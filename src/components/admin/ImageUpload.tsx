// components/admin/ImageUpload.tsx
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Course } from '../../../types/courses'

interface ImageUploadProps {
  form: UseFormReturn<Course>
  fieldName: keyof Course
  label: string
}

export function ImageUpload({ form, fieldName, label }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return

    setUploading(true)
    try {
      const file = e.target.files[0]
      // Implement your image upload logic here
      // Example: Upload to your storage service (S3, Cloudinary, etc.)
      const imageUrl = await uploadImage(file)
      form.setValue(fieldName, imageUrl)
    } catch (error) {
      console.error('Error uploading image:', error)
    } finally {
      setUploading(false)
    }
  }

  // Implement this function based on your storage service
  const uploadImage = async (file: File): Promise<string> => {
    // Add your image upload implementation here
    return 'temporary-url'
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
      />
      {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
    </div>
  )
}