
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WashingMachine, Shirt, Bed } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 1,
    name: 'Wash',
    description: 'For everyday laundry, bedsheets and towels.',
    priceFrom: 'From €1.99/kg',
    icon: WashingMachine,
  },
  {
    id: 2,
    name: 'Wash&Iron',
    description: 'For everyday laundry that requires ironing',
    priceFrom: 'From €2.99/kg',
    icon: Shirt,
  },
  {
    id: 3,
    name: 'Dry Cleaning',
    description: 'For delicate items and fabrics',
    priceFrom: 'From €1.79/kg',
    icon: Bed, // Changed from SprayBottle to Bed as SprayBottle doesn't exist in lucide-react
  }
];

const ServicesList = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="page-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fast, professional laundry services tailored for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-primary bg-opacity-5 p-6 flex flex-col items-center">
                  <div className="bg-white rounded-full p-4 shadow-md mb-4">
                    {React.createElement(service.icon, { 
                      size: 28,
                      className: "text-primary" 
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-center mb-2 text-sm">{service.description}</p>
                  <p className="text-primary font-bold mb-4">{service.priceFrom}</p>
                  <Link to="/booking" className="w-full">
                    <Button className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services" className="text-primary hover:underline font-medium inline-flex items-center">
            View all services and pricing details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
