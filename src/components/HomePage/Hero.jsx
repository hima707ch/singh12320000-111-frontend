import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-73.2C55.9,-67.3,67.7,-56.7,75.6,-43.5C83.5,-30.2,87.6,-15.1,86.6,-0.6C85.5,14,79.3,27.9,71.2,41C63.1,54.1,53.1,66.3,40.1,73.3C27.1,80.3,11.1,82,-4.5,79.1C-20.1,76.2,-35.3,68.7,-47.6,58.7C-59.9,48.7,-69.3,36.2,-74.8,21.8C-80.3,7.4,-81.8,-8.8,-77.6,-23.5C-73.4,-38.2,-63.4,-51.3,-50.6,-57.5C-37.8,-63.7,-22.1,-63,-6.6,-61.5C8.9,-60.1,29.5,-79.1,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Find Your Perfect</span>
              <div className="animate-slide-up inline-block ml-3 text-white">Home</div>
            </h1>
            <p id="Hero_3" className="text-xl text-blue-100 opacity-90">
              Discover exceptional properties tailored to your lifestyle. Your dream home is just a click away.
            </p>
            <div id="Hero_4" className="flex space-x-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <img
              id="Hero_5"
              src={images[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'}
              alt="Luxury Home"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;