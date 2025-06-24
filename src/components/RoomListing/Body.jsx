import React from 'react';
import RoomFilters from './RoomFilters';
import RoomCards from './RoomCards';
import useRoomListing from './useRoomListing';

const Body = () => {
  const { 
    rooms, 
    filters, 
    loading, 
    error,
    handleFilterChange 
  } = useRoomListing();

  return (
    <div className="container mx-auto px-4 py-8" id="Body_1">
      <h1 className="text-3xl font-bold mb-8" id="Body_2">Available Rooms</h1>
      
      <RoomFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      {loading && (
        <div className="flex justify-center py-8" id="Body_3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4" id="Body_4">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" id="Body_5">
        {rooms.map(room => (
          <RoomCards key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Body;