
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { WashingMachine, Shirt, SprayBottle, Bed } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Wash',
    description: 'For everyday laundry, bedsheets and towels. Our wash service includes thorough cleaning with premium detergents, suitable for all your regular fabrics.',
    features: [
      'Sorted by color and fabric type',
      'Premium detergents and fabric softeners',
      'Neatly folded and packaged',
      '24-hour turnaround time',
    ],
    priceFrom: '€1.99/kg',
    suitable: 'Perfect for regular household laundry and daily wear items.',
    icon: WashingMachine
  },
  {
    id: 2,
    name: 'Wash&Iron',
    description: 'For everyday laundry that requires ironing. Clean and crisp finish for your garments, with professional pressing and folding.',
    features: [
      'Complete washing and drying',
      'Professional pressing',
      'Garments hung or folded as required',
      '48-hour standard service',
    ],
    priceFrom: '€2.99/kg',
    suitable: 'Ideal for work attire, formal wear, and household items requiring a crisp finish.',
    icon: Shirt
  },
  {
    id: 3,
    name: 'Dry Cleaning',
    description: 'For delicate items and fabrics that cannot be washed with water. Our specialist service ensures proper care for your valuable garments.',
    features: [
      'Eco-friendly solvents',
      'Specialized stain removal',
      'Gentle treatment for delicate fabrics',
      'Professional finishing and packaging',
    ],
    priceFrom: '€1.79/kg',
    suitable: 'Perfect for suits, formal dresses, silk, wool, and other delicate fabrics.',
    icon: SprayBottle
  },
  {
    id: 4,
    name: 'Ironing',
    description: 'For items that are already clean but need professional pressing. Perfect crisp finish for your pre-washed garments.',
    features: [
      'Professional steaming and pressing',
      'Attention to detail on collars and cuffs',
      'Proper hanging to minimize creasing',
      'Express service available',
    ],
    priceFrom: '€2.49/kg',
    suitable: 'Ideal for pre-washed garments requiring professional finishing.',
    icon: Shirt
  },
  {
    id: 5,
    name: 'Duvets & Bulky items',
    description: 'For larger items that require extra care. Specialist cleaning for duvets, comforters, pillows, and other bulky household items.',
    features: [
      'Special oversized equipment',
      'Thorough cleaning and sanitizing',
      'Gentle drying process',
      'Proper packaging for storage or use',
    ],
    priceFrom: '€14.99/item',
    suitable: 'Perfect for seasonal bedding, duvets, comforters, pillows, and other large household items.',
    icon: Bed
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
                <div className="flex items-center gap-3 mb-3">
                  {React.createElement(service.icon, { 
                    size: 24,
                    className: "text-primary" 
                  })}
                  <h2 className="text-2xl font-bold">{service.name}</h2>
                </div>
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
