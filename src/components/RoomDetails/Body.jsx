import React from 'react';
import Gallery from './Gallery';
import Amenities from './Amenities';
import PriceSection from './PriceSection';
import BookingSection from './BookingSection';
import useRoomDetails from './useRoomDetails';

const Body = () => {
  const { room, loading, error } = useRoomDetails();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div></div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;
  if (!room) return null;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-4xl font-bold mb-6">{room.name}</h1>
      <Gallery images={room.images} />
      <div id="Body_5" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div id="Body_6" className="md:col-span-2">
          <div id="Body_7" className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 id="Body_8" className="text-2xl font-semibold mb-4">Description</h2>
            <p id="Body_9" className="text-gray-600">{room.description}</p>
          </div>
          <Amenities amenities={room.amenities} />
        </div>
        <div id="Body_10" className="md:col-span-1">
          <div id="Body_11" className="sticky top-4">
            <PriceSection price={room.price} />
            <BookingSection roomId={room.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;