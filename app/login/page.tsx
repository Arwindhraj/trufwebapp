"use client";
import React from 'react';
import Link from 'next/link';
import GoogleSignInButton from '../components/GoogleSignInButton';
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="9876543210"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none">
              Log in
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none">
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link href="/fpass" className="text-sm text-blue-600 underline hover:text-blue-700">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p>Or continue with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-gray-100 p-2 rounded-md shadow">
              <img src="a.ico " alt="Google" className="w-6 h-6"/>
            </button>
            <GoogleSignInButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
