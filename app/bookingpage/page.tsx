import { FC } from 'react';
import Link from 'next/link';

const BookingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Turf Booking</h1>
          <div>
            <Link href="/homepage">
              <p className="text-indigo-600 hover:text-indigo-800 mx-2">Home</p>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book a Turf</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" id="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time Slot</label>
              <select id="time" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
              </select>
            </div>
            <div>
              <label htmlFor="players" className="block text-sm font-medium text-gray-700">Number of Players</label>
              <input type="number" id="players" min="1" max="20" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700">Additional Details (optional)</label>
              <textarea id="additionalDetails" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="inline-block py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Book Now
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

export default BookingPage;
