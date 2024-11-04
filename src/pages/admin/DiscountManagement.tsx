import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function DiscountManagement() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Discounts</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage all discounts and promotions
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-500"
          >
            <PlusIcon className="h-5 w-5 inline-block mr-2" />
            Add Discount
          </button>
        </div>
      </div>
      
      {/* Discount management content */}
      <div className="mt-8">
        {/* Add your discount management implementation here */}
      </div>
    </div>
  );
}