import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Business } from '../types';

export default function Businesses() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Local Businesses</h1>
          <p className="mt-2 text-sm text-gray-700">
            Discover businesses around St. Dominic College of Asia
          </p>
        </div>
      </div>
      
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Business cards will be mapped here */}
      </div>
    </div>
  );
}