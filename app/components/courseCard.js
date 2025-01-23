"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function CourseCard({ name, modules }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={toggleExpand} className="w-full max-w-4xl mx-auto cursor-pointer bg-white p-6 mb-6 hover:shadow-xl   transition border-b border-gray-200 pb-8">
      <div className="flex justify-between">
        <h2  onClick={toggleExpand} className="text-1xl font-bold text-black z-20 underline">{name}</h2>
        <button onClick={toggleExpand} className="text-gray-500 hover:text-gray-700 transition">
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-600 font-semibold mb-2">What You Will Learn:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CourseCard;

