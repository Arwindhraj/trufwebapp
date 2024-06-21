// app/components/Nav.tsx
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
};

export default Nav;
