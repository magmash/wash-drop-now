
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-10 md:py-16">
      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Laundry Made <span className="text-primary">Swift</span> & Simple
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              24-hour turnaround laundry service for busy professionals, Airbnb hosts, and travelers. Schedule a pickup and we'll handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button className="btn-primary text-base sm:text-lg w-full sm:w-auto">
                  Book Pickup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="text-base sm:text-lg w-full sm:w-auto">
                  See Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                alt="Person using SwiftWash on mobile phone"
                className="w-full rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
