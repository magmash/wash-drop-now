
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary bg-opacity-5">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Save Time on Laundry?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of customers who've reclaimed their time with SwiftWash. Your clothes will be picked up, cleaned, and returned in just 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button className="btn-primary w-full sm:w-auto text-base">
                Book Your First Pickup
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="w-full sm:w-auto text-base">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
