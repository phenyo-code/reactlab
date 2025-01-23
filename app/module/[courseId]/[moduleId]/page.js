'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import { courses } from '@/app/data/course'; // Assuming you have course data
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

function ModuleDetailPage() {
  const { courseId, moduleId } = useParams(); // Get courseId and moduleId using useParams

  const [course, setCourse] = useState(null);
  const [module, setModule] = useState(null);

  useEffect(() => {
    if (courseId && moduleId) {
      // Find the course by courseId
      const selectedCourse = courses.find((course) => course.id === parseInt(courseId));

      if (selectedCourse) {
        setCourse(selectedCourse);
        // Find the specific module by moduleId
        const selectedModule = selectedCourse.modules.find((module) => module.id === parseInt(moduleId));
        setModule(selectedModule);
      }
    }
  }, [courseId, moduleId]);

  if (!course || !module) {
    return <div>Loading or Course/Module Not Found...</div>;
  }

  return (
    <div mb-6>
      <Header />
      <div className="w-full max-w-4xl mx-auto bg-white p-6 mb-6 border-b border-gray-200 mt-6 pb-8">
        <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>

        <div className="space-y-4">
          {/* Render the details of the module */}
          <h3 className="text-xl font-semibold">{module.title}</h3> {/* Render module title */}
          <p>{module.content}</p> {/* Render module content */}

          {/* Render subtopics if available */}
          {module.subtopics && module.subtopics.length > 0 && (
            <ul className="list-disc pl-6">
              {module.subtopics.map((subtopic, index) => (
                <li key={index}>{subtopic}</li> // Render each subtopic
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ModuleDetailPage;


