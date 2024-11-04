import React from 'react';
import { useParams } from 'react-router-dom';

export default function BusinessDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-semibold text-gray-900">Business Details</h1>
          {/* Business details will be displayed here */}
        </div>
      </div>
    </div>
  );
}