import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            <img
              id="AboutUs_2"
              src={images[1] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa'}
              alt="About Us"
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
          <div className="space-y-6">
            <h2 id="AboutUs_3" className="text-4xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
            <p id="AboutUs_4" className="text-lg text-gray-600">
              With over a decade of experience in real estate, we've helped thousands of families find their perfect home. Our commitment to excellence and customer satisfaction sets us apart.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 id="AboutUs_5" className="text-xl font-semibold text-gray-900">10+ Years</h3>
                <p className="text-gray-600">Of Experience</p>
              </div>
              <div className="space-y-2">
                <h3 id="AboutUs_6" className="text-xl font-semibold text-gray-900">5000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <h3 id="AboutUs_7" className="text-xl font-semibold text-gray-900">1000+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
              <div className="space-y-2">
                <h3 id="AboutUs_8" className="text-xl font-semibold text-gray-900">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;