import React from "react";
import { Link } from "react-router";

const ErrorNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50 text-gray-800">
      <h1 className="text-7xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! Page not found
      </h2>
      <p className="text-base md:text-lg mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-black hover:bg-gray-900 rounded-lg transition duration-300 text-sm md:text-base">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorNotFound;
