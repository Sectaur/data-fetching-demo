'use client';

import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        We apologize for the inconvenience. An error occurred while loading the users.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}