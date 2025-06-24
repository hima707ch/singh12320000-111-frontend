import React from 'react';

const RoomFilters = ({ filters, onFilterChange }) => {
  const roomTypes = ['All', 'Single', 'Double', 'Suite', 'Apartment'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" id="RoomFilters_1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2" id="RoomFilters_2">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter location"
            id="RoomFilters_3"
          />
        </div>

        <div className="space-y-2" id="RoomFilters_4">
          <label className="block text-sm font-medium text-gray-700">Room Type</label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            id="RoomFilters_5"
          >
            {roomTypes.map(type => (
              <option key={type} value={type === 'All' ? '' : type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2" id="RoomFilters_6">
          <label className="block text-sm font-medium text-gray-700">Min Price</label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => onFilterChange('minPrice', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Min price"
            min="0"
            id="RoomFilters_7"
          />
        </div>

        <div className="space-y-2" id="RoomFilters_8">
          <label className="block text-sm font-medium text-gray-700">Max Price</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Max price"
            min="0"
            id="RoomFilters_9"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomFilters;