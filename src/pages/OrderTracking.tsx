
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const OrderTracking = () => {
  const { toast } = useToast();
  const [orderNumber, setOrderNumber] = useState('');
  const [showTracking, setShowTracking] = useState(false);
  const [trackingStatus, setTrackingStatus] = useState({
    status: 'in_progress',
    progress: 50,
    statusText: 'In Progress',
    description: 'Your laundry is currently being cleaned and processed.',
    lastUpdate: 'April 29, 2025 at 10:45 AM',
    scheduledDelivery: 'April 30, 2025 between 12:00 PM - 2:00 PM',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would fetch the status from an API
    if (orderNumber) {
      setShowTracking(true);
    } else {
      toast({
        title: "Please enter an order number",
        description: "Enter your order number to track its status.",
        variant: "destructive",
      });
    }
  };
  
  const getStatusDetails = () => {
    switch (trackingStatus.status) {
      case 'scheduled':
        return {
          icon: '📋',
          color: 'text-blue-600',
          bgColor: 'bg-blue-100',
        };
      case 'picked_up':
        return {
          icon: '🚚',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
        };
      case 'in_progress':
        return {
          icon: '🧺',
          color: 'text-indigo-600',
          bgColor: 'bg-indigo-100',
        };
      case 'out_for_delivery':
        return {
          icon: '🚚',
          color: 'text-purple-600',
          bgColor: 'bg-purple-100',
        };
      case 'delivered':
        return {
          icon: '✓',
          color: 'text-green-600',
          bgColor: 'bg-green-100',
        };
      default:
        return {
          icon: '❓',
          color: 'text-gray-600',
          bgColor: 'bg-gray-100',
        };
    }
  };
  
  const statusDetails = getStatusDetails();
  
  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-12">
        <div className="page-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Track Your Order
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Enter your order number to see the real-time status of your laundry.
          </p>
        </div>
      </div>
      
      <div className="page-container py-12">
        <div className="max-w-2xl mx-auto">
          {!showTracking ? (
            <div className="bg-white rounded-lg p-8 border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="order-number">Order Number</Label>
                  <Input 
                    id="order-number" 
                    placeholder="Enter your order number (e.g., #1001)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button type="submit">Track Order</Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-4">Don't have your order number?</h3>
                <p className="text-gray-600 mb-4">
                  If you have an account, you can view all your orders and their statuses in your account dashboard.
                </p>
                <Button variant="outline" asChild>
                  <a href="/account">Go to Your Account</a>
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 border shadow-sm">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Order #{orderNumber || '1001'}</h2>
                  <p className="text-gray-500">Placed on April 29, 2025</p>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 md:mt-0"
                  onClick={() => setShowTracking(false)}
                >
                  Track Another Order
                </Button>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">Order Status</p>
                  <span className={`px-3 py-1 ${statusDetails.bgColor} ${statusDetails.color} rounded-full text-sm font-medium`}>
                    {trackingStatus.statusText}
                  </span>
                </div>
                <Progress value={trackingStatus.progress} className="h-2" />
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Scheduled</span>
                  <span>Picked Up</span>
                  <span>In Progress</span>
                  <span>Out for Delivery</span>
                  <span>Delivered</span>
                </div>
              </div>
              
              <div className={`${statusDetails.bgColor} rounded-lg p-6 mb-8`}>
                <div className="flex items-start">
                  <div className={`${statusDetails.color} text-2xl mr-4`}>
                    {statusDetails.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{trackingStatus.statusText}</h3>
                    <p className="text-gray-700">{trackingStatus.description}</p>
                    <p className="text-sm text-gray-600 mt-2">Last updated: {trackingStatus.lastUpdate}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-4">Delivery Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Delivery Address</p>
                    <p className="font-medium">123 Main Street, Apt 4B</p>
                    <p>New York, NY 10001</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Scheduled Delivery</p>
                    <p className="font-medium">{trackingStatus.scheduledDelivery}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between py-2">
                      <span>Regular Wash & Fold (12 lbs)</span>
                      <span className="font-medium">$23.88</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Special Handling (Delicates)</span>
                      <span className="font-medium">$3.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Delivery</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-200 mt-2 text-lg font-bold">
                      <span>Total</span>
                      <span>$26.88</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                  <Button variant="outline">Contact Support</Button>
                  <Button>Reorder This Service</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default OrderTracking;
