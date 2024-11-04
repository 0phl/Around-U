import React from 'react';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const events = [
  {
    id: 1,
    title: "Student Night at Cafe Latte",
    date: "2023-11-25T18:00:00",
    location: "Cafe Latte",
    description: "Enjoy 20% off all drinks from 6PM - 9PM. Student ID required.",
    attendees: 45,
    category: "Promotion"
  },
  {
    id: 2,
    title: "Book Fair at PageTurner's",
    date: "2023-11-26T10:00:00",
    location: "PageTurner's Bookstore",
    description: "Buy 2 books, get 1 free! Plus, meet local authors and enjoy live readings.",
    attendees: 120,
    category: "Event"
  },
  // Add more events as needed
];

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-6">Upcoming Events</h1>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <UserGroupIcon className="h-4 w-4 mr-2" />
                    {event.attendees} attending
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  {event.description}
                </p>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                    Interested
                  </button>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                {event.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}