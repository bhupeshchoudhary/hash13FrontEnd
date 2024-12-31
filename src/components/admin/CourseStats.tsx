"use client"


// components/admin/CourseStats.tsx
import { useEffect, useState } from 'react'

interface Stats {
  totalCourses: number
  totalStudents: number
  totalRevenue: number
  activeUsers: number
}

export function CourseStats() {
  const [stats, setStats] = useState<Stats>({
    totalCourses: 0,
    totalStudents: 0,
    totalRevenue: 0,
    activeUsers: 0,
  })

  useEffect(() => {
    // Fetch stats from your API
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Total Courses"
        value={stats.totalCourses}
        icon="📚"
        trend="+5%"
      />
      <StatCard
        title="Total Students"
        value={stats.totalStudents}
        icon="👥"
        trend="+12%"
      />
      <StatCard
        title="Total Revenue"
        value={`$${stats.totalRevenue.toLocaleString()}`}
        icon="💰"
        trend="+8%"
      />
      <StatCard
        title="Active Users"
        value={stats.activeUsers}
        icon="👤"
        trend="+3%"
      />
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  icon: string
  trend: string
}

function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        <span className="text-green-500 text-sm">{trend}</span>
      </div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}