// components/Subscribe.tsx
import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <div className="bg-[#5ec5b6] w-full py-8 flex justify-center">
      <div className="max-w-5xl w-full flex items-center justify-between px-4">
        {/* Left Section: Icon and Text */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          <div>
            <h2 className="text-white text-2xl font-bold">Subscribe to</h2>
            <p className="text-white text-2xl font-bold">My Newsletter</p>
          </div>
        </div>

        {/* Right Section: Input and Button */}
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your mail address"
              className="pl-10 pr-4 py-3 w-72 border-0 focus:outline-none rounded-l-full text-gray-700"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m4-4v8m8 4H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          {/* Subscribe Button */}
          <button className="bg-[#f5f5f5] text-black font-semibold px-8 py-3 rounded-r-full hover:bg-gray-200">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
