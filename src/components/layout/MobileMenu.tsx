
import React from 'react';
import { Link } from 'react-router-dom';
import { X, User, Home, Calendar, CreditCard, HelpCircle, Package, History } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="fixed inset-y-0 right-0 max-w-[80%] w-80 bg-white shadow-xl animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b0b1b295-ef34-4ebd-a664-a6f5fee9513f.png" 
              alt="SwiftWash Logo" 
              className="h-6" 
            />
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="py-4">
          <Link 
            to="/" 
            className="flex items-center px-4 py-3 hover:bg-gray-100"
            onClick={onClose}
          >
            <Home className="h-5 w-5 mr-3 text-primary" />
            <span>Home</span>
          </Link>
          
          <Link 
            to="/services" 
            className="flex items-center px-4 py-3 hover:bg-gray-100"
            onClick={onClose}
          >
            <Package className="h-5 w-5 mr-3 text-primary" />
            <span>Services</span>
          </Link>
          
          <Link 
            to="/pricing" 
            className="flex items-center px-4 py-3 hover:bg-gray-100"
            onClick={onClose}
          >
            <CreditCard className="h-5 w-5 mr-3 text-primary" />
            <span>Pricing</span>
          </Link>
          
          <Link 
            to="/booking" 
            className="flex items-center px-4 py-3 hover:bg-gray-100"
            onClick={onClose}
          >
            <Calendar className="h-5 w-5 mr-3 text-primary" />
            <span>Book Now</span>
          </Link>
          
          <Link 
            to="/orders" 
            className="flex items-center px-4 py-3 hover:bg-gray-100"
            onClick={onClose}
          >
            <History className="h-5 w-5 mr-3 text-primary" />
            <span>Order History</span>
          </Link>
          
          <Link 
            to="/faq" 
            className="flex items-center px-4 py-3 hover:bg-gray-100"
            onClick={onClose}
          >
            <HelpCircle className="h-5 w-5 mr-3 text-primary" />
            <span>FAQ</span>
          </Link>
          
          <Link 
            to="/account" 
            className="flex items-center px-4 py-3 hover:bg-gray-100"
            onClick={onClose}
          >
            <User className="h-5 w-5 mr-3 text-primary" />
            <span>Account</span>
          </Link>
        </nav>
        
        <div className="absolute bottom-8 inset-x-0 px-4">
          <Link to="/booking" onClick={onClose}>
            <Button className="w-full">Book Laundry Pickup</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
