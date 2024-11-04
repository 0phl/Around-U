import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const center = { lat: 14.3292, lng: 120.9378 }; // St. Dominic College of Asia coordinates

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-4 bg-white shadow-sm">
        <h1 className="text-xl font-semibold">Nearby Places</h1>
      </div>
      <div className="flex-1">
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerClassName="w-full h-full min-h-[calc(100vh-120px)]"
        >
          <MarkerF position={center} title="St. Dominic College of Asia" />
          <MarkerF 
            position={{ lat: 14.3280, lng: 120.9390 }} 
            title="Cafe Latte"
          />
          <MarkerF 
            position={{ lat: 14.3300, lng: 120.9370 }} 
            title="PageTurner's"
          />
        </GoogleMap>
      </div>
    </div>
  );
}