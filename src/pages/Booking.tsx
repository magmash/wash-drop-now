
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { CheckCircle, Home, PackageOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('wash');
  const [estimatedWeight, setEstimatedWeight] = useState<string>('10-15');
  const [preferenceHangDry, setPreferenceHangDry] = useState<boolean>(false);
  const [preferenceFragranceFree, setPreferenceFragranceFree] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('pickup');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');
  
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
    
    // Generate a mock order ID
    const mockOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(mockOrderId);
    
    // Set booking success state instead of showing toast
    setBookingSuccess(true);
  };
  
  const navigateToPreferences = () => {
    setActiveTab('preferences');
  };
  
  // Show success page if booking was successful
  if (bookingSuccess) {
    return (
      <PageLayout>
        <div className="page-container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Successful!
            </h1>
            
            <p className="text-lg text-gray-700 mb-6">
              Your laundry pickup has been scheduled. Order ID: <span className="font-medium">{orderId}</span>
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-sm text-gray-500">Service Type</p>
                  <p className="font-medium">{serviceType === 'wash' 
                    ? 'Wash' 
                    : serviceType === 'wash-iron' 
                    ? 'Wash & Iron' 
                    : serviceType === 'dry-cleaning' 
                    ? 'Dry Cleaning' 
                    : serviceType === 'ironing' 
                    ? 'Ironing' 
                    : 'Duvets & Bulky Items'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Pickup Date</p>
                  <p className="font-medium">{date ? new Date(date).toLocaleDateString() : 'Not specified'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Pickup Time</p>
                  <p className="font-medium">
                    {timeSlot === 'morning' 
                      ? 'Morning (8am - 12pm)' 
                      : timeSlot === 'afternoon' 
                      ? 'Afternoon (12pm - 4pm)' 
                      : 'Evening (4pm - 8pm)'}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Estimated Weight</p>
                  <p className="font-medium">
                    {estimatedWeight === '5-10' 
                      ? 'Small Load (5-10 kg)' 
                      : estimatedWeight === '10-15' 
                      ? 'Medium Load (10-15 kg)' 
                      : 'Large Load (15+ kg)'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Homepage
                </Button>
              </Link>
              <Link to={`/tracking?order=${orderId}`}>
                <Button className="w-full sm:w-auto">
                  <PackageOpen className="mr-2 h-4 w-4" />
                  Track Your Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
  
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
                      <RadioGroupItem value="wash" id="wash" />
                      <Label htmlFor="wash" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Wash</span>
                        <span className="text-sm text-gray-500">For everyday laundry, bedsheets and towels</span>
                        <span className="text-primary font-medium mt-1">€1.99/kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="wash-iron" id="wash-iron" />
                      <Label htmlFor="wash-iron" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Wash&Iron</span>
                        <span className="text-sm text-gray-500">For everyday laundry that requires ironing</span>
                        <span className="text-primary font-medium mt-1">€2.99/kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="dry-cleaning" id="dry-cleaning" />
                      <Label htmlFor="dry-cleaning" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Dry Cleaning</span>
                        <span className="text-sm text-gray-500">For delicate items and fabrics</span>
                        <span className="text-primary font-medium mt-1">€1.79/kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="ironing" id="ironing" />
                      <Label htmlFor="ironing" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Ironing</span>
                        <span className="text-sm text-gray-500">For items that are already clean but need pressing</span>
                        <span className="text-primary font-medium mt-1">€2.49/kg</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="duvets-bulky" id="duvets-bulky" />
                      <Label htmlFor="duvets-bulky" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Duvets & Bulky items</span>
                        <span className="text-sm text-gray-500">For larger items that require extra care</span>
                        <span className="text-primary font-medium mt-1">€14.99/item</span>
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
