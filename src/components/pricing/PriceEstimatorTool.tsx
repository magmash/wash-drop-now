
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Define types for our data structure
type LaundryItem = {
  id: string;
  name: string;
  price: number;
  unit: string;
};

type LaundryCategory = {
  id: string;
  name: string;
  items: LaundryItem[];
};

// Initialize with some sample data
const laundryCategories: LaundryCategory[] = [
  {
    id: 'wash-fold',
    name: 'Wash & Fold',
    items: [
      { id: 'regular', name: 'Regular Laundry', price: 1.99, unit: '/lb' },
      { id: 'express', name: 'Express Service (24hr)', price: 2.99, unit: '/lb' },
      { id: 'airbnb', name: 'Airbnb Host Package', price: 1.79, unit: '/lb' },
      { id: 'business', name: 'Business Traveler Package', price: 2.49, unit: '/lb' },
    ],
  },
  {
    id: 'dry-cleaning',
    name: 'Dry Cleaning',
    items: [
      { id: 'shirt', name: 'Shirt/Blouse', price: 5.99, unit: '/item' },
      { id: 'pants', name: 'Pants/Trousers', price: 6.99, unit: '/item' },
      { id: 'suit', name: 'Full Suit', price: 12.99, unit: '/item' },
      { id: 'dress', name: 'Dress', price: 9.99, unit: '/item' },
      { id: 'coat', name: 'Coat/Jacket', price: 15.99, unit: '/item' },
    ],
  },
  {
    id: 'household',
    name: 'Household Items',
    items: [
      { id: 'comforter-s', name: 'Comforter (Twin/Full)', price: 19.99, unit: '/item' },
      { id: 'comforter-l', name: 'Comforter (Queen/King)', price: 24.99, unit: '/item' },
      { id: 'blanket', name: 'Blanket', price: 14.99, unit: '/item' },
      { id: 'curtains', name: 'Curtains', price: 12.99, unit: '/panel' },
      { id: 'tablecloth', name: 'Tablecloth', price: 9.99, unit: '/item' },
    ],
  },
  {
    id: 'specialty',
    name: 'Specialty Items',
    items: [
      { id: 'rug-s', name: 'Rug (Small < 4x6)', price: 19.99, unit: '/item' },
      { id: 'rug-m', name: 'Rug (Medium 5x8)', price: 29.99, unit: '/item' },
      { id: 'rug-l', name: 'Rug (Large > 9x12)', price: 49.99, unit: '/item' },
      { id: 'pillows', name: 'Pillow', price: 8.99, unit: '/item' },
      { id: 'stuffed-toy', name: 'Stuffed Toy', price: 6.99, unit: '/item' },
    ],
  },
];

const PriceEstimatorTool = () => {
  // State to track selected quantities
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  
  // Calculate the total price based on selected items and quantities
  const totalPrice = useMemo(() => {
    let total = 0;
    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
      // Find the item in our categories
      for (const category of laundryCategories) {
        const item = category.items.find(item => item.id === itemId);
        if (item) {
          total += item.price * quantity;
          break;
        }
      }
    });
    return total;
  }, [selectedItems]);
  
  // Function to update item quantity
  const updateQuantity = (itemId: string, change: number) => {
    setSelectedItems(prev => {
      const currentQuantity = prev[itemId] || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      
      if (newQuantity === 0) {
        // Remove the item if quantity is zero
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
  };
  
  // Check if any items have been added
  const hasItems = Object.values(selectedItems).some(quantity => quantity > 0);
  
  return (
    <div className="relative pb-24 md:pb-0">
      {/* Categories and Items */}
      <Tabs defaultValue="wash-fold" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
          {laundryCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {laundryCategories.map(category => (
          <TabsContent key={category.id} value={category.id}>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
              <div className="grid gap-4">
                {category.items.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-primary font-semibold">${item.price.toFixed(2)}{item.unit}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={!selectedItems[item.id]}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {selectedItems[item.id] || 0}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Sticky Summary Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 transform transition-all duration-300 z-30 md:relative md:mt-8 md:border md:rounded-lg ${hasItems ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">Estimated Total:</p>
            <p className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</p>
          </div>
          <Link to="/booking">
            <Button size="lg" disabled={!hasItems}>
              Proceed to Booking
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceEstimatorTool;
