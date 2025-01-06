"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';  
import { CourseStats } from '@/components/admin/CourseStats';
import { RecentCourses } from '@/components/admin/RecentCourses';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = checkAuth(); // Implement your authentication check logic
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [router]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <CourseStats />
      <RecentCourses />
    </div>
  );
}

function checkAuth() {
  // Replace with your actual authentication logic
  const token = localStorage.getItem('authToken'); // Example token check
  return Boolean(token);
}