'use client';  // This makes it clear that this component runs on the client.

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { courses } from './data/course';
import CourseCard from './components/courseCard';

export default function Home() {

  const handleLogout = async () => {
    try {
      await signOut();  // Sign out the user
    } catch (error) {
      console.error("Error signing out:", error);  // Handle any errors
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to ReactLab!</h1>
        <p className="text-gray-600 mb-6">Start learning React, Next.js, and more here.</p>

        {/* Render the course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard 
              key={course.id}
              title={course.title}
              modules={course.modules}
            />
          ))}
        </div>

        <Link legacyBehavior href="/auth/signin">
          <button 
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
}
