// src/components/admin/Dashboard.tsx
'use client';

import { useState, useEffect } from 'react';
import { DashboardStats } from '../../../types/api';

export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/admin/stats');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch stats');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stats) {
    return <div>No data available</div>;
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Courses"
          value={stats.totalCourses}
          icon="📚"
        />
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon="👥"
        />
        <StatCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon="💰"
        />
      </div>

      {/* Recent Courses */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Recent Courses</h2>
        <div className="space-y-4">
          {stats.recentCourses.map(course => (
            <div key={course.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{course.title}</h3>
                <p className="text-sm text-gray-500">
                  {course.enrolledStudents} students
                </p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                course.status === 'published' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {course.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <div className="text-2xl mr-4">{icon}</div>
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}