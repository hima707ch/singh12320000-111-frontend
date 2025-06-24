import React from 'react';

const Amenities = ({ amenities = [] }) => {
  const defaultAmenities = [
    'Free Wi-Fi',
    'Air Conditioning',
    'Mini Bar',
    'Flat-screen TV',
    'En-suite Bathroom',
    'Room Service',
    'Coffee Maker',
    'Safe'
  ];

  const displayAmenities = amenities.length ? amenities : defaultAmenities;

  return (
    <div id="Amenities_1" className="bg-white rounded-lg shadow-lg p-6">
      <h2 id="Amenities_2" className="text-2xl font-semibold mb-4">Room Amenities</h2>
      <div id="Amenities_3" className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayAmenities.map((amenity, index) => (
          <div
            key={index}
            id={`Amenities_item_${index}`}
            className="flex items-center space-x-2"
          >
            <svg className="w-5 h-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;