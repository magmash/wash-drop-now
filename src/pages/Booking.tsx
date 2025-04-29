import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';

const BookingPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('regular');
  const [estimatedWeight, setEstimatedWeight] = useState<string>('10-15');
  const [preferenceHangDry, setPreferenceHangDry] = useState<boolean>(false);
  const [preferenceFragranceFree, setPreferenceFragranceFree] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('pickup');
  
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the form
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You must choose a pickup date.",
        variant: "destructive",
      });
      return;
    }
    
    if (!timeSlot) {
      toast({
        title: "Please select a time slot",
        description: "You must choose a pickup time.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would submit to an API here
    toast({
      title: "Booking successful!",
      description: "Your laundry pickup has been scheduled.",
    });
  };
  
  const navigateToPreferences = () => {
    setActiveTab('preferences');
  };
  
  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-12">
        <div className="page-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Laundry Pickup
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Schedule a pickup in just a few simple steps. We'll take care of the rest.
          </p>
        </div>
      </div>
      
      <div className="page-container py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="pickup">Pickup Details</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleBooking}>
            <TabsContent value="pickup">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-6">Select Service Type</h2>
                  <RadioGroup value={serviceType} onValueChange={setServiceType} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="regular" id="regular" />
                      <Label htmlFor="regular" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Regular Wash & Fold</span>
                        <span className="text-sm text-gray-500">24-hour turnaround</span>
                        <span className="text-primary font-medium mt-1">€1.99/kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Express Service</span>
                        <span className="text-sm text-gray-500">Same-day when available</span>
                        <span className="text-primary font-medium mt-1">€2.99/kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="airbnb" id="airbnb" />
                      <Label htmlFor="airbnb" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Airbnb Host Package</span>
                        <span className="text-sm text-gray-500">Ideal for linens & towels</span>
                        <span className="text-primary font-medium mt-1">€1.79/kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="business" id="business" />
                      <Label htmlFor="business" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Business Traveler</span>
                        <span className="text-sm text-gray-500">Special care for business attire</span>
                        <span className="text-primary font-medium mt-1">€2.49/kg</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Estimated Laundry Weight</h2>
                  <p className="text-gray-600 mb-4">Help us prepare by estimating how much laundry you have.</p>
                  <RadioGroup value={estimatedWeight} onValueChange={setEstimatedWeight} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="5-10" id="small" />
                      <Label htmlFor="small" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Small Load</span>
                        <span className="text-sm text-gray-500">5-10 kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="10-15" id="medium" />
                      <Label htmlFor="medium" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Medium Load</span>
                        <span className="text-sm text-gray-500">10-15 kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="15+" id="large" />
                      <Label htmlFor="large" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Large Load</span>
                        <span className="text-sm text-gray-500">15+ kg</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Pickup Date</h2>
                    <div className="border rounded-md p-4">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => {
                          // Disable dates in the past
                          return date < new Date(new Date().setHours(0, 0, 0, 0));
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-4">Pickup Time</h2>
                    <RadioGroup value={timeSlot} onValueChange={setTimeSlot} className="grid gap-4">
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                        <RadioGroupItem value="morning" id="morning" />
                        <Label htmlFor="morning" className="cursor-pointer">Morning (8am - 12pm)</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                        <RadioGroupItem value="afternoon" id="afternoon" />
                        <Label htmlFor="afternoon" className="cursor-pointer">Afternoon (12pm - 4pm)</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                        <RadioGroupItem value="evening" id="evening" />
                        <Label htmlFor="evening" className="cursor-pointer">Evening (4pm - 8pm)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <Button type="button" onClick={navigateToPreferences}>
                    Next: Preferences
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preferences">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Special Instructions</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="hang-dry" 
                        checked={preferenceHangDry}
                        onCheckedChange={(checked) => setPreferenceHangDry(checked as boolean)}
                      />
                      <Label htmlFor="hang-dry" className="cursor-pointer">Hang dry delicate items (+€0.50/kg)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="fragrance-free" 
                        checked={preferenceFragranceFree}
                        onCheckedChange={(checked) => setPreferenceFragranceFree(checked as boolean)}
                      />
                      <Label htmlFor="fragrance-free" className="cursor-pointer">Use fragrance-free detergent</Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Additional Notes</h2>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={4}
                    placeholder="Any special instructions for your laundry? Let us know here."
                  ></textarea>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Pickup Address</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="street">Street Address</Label>
                      <Input id="street" placeholder="123 Main St" className="mt-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="apt">Apt/Suite (Optional)</Label>
                        <Input id="apt" placeholder="Apt #" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="State" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="ZIP Code" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your Name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(123) 456-7890" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      const pickupTab = document.querySelector('[data-value="pickup"]');
                      if (pickupTab && pickupTab instanceof HTMLElement) {
                        pickupTab.click();
                      }
                    }}
                  >
                    Back to Pickup Details
                  </Button>
                  <Button type="submit">Complete Booking</Button>
                </div>
              </div>
            </TabsContent>
          </form>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default BookingPage;
