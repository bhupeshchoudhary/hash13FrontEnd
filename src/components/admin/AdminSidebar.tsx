// src/components/admin/AdminSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Settings,
  LogOut 
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin/dashboard',
  },
  {
    title: 'Courses',
    icon: BookOpen,
    href: '/admin/courses',
  },
  {
    title: 'Students',
    icon: Users,
    href: '/admin/students',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/admin/settings',
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    // Add logout logic here
    window.location.href = '/admin/login';
  };

  return (
    <div className="w-64 bg-white h-screen border-r flex flex-col">
      <div className="p-6 border-b">
        <Link href="/admin/dashboard" className="text-xl font-bold">
          Admin Panel
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 w-full"
        >
          <LogOut size={20} />
          <span >Logout</span>
        </button>
      </div>
    </div>
  );
}