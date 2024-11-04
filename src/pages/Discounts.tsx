import React from 'react';

export default function Discounts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Student Discounts</h1>
          <p className="mt-2 text-sm text-gray-700">
            Exclusive discounts for St. Dominic College of Asia students
          </p>
        </div>
      </div>
      
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Discount cards will be mapped here */}
      </div>
    </div>
  );
}