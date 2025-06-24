import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../assets/images';

const RoomCards = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      id="RoomCards_1"
    >
      <img
        src={images[0] || 'https://via.placeholder.com/400x300'}
        alt={room.type}
        className="w-full h-48 object-cover"
        id="RoomCards_2"
      />
      <div className="p-4" id="RoomCards_3">
        <h3 className="text-xl font-semibold mb-2" id="RoomCards_4">{room.type}</h3>
        <div className="flex justify-between items-center mb-3" id="RoomCards_5">
          <span className="text-gray-600" id="RoomCards_6">{room.location}</span>
          <span className="text-blue-600 font-bold" id="RoomCards_7">
            ${room.price}/night
          </span>
        </div>
        <button
          onClick={() => navigate(`/room/${room.id}`)}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          id="RoomCards_8"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RoomCards;