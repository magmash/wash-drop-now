
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, CreditCard, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';

const MobileTabBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => {
    return currentPath === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 md:hidden z-40">
      <div className="grid grid-cols-5 gap-1">
        <Link to="/" className="flex flex-col items-center justify-center">
          <div className={cn(
            "p-1 rounded-full",
            isActive('/') ? "text-primary" : "text-gray-600"
          )}>
            <Home className="h-5 w-5" />
          </div>
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link to="/services" className="flex flex-col items-center justify-center">
          <div className={cn(
            "p-1 rounded-full",
            isActive('/services') ? "text-primary" : "text-gray-600"
          )}>
            <Package className="h-5 w-5" />
          </div>
          <span className="text-xs mt-1">Services</span>
        </Link>
        
        <Link to="/pricing" className="flex flex-col items-center justify-center">
          <div className={cn(
            "p-1 rounded-full",
            isActive('/pricing') ? "text-primary" : "text-gray-600"
          )}>
            <CreditCard className="h-5 w-5" />
          </div>
          <span className="text-xs mt-1">Pricing</span>
        </Link>
        
        <Link to="/account" className="flex flex-col items-center justify-center">
          <div className={cn(
            "p-1 rounded-full",
            isActive('/account') ? "text-primary" : "text-gray-600"
          )}>
            <User className="h-5 w-5" />
          </div>
          <span className="text-xs mt-1">Account</span>
        </Link>
        
        <Link to="/booking" className="flex flex-col items-center justify-center">
          <Button size="sm" className="h-auto py-1 px-2 text-xs w-full">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileTabBar;
