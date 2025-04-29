
import React from 'react';
import { Calendar, Package, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Schedule Pickup',
    description: 'Book a pickup time that works for you. We offer same-day pickups when booked before noon.',
    icon: Calendar,
  },
  {
    id: 2,
    title: 'We Clean Your Laundry',
    description: 'Our professional partners clean, dry, and fold your laundry according to your preferences.',
    icon: Package,
  },
  {
    id: 3,
    title: '24h Delivery',
    description: 'Get your fresh laundry back within 24 hours, delivered right to your door.',
    icon: Truck,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How SwiftWash Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple 3-step process makes laundry day a breeze. From pickup to delivery, we handle everything for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg p-6 text-center card-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 text-primary mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="mb-2 flex items-center justify-center">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full text-sm font-bold">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
