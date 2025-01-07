// // src/app/admin/login/page.tsx
// 'use client';

// import { useState, Suspense } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';

// function LoginContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Login failed');
//       }

//       // Redirect to the original destination or dashboard
//       const from = searchParams.get('from') || '/admin/dashboard';
//       router.push(from);
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error instanceof Error ? error.message : 'Login failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Admin Login
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && (
//             <div className="rounded-md bg-red-50 p-4">
//               <div className="text-sm text-red-700">{error}</div>
//             </div>
//           )}
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={credentials.email}
//                 onChange={(e) =>
//                   setCredentials({ ...credentials, email: e.target.value })
//                 }
//                 disabled={isLoading}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={credentials.password}
//                 onChange={(e) =>
//                   setCredentials({ ...credentials, password: e.target.value })
//                 }
//                 disabled={isLoading}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//             >
//               <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                 {isLoading && (
//                   <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
//                 )}
//               </span>
//               {isLoading ? 'Signing in...' : 'Sign in'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// // Loading component
// function LoadingState() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//     </div>
//   );
// }

// // Main component with Suspense
// export default function AdminLogin() {
//   return (
//     <Suspense fallback={<LoadingState />}>
//       <LoginContent />
//     </Suspense>
//   );
// }

// // Add loading.tsx in the same directory
// export function Loading() {
//   return <LoadingState />;
// }
// src/app/admin/login/page.tsx
'use client';

import { Suspense } from 'react';
import { LoginForm } from '../../../components/admin/LoginForm';

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </Suspense>
  );
}