
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const laundryServices = [
  {
    id: 1,
    name: "CityClean Laundry",
    location: "Delta City Mall, Podgorica",
    rating: 4.8,
    reviewCount: 124,
    priceRange: "€€",
    timeEstimate: "24h",
    description: "Professional laundry service with eco-friendly cleaning options",
    specialties: ["Delicates", "Express Service", "Eco-Friendly"],
    distance: "1.2 km"
  },
  {
    id: 2,
    name: "LaundroMont",
    location: "Bulevar Džordža Vašingtona, Podgorica",
    rating: 4.6,
    reviewCount: 98,
    priceRange: "€€",
    timeEstimate: "24-36h",
    description: "Family-owned laundry with 20+ years of experience in the city center",
    specialties: ["Business Attire", "Bedding", "Tourist Quick Service"],
    distance: "0.8 km"
  },
  {
    id: 3,
    name: "FastWash Podgorica",
    location: "Mall of Montenegro, Podgorica",
    rating: 4.9,
    reviewCount: 156,
    priceRange: "€€€",
    timeEstimate: "12-24h",
    description: "Premium express service with hotel and apartment delivery",
    specialties: ["Express Service", "Hotel Delivery", "Airbnb Host Package"],
    distance: "1.5 km"
  },
  {
    id: 4,
    name: "EcoLaundry Montenegro",
    location: "Stara Varoš, Podgorica",
    rating: 4.5,
    reviewCount: 87,
    priceRange: "€€",
    timeEstimate: "24h",
    description: "Environmentally-friendly laundry using natural detergents",
    specialties: ["Organic Detergents", "Allergy-Friendly", "Stain Removal"],
    distance: "2.1 km"
  }
];

const LaundryServiceList = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isAutoAssigning, setIsAutoAssigning] = useState<boolean>(false);
  const { toast } = useToast();

  const handleAutoAssign = () => {
    setIsAutoAssigning(true);
    
    // Simulate finding the closest service based on location
    setTimeout(() => {
      // Pick the service with shortest distance
      const closestService = [...laundryServices].sort((a, b) => 
        parseFloat(a.distance) - parseFloat(b.distance)
      )[0];
      
      setSelectedService(closestService.id);
      setIsAutoAssigning(false);
      
      toast({
        title: "Service Auto-Assigned",
        description: `${closestService.name} has been selected based on your location.`,
      });
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-8">
        <div className="page-container">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Laundry Services in Podgorica
          </h1>
          <p className="text-gray-600">
            Choose from our trusted local partners or let us find the best option for you
          </p>
        </div>
      </div>

      <div className="page-container py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Select a Service Provider</h2>
            <p className="text-sm text-gray-500">All providers offer 24-hour turnaround and free pickup</p>
          </div>
          
          <Button 
            onClick={handleAutoAssign} 
            variant="outline" 
            disabled={isAutoAssigning}
            className="w-full md:w-auto"
          >
            <MapPin className="h-4 w-4 mr-2" />
            {isAutoAssigning ? "Finding nearest..." : "Auto-assign by location"}
          </Button>
        </div>

        <RadioGroup value={selectedService?.toString()} onValueChange={value => setSelectedService(parseInt(value))}>
          <div className="grid grid-cols-1 gap-4">
            {laundryServices.map((service) => (
              <div key={service.id} className={`border rounded-lg overflow-hidden transition-all duration-200 ${selectedService === service.id ? 'border-primary ring-1 ring-primary' : 'border-gray-200'}`}>
                <Card className="border-0 shadow-none">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {service.location} • {service.distance} away
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center">
                          <span className="text-primary font-medium mr-1">{service.rating}</span>
                          <span className="text-xs text-gray-500">({service.reviewCount})</span>
                        </div>
                        <span className="text-sm">{service.priceRange} • {service.timeEstimate}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.specialties.map((specialty, index) => (
                        <span key={index} className="bg-primary bg-opacity-10 text-primary text-xs px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t border-gray-100 pt-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <RadioGroupItem value={service.id.toString()} id={`service-${service.id}`} />
                      <Label htmlFor={`service-${service.id}`} className="ml-2">Select this service</Label>
                    </div>
                    <Link to={`/services/${service.id}`}>
                      <Button variant="ghost" size="sm">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </RadioGroup>
        
        <div className="mt-8 flex justify-center">
          {selectedService ? (
            <Link to={`/booking?serviceId=${selectedService}`}>
              <Button className="w-full md:w-auto">
                Continue with Selected Service
              </Button>
            </Link>
          ) : (
            <Button disabled className="w-full md:w-auto">
              Select a Service to Continue
            </Button>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default LaundryServiceList;
