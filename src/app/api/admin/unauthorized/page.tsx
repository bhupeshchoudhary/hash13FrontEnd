// src/app/admin/unauthorized/page.tsx

export default function UnauthorizedPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">
            You don't have permission to access this page.
          </p>
          <a
            href="/admin/dashboard"
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Dashboard
          </a>
        </div>
      </div>
    );
  }