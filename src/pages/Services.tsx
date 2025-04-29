
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: 'Regular Wash & Fold',
    description: 'Our standard service includes washing, drying, and folding your everyday laundry. Clothes are carefully sorted by color and fabric type to ensure the best care.',
    features: [
      'Sorted by color and fabric type',
      'Premium detergents and fabric softeners',
      'Neatly folded and packaged',
      '24-hour turnaround time',
    ],
    priceFrom: '€1.99/kg',
    suitable: 'Perfect for regular household laundry and daily wear items.'
  },
  {
    id: 2,
    name: 'Express Service',
    description: 'Need your laundry done quickly? Our express service ensures same-day processing when dropped off before noon, or priority next-day service.',
    features: [
      'Priority processing',
      'Same-day service (when booked before noon)',
      'Premium care with quality detergents',
      'Delivered in eco-friendly packaging',
    ],
    priceFrom: '€2.99/kg',
    suitable: 'Ideal for urgent needs, last-minute plans, or travelers.'
  },
  {
    id: 3,
    name: 'Airbnb Host Package',
    description: 'Designed specifically for Airbnb hosts and vacation rental owners who need regular, reliable service for multiple sets of linens and towels.',
    features: [
      'Bulk pricing for multiple items',
      'Special treatment for linens and towels',
      'Scheduling that works with guest changeovers',
      'Optional inventory management',
    ],
    priceFrom: '€1.79/kg',
    suitable: 'Perfect for hosts managing one or multiple properties.'
  },
  {
    id: 4,
    name: 'Business Traveler Package',
    description: 'Keep your business attire looking sharp while on the road. We give special attention to your professional wardrobe.',
    features: [
      'Special care for business attire',
      'Shirts hung or folded according to preference',
      'Light pressing included',
      'Hotel pickup and delivery',
    ],
    priceFrom: '€2.49/kg',
    suitable: 'Ideal for business travelers and professionals on the go.'
  }
];

const Services = () => {
  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-12">
        <div className="page-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Laundry Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose from our range of professional laundry services tailored to fit your specific needs.
          </p>
        </div>
      </div>
      
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 card-shadow">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-xl font-semibold text-primary mb-4">{service.priceFrom}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-sm text-gray-600 italic mb-6">{service.suitable}</p>
                
                <Link to="/booking">
                  <Button className="w-full">Book This Service</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Looking for Something Specific?</h2>
          <p className="text-gray-600 mb-6">
            We also offer special handling for delicate items, dry cleaning services, and custom solutions for your unique laundry needs. Contact us to discuss your requirements.
          </p>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
