// app/page.tsx
import React from 'react';
import Link from 'next/link';

const MainPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Welcome!</h2>
        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-700">Already have an account?</div>
          <Link href="/login">
            <button
              type="button"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Login
            </button>
          </Link>
          <div className="text-sm font-medium text-gray-700">Create an account</div>
          <Link href="/signup">
            <button
              type="button"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Create
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
