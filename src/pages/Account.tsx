
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from "@/hooks/use-toast";

const Account = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // These states would be populated from a backend in a real application
  const [userProfile, setUserProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St',
    aptUnit: 'Apt 4B',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  });
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({
      title: "Login successful!",
      description: "Welcome back to SwiftWash.",
    });
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({
      title: "Account created!",
      description: "Welcome to SwiftWash.",
    });
  };
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated!",
      description: "Your account information has been updated.",
    });
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out successfully",
      description: "You've been logged out of your account.",
    });
  };
  
  if (isLoggedIn) {
    return (
      <PageLayout>
        <div className="bg-primary bg-opacity-5 py-12">
          <div className="page-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome, {userProfile.firstName}
                </h1>
                <p className="text-gray-600">
                  Manage your account and view your order history.
                </p>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>
        </div>
        
        <div className="page-container py-12">
          <Tabs defaultValue="profile" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <div className="bg-white rounded-lg p-6 border shadow-sm">
                <h2 className="text-xl font-bold mb-6">Personal Information</h2>
                <form onSubmit={handleUpdateProfile}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        value={userProfile.firstName}
                        onChange={(e) => setUserProfile({...userProfile, firstName: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        value={userProfile.lastName}
                        onChange={(e) => setUserProfile({...userProfile, lastName: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={userProfile.email}
                        onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={userProfile.phone}
                        onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-6 mt-8">Default Address</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input 
                        id="address" 
                        value={userProfile.address}
                        onChange={(e) => setUserProfile({...userProfile, address: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="aptUnit">Apt/Suite (Optional)</Label>
                        <Input 
                          id="aptUnit" 
                          value={userProfile.aptUnit}
                          onChange={(e) => setUserProfile({...userProfile, aptUnit: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          value={userProfile.city}
                          onChange={(e) => setUserProfile({...userProfile, city: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input 
                          id="state" 
                          value={userProfile.state}
                          onChange={(e) => setUserProfile({...userProfile, state: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input 
                          id="zip" 
                          value={userProfile.zip}
                          onChange={(e) => setUserProfile({...userProfile, zip: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <div className="bg-white rounded-lg p-6 border shadow-sm">
                <h2 className="text-xl font-bold mb-6">Order History</h2>
                <div className="space-y-6">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <p className="font-medium">Order #{1000 + order}</p>
                          <p className="text-sm text-gray-500">April {10 + order}, 2025</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            Completed
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                          <p className="text-gray-700">Regular Wash & Fold (12 lbs)</p>
                          <p className="text-gray-600 font-medium mt-1">$23.88</p>
                        </div>
                        <div className="mt-2 md:mt-0 flex gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button size="sm">Reorder</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preferences">
              <div className="bg-white rounded-lg p-6 border shadow-sm">
                <h2 className="text-xl font-bold mb-6">Default Laundry Preferences</h2>
                <form>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="detergent">Preferred Detergent</Label>
                      <select id="detergent" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mt-1">
                        <option value="standard">Standard (Free)</option>
                        <option value="fragrance-free">Fragrance-Free (Free)</option>
                        <option value="hypoallergenic">Hypoallergenic (+$1.00)</option>
                        <option value="eco-friendly">Eco-Friendly (Free)</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="temperature">Water Temperature</Label>
                      <select id="temperature" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mt-1">
                        <option value="warm">Warm (Recommended)</option>
                        <option value="cold">Cold</option>
                        <option value="hot">Hot</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="folding">Folding Preference</Label>
                      <select id="folding" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mt-1">
                        <option value="standard">Standard Folding</option>
                        <option value="hang">Hang Dry Delicates (+$0.50/lb)</option>
                        <option value="special">Special Instructions (See Notes)</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Special Instructions</Label>
                      <textarea 
                        id="notes" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mt-1"
                        rows={4}
                        placeholder="Any default instructions for handling your laundry"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button type="submit">Save Preferences</Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-12">
        <div className="page-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Account
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Sign in to your account or create a new one.
          </p>
        </div>
      </div>
      
      <div className="page-container py-12">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <div className="bg-white rounded-lg p-6 border shadow-sm">
                <h2 className="text-xl font-bold mb-6">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email Address</Label>
                    <Input id="login-email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <Label htmlFor="login-password">Password</Label>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <Input id="login-password" type="password" className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="signup">
              <div className="bg-white rounded-lg p-6 border shadow-sm">
                <h2 className="text-xl font-bold mb-6">Create an Account</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="signup-first-name">First Name</Label>
                      <Input id="signup-first-name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="signup-last-name">Last Name</Label>
                      <Input id="signup-last-name" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="signup-email">Email Address</Label>
                    <Input id="signup-email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="signup-phone">Phone Number</Label>
                    <Input id="signup-phone" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <Input id="signup-confirm-password" type="password" className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default Account;
