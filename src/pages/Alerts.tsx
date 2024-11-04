import React from 'react';
import { BellIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const alerts = [
  {
    id: 1,
    title: "New Student Discount Available",
    message: "Show your student ID at Cafe Latte to get 20% off between 6PM - 9PM",
    type: "promotion",
    timestamp: "2023-11-24T15:30:00"
  },
  {
    id: 2,
    title: "Book Fair This Weekend",
    message: "Don't miss the big book fair at PageTurner's! Special deals and author meetings.",
    type: "event",
    timestamp: "2023-11-24T14:00:00"
  },
  {
    id: 3,
    title: "Campus Maintenance Notice",
    message: "The north parking lot will be closed for maintenance on Monday.",
    type: "notice",
    timestamp: "2023-11-24T09:00:00"
  },
  // Add more alerts as needed
];

export default function Alerts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Alerts & Notifications</h1>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          Mark all as read
        </button>
      </div>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className={`rounded-lg p-3 ${
                alert.type === 'promotion' 
                  ? 'bg-green-100 text-green-600'
                  : alert.type === 'event'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-yellow-100 text-yellow-600'
              }`}>
                {alert.type === 'promotion' ? (
                  <BellIcon className="h-6 w-6" />
                ) : alert.type === 'event' ? (
                  <InformationCircleIcon className="h-6 w-6" />
                ) : (
                  <ExclamationTriangleIcon className="h-6 w-6" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{alert.title}</h2>
                  <span className="text-sm text-gray-500">
                    {new Date(alert.timestamp).toLocaleDateString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{alert.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}