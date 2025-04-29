
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Using data from the LaundryServiceList page
const laundryPartners = [
  {
    id: 1,
    name: "CityClean Laundry",
    location: "Delta City Mall, Podgorica",
    rating: 4.8,
  },
  {
    id: 2,
    name: "LaundroMont",
    location: "Bulevar Džordža Vašingtona, Podgorica",
    rating: 4.6,
  },
  {
    id: 3,
    name: "FastWash Podgorica",
    location: "Mall of Montenegro, Podgorica",
    rating: 4.9,
  }
];

const LaundryPartners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="page-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Laundry Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted local laundry services across Podgorica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {laundryPartners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{partner.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium">{partner.rating}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/laundry-services">
            <Button variant="outline">
              View All Laundry Partners
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LaundryPartners;
