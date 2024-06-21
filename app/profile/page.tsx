// app/profile/page.tsx
import { FC } from 'react';
import Link from 'next/link';

const ProfilePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Account</h1>
          <div>
            <Link href="/homepage">
              <p className="text-indigo-600 hover:text-indigo-800 mx-2">Home</p>
            </Link>
            <Link href="/login">
              <p className="text-indigo-600 hover:text-indigo-800 mx-2">Logout</p>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white rounded shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-gray-900">example</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-gray-900">example@gmail.com</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-gray-900">9876543210</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Membership</label>
              <p className="mt-1 text-gray-900">Gold Member</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/editprofile">
              <p className="inline-block py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Edit Profile
              </p>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking History</h2>
          <div className="space-y-4">
            {bookingHistory.map((booking) => (
              <div key={booking.id} className="bg-gray-50 p-4 rounded shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{booking.turfName}</h3>
                  <span className={`px-2 py-1 rounded text-sm ${booking.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {booking.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{booking.date} | {booking.time}</p>
                <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Management</h2>
          <div className="space-y-4">
            <Link href="/fpass">
              <button className="block py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-center">
                Change Password
              </button>
            </Link>
          </div>
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

const bookingHistory = [
  {
    id: '12345',
    turfName: 'Turf 1',
    date: '2024-06-15',
    time: '10:00 AM - 12:00 PM',
    status: 'Completed',
  },
  {
    id: '12346',
    turfName: 'Turf 2',
    date: '2024-06-10',
    time: '02:00 PM - 04:00 PM',
    status: 'Completed',
  },
  {
    id: '12347',
    turfName: 'Turf 3',
    date: '2024-06-05',
    time: '08:00 AM - 10:00 AM',
    status: 'Pending',
  },
];

export default ProfilePage;
