import React from 'react';

const CallToAction = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">
          Ready to Find Your Dream Home?
        </h2>
        <p id="CTA_3" className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied homeowners who found their perfect property through our platform.
        </p>
        <div id="CTA_4" className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition duration-300 shadow-lg">
            Browse Properties
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition duration-300">
            Contact an Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;