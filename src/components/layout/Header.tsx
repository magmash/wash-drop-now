
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="page-container flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-primary">SwiftWash</span>
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
          <Link to="/booking" className="text-gray-700 hover:text-primary transition-colors">
            Book Now
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
        
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
