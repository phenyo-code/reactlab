'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { courses } from './data/course';
import CourseCard from './components/courseCard';
import Header from './components/header';
import Footer from './components/footer';
import TutorialAlert from './components/TutorialAlert';

export default function Home() {
  const { data: session } = useSession();
  const [showAlert, setShowAlert] = useState(false);

  // Show the popup only when a user signs in
  useEffect(() => {
    if (session) {
      setShowAlert(true);
    }
  }, [session]);

  const handleLogout = async () => {
    try {
      await signOut(); // Sign out the user
    } catch (error) {
      console.error('Error signing out:', error); // Handle any errors
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-8">
        {/* Popup Alert */}
        {showAlert && <TutorialAlert onClose={() => setShowAlert(false)} />}

        <div className="text-center">
          <h2 className="text-2xl font-bold text-center mb-8 mt-8">
            React.js Mastery Learning Platform.
          </h2>
          <h3 className="text-1xl font-bold mb-8 mt-8 underline">8 Courses</h3>
        </div>

        <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-1xl mb-4 font-bold text-center underline">
            React.js Mastery: The Complete Guide
          </h1>
          <p className="text-blue-400 mb-6 font-bold text-center">
            A Complete Guide To Building Modern Web Applications
          </p>

          <div className="space-y-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                name={course.name}
                modules={course.modules}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
