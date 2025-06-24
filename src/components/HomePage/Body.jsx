import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero />
      <AboutUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;