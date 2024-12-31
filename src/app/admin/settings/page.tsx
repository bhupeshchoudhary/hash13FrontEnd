// src/app/admin/settings/page.tsx
'use client';

import { useState } from 'react';
import { Settings, User, Lock, Mail, Bell } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="grid grid-cols-12 divide-x divide-gray-200">
          {/* Sidebar */}
          <div className="col-span-3 p-6">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === 'profile'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="mr-3 h-5 w-5" />
                Profile Settings
              </button>

              <button
                onClick={() => setActiveTab('security')}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === 'security'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Lock className="mr-3 h-5 w-5" />
                Security
              </button>

              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === 'notifications'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Bell className="mr-3 h-5 w-5" />
                Notifications
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="col-span-9 p-6">
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'security' && <SecuritySettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your profile update logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Update your profile information and email settings.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}

function SecuritySettings() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your password update logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Security Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Update your password and security preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            name="current-password"
            id="current-password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            name="new-password"
            id="new-password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </form>
    </div>
  );
}

function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your notification settings update logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Notification Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your notification preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              id="email-notifications"
              name="email-notifications"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="email-notifications" className="ml-3 block text-sm font-medium text-gray-700">
              Email Notifications
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="browser-notifications"
              name="browser-notifications"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="browser-notifications" className="ml-3 block text-sm font-medium text-gray-700">
              Browser Notifications
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Preferences'}
          </button>
        </div>
      </form>
    </div>
  );
}