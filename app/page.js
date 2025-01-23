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


      <div className=" text-center ">
        <h2 className="text-2xl font-bold text-center mb-8 mt-8">React.js Mastery Learning Platform.</h2>
        <h3 className="text-1xl font-bold mb-8 mt-8 underline">8 Courses</h3>
      </div>

      <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg ">
        <h1 className="text-1xl mb-4 font-bold text-center underline">React.js Mastery: The Complete Guide</h1>
        <p className="text-gray-600 mb-6 font-bold text-center">A Complete Guide To Building Modern Web Applications</p>

        <div className="space-y-4">
          {courses.map((course) => (
            <CourseCard key={course.id} name={course.name} modules={course.modules} />
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
