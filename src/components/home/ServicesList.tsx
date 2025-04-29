
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    name: 'Regular Wash & Fold',
    description: 'Your everyday laundry cleaned, dried, and neatly folded.',
    priceFrom: 'From €1.99/kg',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 2,
    name: 'Express Service',
    description: 'Same-day service for urgent laundry needs.',
    priceFrom: 'From €2.99/kg',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 3,
    name: 'Airbnb Host Package',
    description: 'Bulk service designed for hosts with multiple properties.',
    priceFrom: 'From €1.79/kg',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300',
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
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <p className="text-primary font-semibold mb-4">{service.priceFrom}</p>
                <Link to="/services">
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
