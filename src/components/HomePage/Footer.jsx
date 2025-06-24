import React from 'react';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 id="Footer_2" className="text-xl font-bold text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 id="Footer_3" className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Buy Property</a></li>
              <li><a href="#" className="hover:text-white transition">Sell Property</a></li>
              <li><a href="#" className="hover:text-white transition">Property Management</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 id="Footer_4" className="text-xl font-bold text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 id="Footer_5" className="text-xl font-bold text-white">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p id="Footer_6">&copy; 2024 Real Estate Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;