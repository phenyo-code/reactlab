'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import Link from 'next/link';

function Header() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-blue-500 font-bold text-3xl">reactlab</div>

      {/* Search Input */}
      <div className="flex items-center flex-1 mx-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
          />
          <button className="absolute top-0 right-0 h-full px-3 bg-blue-500 text-white rounded-r-md">
            <FiSearch />
          </button>
        </div>
      </div>

      {/* Conditional Button and Icons */}
      <div className="flex items-center space-x-4">
        {/* Join for Free (visible only if not authenticated) */}
        {!session && (
            <Link legacyBehavior href="/auth/signin">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Join for Free
          </button>
            </Link>
        )}

        {/* Handbag Icon */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <FiMenu className="text-blue-500 text-xl" />
        </button>
      </div>

      {/* Side Menu (visible when toggled) */}
      {isMenuOpen && session && (
        <div className="absolute top-16 right-6 w-48 bg-white   shadow-md rounded-lg p-4">
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-500">Profile</li>
            <li className="cursor-pointer hover:text-blue-500">
              Accomplishments
            </li>
            <Link legacyBehavior href="/auth/signin">
            <li
              className="cursor-pointer text-red-500 hover:text-red-600"
            >
              Log Out
            </li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;