import React from 'react';

const PriceSection = ({ price = 199 }) => {
  return (
    <div id="PriceSection_1" className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 id="PriceSection_2" className="text-2xl font-semibold mb-4">Pricing</h2>
      <div id="PriceSection_3" className="flex items-baseline mb-4">
        <span id="PriceSection_4" className="text-4xl font-bold">${price}</span>
        <span id="PriceSection_5" className="text-gray-500 ml-2">/night</span>
      </div>
      <div id="PriceSection_6" className="space-y-2">
        <div id="PriceSection_7" className="flex justify-between">
          <span>Base price</span>
          <span>${price}</span>
        </div>
        <div id="PriceSection_8" className="flex justify-between">
          <span>Taxes & fees</span>
          <span>${Math.round(price * 0.1)}</span>
        </div>
        <div id="PriceSection_9" className="border-t pt-2 mt-2 flex justify-between font-bold">
          <span>Total</span>
          <span>${Math.round(price * 1.1)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;