'use client';

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

function CourseCard({ name, modules, courseId }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 mb-6 border-b border-gray-200 pb-8">
      <div className="flex justify-between">
        <h2
          onClick={toggleExpand}
          className="text-1xl font-bold text-black z-20 underline cursor-pointer"
        >
          {name}
        </h2>
        <button
          onClick={toggleExpand}
          className="text-gray-500 hover:text-gray-700 transition"
        >
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>

      {/* Conditionally Render Learning Modules */}
      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-600 font-semibold mb-2">Learning Modules:</p>
          {Array.isArray(modules) && modules.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {modules.map((module) => (
                <li key={module.id} className="cursor-pointer hover:underline">
                  <Link href={`/module/${courseId}/${module.id}`} passHref>
                    {module.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No modules available for this course.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CourseCard;





