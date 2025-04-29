import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import MobileMenu from './MobileMenu';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="page-container flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/b0b1b295-ef34-4ebd-a664-a6f5fee9513f.png" alt="SwiftWash Logo" className="h-12" />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/laundry-services" className="text-gray-700 hover:text-primary transition-colors">
            Laundry Partners
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/price-estimator" className="text-gray-700 hover:text-primary transition-colors">
            Price Estimator
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/account">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" /> Account
            </Button>
          </Link>
          <Link to="/booking">
            <Button size="sm">Book Now</Button>
          </Link>
        </div>
        
        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>;
};
export default Header;