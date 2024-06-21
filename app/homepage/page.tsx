// app/homepage/page.tsx
import { FC } from 'react';
import Link from 'next/link';

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Turf Booking</h1>
          <div>
            <Link href="/login">
              <p className="text-indigo-600 hover:text-indigo-800 mx-2">Log Out</p>
            </Link>
            <Link href="/profile">
              <p className="text-indigo-600 hover:text-indigo-800 mx-2">My Game</p>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Turf</h2>
          <p className="text-gray-600">Find and book the best turfs for your games</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {turfData.map((turf) => (
            <div key={turf.id} className="bg-white rounded shadow-md overflow-hidden">
              <img src={turf.image} alt={turf.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{turf.name}</h3>
                <p className="text-gray-600">{turf.location}</p>
                <p className="mt-2 text-indigo-600 font-bold">{turf.price}</p>
                <Link href={`/bookingpage`}>
                {/* Based on the truf id has to be added */}
                {/* <Link href={`/booking/${turf.id}`}> */}
                  <p className="inline-block mt-4 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Book Now
                  </p>
                </Link>
              </div>
            </div>
          ))}
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

// Sample data for illustration purposes
const turfData = [
  {
    id: '1',
    name: 'Turf 1',
    location: 'California',
    price: '100/hour',
    image: 'https://via.placeholder.com/400x300?text=Turf+1',
  },
  {
    id: '2',
    name: 'Turf 2',
    location: 'California',
    price: '100/hour',
    image: 'https://via.placeholder.com/400x300?text=Turf+2',
  },
  {
    id: '3',
    name: 'Turf 3',
    location: 'California',
    price: '100/hour',
    image: 'https://via.placeholder.com/400x300?text=Turf+3',
  },
];

export default HomePage;
