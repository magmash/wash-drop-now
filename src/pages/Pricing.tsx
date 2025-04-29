
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const regularItems = [
  { item: 'Regular Laundry (Wash & Fold)', price: '$1.99/lb', note: 'Minimum 10 lbs' },
  { item: 'Express Service (24hr)', price: '$2.99/lb', note: 'Minimum 8 lbs' },
  { item: 'Airbnb Host Package', price: '$1.79/lb', note: 'Minimum 15 lbs' },
  { item: 'Business Traveler Package', price: '$2.49/lb', note: 'Minimum 5 lbs' },
  { item: 'Hang Dry Option', price: '+$0.50/lb', note: 'For delicate items' },
  { item: 'Eco-Friendly Detergent', price: 'Free', note: '' },
];

const specialItems = [
  { item: 'Comforters (Queen/King)', price: '$24.99 - $29.99', note: 'Per item' },
  { item: 'Blankets', price: '$14.99 - $19.99', note: 'Per item' },
  { item: 'Rugs (Small/Medium)', price: '$9.99 - $19.99', note: 'Per item' },
  { item: 'Pillows', price: '$8.99', note: 'Per item' },
];

const additionalFees = [
  { item: 'Pickup & Delivery', price: 'Free', note: 'For orders over $30' },
  { item: 'Pickup & Delivery (Small Orders)', price: '$4.99', note: 'For orders under $30' },
  { item: 'Rush Service (Same-Day)', price: '+50%', note: 'When available' },
  { item: 'Stain Treatment', price: '$2.99', note: 'Per stain' },
];

const Pricing = () => {
  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-12">
        <div className="page-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. We offer competitive rates for all your laundry needs.
          </p>
        </div>
      </div>
      
      <div className="page-container py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Regular Laundry Services</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="py-4 px-6 font-semibold">Service</th>
                  <th className="py-4 px-6 font-semibold">Price</th>
                  <th className="py-4 px-6 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {regularItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{item.item}</td>
                    <td className="py-4 px-6 font-medium">{item.price}</td>
                    <td className="py-4 px-6 text-gray-500">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Specialty Items</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="py-4 px-6 font-semibold">Item</th>
                  <th className="py-4 px-6 font-semibold">Price</th>
                  <th className="py-4 px-6 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {specialItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{item.item}</td>
                    <td className="py-4 px-6 font-medium">{item.price}</td>
                    <td className="py-4 px-6 text-gray-500">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Additional Fees</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="py-4 px-6 font-semibold">Service</th>
                  <th className="py-4 px-6 font-semibold">Price</th>
                  <th className="py-4 px-6 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {additionalFees.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{item.item}</td>
                    <td className="py-4 px-6 font-medium">{item.price}</td>
                    <td className="py-4 px-6 text-gray-500">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-soft bg-opacity-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
          <p className="mb-6">Book your first laundry pickup and experience the convenience of SwiftWash.</p>
          <Link to="/booking">
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Pricing;
