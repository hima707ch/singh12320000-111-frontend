import React from 'react';

const testimonials = [
  { name: 'Alice Johnson', message: 'Excellent services and wonderful homes!', location: 'New York' },
  { name: 'Michael Smith', message: 'Highly recommend XYZ Hotels for finding the best places to stay!', location: 'Los Angeles' },
  { name: 'Samantha Brown', message: 'Amazing experience from start to finish!', location: 'Chicago' }
];

const Testimonials = () => {
  return (
    <section id="Testimonials_1" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 text-center rounded-lg shadow">
              <p className="italic">"{testimonial.message}"</p>
              <div className="mt-4 text-lg font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;