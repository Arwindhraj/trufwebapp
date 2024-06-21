// app/editprofile/page.tsx
import { FC } from 'react';
import Link from 'next/link';

const EditProfilePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Turf Booking</h1>
          <div>
            <Link href="/profile">
              <p className="text-indigo-600 hover:text-indigo-800 mx-2">Back to Profile</p>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-9">
        <section className="bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="example" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="example@gmail.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="9876543210" />
            </div>
            <div>
              <label htmlFor="membership" className="block text-sm font-medium text-gray-700">Membership</label>
              <select id="membership" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="gold">Gold Member</option>
                <option value="silver">Silver Member</option>
                <option value="bronze">Bronze Member</option>
              </select>
            </div>
            <div>
              <button type="submit" className="inline-block py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-white shadow-md p-4 mt-8">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2024 Turf Booking. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default EditProfilePage;
