import React from 'react';

function CourseCard({ name, modules }) {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-gray-600">What You Will Learn:</p>
      <ul className="list-disc list-inside mt-2">
        {modules.map((module, index) => (
          <li key={index} className="mb-1">{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseCard;
