'use client';

import { useState } from 'react';
import { FiX } from 'react-icons/fi';

function TutorialAlert() {
  const [isVisible, setIsVisible] = useState(true);

  const closeAlert = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Do not render anything if the alert is not visible
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white-500 bg-opacity-60">
      <div className="relative bg-blue-500 rounded-lg p-6 max-w-sm shadow-md text-center">
        {/* Close Icon */}
        <button
          onClick={closeAlert}
          className="absolute top-2 right-2 text-white hover:text-white"
        >
          <FiX className="text-xl" />
        </button>

        {/* Alert Content */}
        <h2 className="text-lg font-bold text-white">
          This tutorial is still in progress
        </h2>
        <p className="mt-2 text-white">
          We're still working on this tutorial. It will be available <span className="font-semibold">Soon</span>.
        </p>
      </div>
    </div>
  );
}

export default TutorialAlert;
