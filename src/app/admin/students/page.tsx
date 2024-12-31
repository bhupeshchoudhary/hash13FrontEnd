// src/app/admin/students/page.tsx
import { StudentList } from '../../../components/admin/StudentList';

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Students</h1>
      </div>
      <StudentList />
    </div>
  );
}