import React, { useState } from 'react';
import images from '../assets/images';

const Gallery = ({ images: roomImages = images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % roomImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  return (
    <div id="Gallery_1" className="relative w-full h-[500px] overflow-hidden rounded-lg">
      <img
        id="Gallery_2"
        src={roomImages[currentIndex]}
        alt={`Room view ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        id="Gallery_3"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ←
      </button>
      <button
        id="Gallery_4"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        →
      </button>
      <div id="Gallery_5" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {roomImages.map((_, index) => (
          <div
            key={index}
            id={`Gallery_dot_${index}`}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;