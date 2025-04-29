
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Washing, ShirtIron, Spraybottle, Bed } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Wash',
    description: 'For everyday laundry, bedsheets and towels.',
    priceFrom: 'From €1.99/kg',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300',
    icon: Washing,
  },
  {
    id: 2,
    name: 'Wash&Iron',
    description: 'For everyday laundry that requires ironing',
    priceFrom: 'From €2.99/kg',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300',
    icon: ShirtIron,
  },
  {
    id: 3,
    name: 'Dry Cleaning',
    description: 'For delicate items and fabrics',
    priceFrom: 'From €1.79/kg',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300',
    icon: Spraybottle,
  }
];

const ServicesList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Laundry Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of professional laundry services tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden card-shadow">
              <div className="p-6 flex flex-col items-center">
                {React.createElement(service.icon, { 
                  size: 48,
                  className: "mb-4 text-primary" 
                })}
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3 text-center">{service.description}</p>
                <p className="text-primary font-semibold mb-4">{service.priceFrom}</p>
                <Link to="/services" className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/pricing">
            <Button variant="outline" size="lg">
              View Full Price List
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
