import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Minus, Calculator, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

// Define types for our data structure
type LaundryItem = {
  id: string;
  name: string;
  price: number;
  unit: string;
  description?: string;
};
type LaundryCategory = {
  id: string;
  name: string;
  description?: string;
  items: LaundryItem[];
};

// Initialize with comprehensive data similar to the reference
const laundryCategories: LaundryCategory[] = [{
  id: 'dry-cleaning',
  name: 'Dry Cleaning',
  description: 'Professional dry cleaning for delicate fabrics and formal wear',
  items: [{
    id: 'suit',
    name: 'Suit (2 Piece)',
    price: 15.99,
    unit: '/item'
  }, {
    id: 'dress-simple',
    name: 'Dress (Simple)',
    price: 10.99,
    unit: '/item'
  }, {
    id: 'dress-formal',
    name: 'Dress (Formal/Evening)',
    price: 18.99,
    unit: '/item'
  }, {
    id: 'coat-light',
    name: 'Light Jacket/Blazer',
    price: 9.99,
    unit: '/item'
  }, {
    id: 'coat-winter',
    name: 'Winter Coat',
    price: 16.99,
    unit: '/item'
  }, {
    id: 'shirt',
    name: 'Shirt/Blouse',
    price: 6.99,
    unit: '/item'
  }, {
    id: 'trousers',
    name: 'Trousers/Slacks',
    price: 7.99,
    unit: '/item'
  }, {
    id: 'skirt',
    name: 'Skirt (Simple)',
    price: 7.99,
    unit: '/item'
  }, {
    id: 'skirt-pleated',
    name: 'Skirt (Pleated)',
    price: 9.99,
    unit: '/item'
  }, {
    id: 'tie',
    name: 'Tie/Scarf',
    price: 4.99,
    unit: '/item'
  }, {
    id: 'sweater',
    name: 'Sweater/Jumper',
    price: 7.99,
    unit: '/item'
  }]
}, {
  id: 'ironed-laundry',
  name: 'Ironed Laundry',
  description: 'Washed, dried, and professionally ironed items',
  items: [{
    id: 'shirt-ironed',
    name: 'Shirt/Blouse',
    price: 3.99,
    unit: '/item'
  }, {
    id: 'trousers-ironed',
    name: 'Trousers/Slacks',
    price: 4.99,
    unit: '/item'
  }, {
    id: 'tshirt-ironed',
    name: 'T-Shirt',
    price: 3.49,
    unit: '/item'
  }, {
    id: 'jeans-ironed',
    name: 'Jeans',
    price: 4.99,
    unit: '/item'
  }, {
    id: 'dress-shirt',
    name: 'Dress Shirt',
    price: 4.99,
    unit: '/item'
  }, {
    id: 'bedsheet-single',
    name: 'Bed Sheet (Single)',
    price: 5.99,
    unit: '/item'
  }, {
    id: 'bedsheet-double',
    name: 'Bed Sheet (Double/Queen)',
    price: 6.99,
    unit: '/item'
  }, {
    id: 'bedsheet-king',
    name: 'Bed Sheet (King)',
    price: 7.99,
    unit: '/item'
  }, {
    id: 'pillowcase',
    name: 'Pillowcase',
    price: 1.99,
    unit: '/item'
  }, {
    id: 'tablecloth-s',
    name: 'Tablecloth (Small)',
    price: 6.99,
    unit: '/item'
  }, {
    id: 'tablecloth-l',
    name: 'Tablecloth (Large)',
    price: 9.99,
    unit: '/item'
  }]
}, {
  id: 'wash-fold',
  name: 'Wash & Fold',
  description: 'Everyday laundry washed, dried, and neatly folded',
  items: [{
    id: 'regular-laundry',
    name: 'Regular Laundry',
    price: 1.99,
    unit: '/kg',
    description: 'Everyday clothing items'
  }, {
    id: 'delicate-laundry',
    name: 'Delicate Laundry',
    price: 2.49,
    unit: '/kg',
    description: 'Gentle cycle for delicate fabrics'
  }, {
    id: 'bedding',
    name: 'Bedding & Linens',
    price: 1.89,
    unit: '/kg',
    description: 'Sheets, pillowcases, and towels'
  }, {
    id: 'bulk-discount',
    name: 'Bulk Discount (5+ kg)',
    price: 1.79,
    unit: '/kg',
    description: 'Discounted rate for larger loads'
  }, {
    id: 'comforter-small',
    name: 'Comforter (Twin/Full)',
    price: 19.99,
    unit: '/item'
  }, {
    id: 'comforter-large',
    name: 'Comforter (Queen/King)',
    price: 24.99,
    unit: '/item'
  }, {
    id: 'duvet-cover',
    name: 'Duvet Cover',
    price: 14.99,
    unit: '/item'
  }]
}, {
  id: 'household',
  name: 'Household Items',
  description: 'Special care for home textiles and accessories',
  items: [{
    id: 'curtains-s',
    name: 'Curtains (Small Panel)',
    price: 8.99,
    unit: '/panel'
  }, {
    id: 'curtains-l',
    name: 'Curtains (Large Panel)',
    price: 12.99,
    unit: '/panel'
  }, {
    id: 'rug-small',
    name: 'Rug (Small <120×180 cm)',
    price: 19.99,
    unit: '/item'
  }, {
    id: 'rug-medium',
    name: 'Rug (Medium 150×240 cm)',
    price: 29.99,
    unit: '/item'
  }, {
    id: 'rug-large',
    name: 'Rug (Large >270×360 cm)',
    price: 49.99,
    unit: '/item'
  }, {
    id: 'pillow',
    name: 'Pillow',
    price: 9.99,
    unit: '/item'
  }, {
    id: 'cushion-cover',
    name: 'Cushion Cover',
    price: 4.99,
    unit: '/item'
  }, {
    id: 'blanket-s',
    name: 'Blanket (Small/Throw)',
    price: 12.99,
    unit: '/item'
  }, {
    id: 'blanket-l',
    name: 'Blanket (Large)',
    price: 16.99,
    unit: '/item'
  }]
}, {
  id: 'specialty',
  name: 'Specialty Items',
  description: 'Special care for unique or delicate items',
  items: [{
    id: 'wedding-dress',
    name: 'Wedding Dress',
    price: 99.99,
    unit: '/item'
  }, {
    id: 'formal-gown',
    name: 'Formal Gown',
    price: 49.99,
    unit: '/item'
  }, {
    id: 'leather-jacket',
    name: 'Leather Jacket',
    price: 39.99,
    unit: '/item'
  }, {
    id: 'suede-item',
    name: 'Suede Item',
    price: 34.99,
    unit: '/item'
  }, {
    id: 'stuffed-toy-s',
    name: 'Stuffed Toy (Small)',
    price: 7.99,
    unit: '/item'
  }, {
    id: 'stuffed-toy-l',
    name: 'Stuffed Toy (Large)',
    price: 12.99,
    unit: '/item'
  }, {
    id: 'bag-cleaning',
    name: 'Bag/Purse Cleaning',
    price: 24.99,
    unit: '/item'
  }, {
    id: 'hat-cleaning',
    name: 'Hat Cleaning',
    price: 14.99,
    unit: '/item'
  }]
}];
const PriceEstimatorTool = () => {
  // State to track selected quantities
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<string>(laundryCategories[0].id);
  const {
    toast
  } = useToast();

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

  // Calculate the total items count
  const totalItems = useMemo(() => {
    return Object.values(selectedItems).reduce((sum, quantity) => sum + quantity, 0);
  }, [selectedItems]);

  // Function to update item quantity
  const updateQuantity = (itemId: string, change: number) => {
    setSelectedItems(prev => {
      const currentQuantity = prev[itemId] || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      if (newQuantity === 0) {
        // Remove the item if quantity is zero
        const {
          [itemId]: _,
          ...rest
        } = prev;
        return rest;
      }
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });

    // Show a toast when adding a new item
    if (change > 0) {
      // Find item details for the toast
      let itemName = "";
      for (const category of laundryCategories) {
        const item = category.items.find(item => item.id === itemId);
        if (item) {
          itemName = item.name;
          break;
        }
      }

      // Only show toast when adding new items (not already in the cart)
      if (!selectedItems[itemId]) {
        toast({
          title: "Item added",
          description: `${itemName} added to your estimate`,
          duration: 2000
        });
      }
    }
  };

  // Reset all selections
  const resetEstimate = () => {
    setSelectedItems({});
    toast({
      title: "Estimate cleared",
      description: "All items have been removed",
      duration: 2000
    });
  };

  // Check if any items have been added
  const hasItems = Object.values(selectedItems).some(quantity => quantity > 0);

  // Function to save estimate before proceeding to booking
  const saveEstimate = () => {
    // This would typically save to localStorage or state management
    // For now, we'll just show a toast
    toast({
      title: "Estimate saved",
      description: "Your estimate has been saved for booking",
      duration: 3000
    });
  };
  return <div className="relative pb-24 md:pb-0">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column: Categories and Items */}
        <div className="flex-1">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Laundry Price Calculator</h2>
                </div>
                {hasItems && <Button variant="outline" size="sm" onClick={resetEstimate} className="text-xs">
                    Reset
                  </Button>}
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Select items and adjust quantities to calculate your estimated laundry cost.
              </p>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-6">
              {laundryCategories.map(category => <TabsTrigger key={category.id} value={category.id} className="md:text-sm text-xs my-[8px] py-[3px]">
                  {category.name}
                </TabsTrigger>)}
            </TabsList>
            
            {laundryCategories.map(category => <TabsContent key={category.id} value={category.id}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                  </div>
                  {category.description && <p className="text-muted-foreground text-sm mb-4">{category.description}</p>}
                  <div className="grid gap-4">
                    {category.items.map(item => <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <h3 className="font-medium text-sm md:text-base">{item.name}</h3>
                            <p className="text-primary font-semibold">€{item.price.toFixed(2)}{item.unit}</p>
                            {item.description && <p className="text-xs text-muted-foreground mt-1">{item.description}</p>}
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, -1)} disabled={!selectedItems[item.id]} aria-label={`Decrease quantity of ${item.name}`}>
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium text-sm">
                              {selectedItems[item.id] || 0}
                            </span>
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase quantity of ${item.name}`}>
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </Card>)}
                  </div>
                </div>
              </TabsContent>)}
          </Tabs>
        </div>
        
        {/* Right column: Summary (visible on desktop) */}
        <div className="w-full lg:w-80 hidden lg:block">
          <div className="sticky top-4">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-lg font-semibold mb-4">Price Summary</h2>
                
                {hasItems ? <div className="space-y-4">
                    <div className="space-y-2">
                      {Object.entries(selectedItems).map(([itemId, quantity]) => {
                    // Find item details
                    let itemDetails: LaundryItem | undefined;
                    for (const category of laundryCategories) {
                      const item = category.items.find(item => item.id === itemId);
                      if (item) {
                        itemDetails = item;
                        break;
                      }
                    }
                    if (!itemDetails) return null;
                    const itemTotal = itemDetails.price * quantity;
                    return <div key={itemId} className="flex justify-between text-sm">
                            <div>
                              <span>{itemDetails.name}</span>
                              <span className="text-muted-foreground ml-1">×{quantity}</span>
                            </div>
                            <span className="font-medium">€{itemTotal.toFixed(2)}</span>
                          </div>;
                  })}
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between font-semibold">
                        <span>Total ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                        <span className="text-primary">€{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Link to="/booking" onClick={saveEstimate} className="w-full">
                      <Button className="w-full gap-2" size="lg">
                        <span>Proceed to Booking</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div> : <div className="text-center py-8 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-2 opacity-40" />
                    <p>Add items to see your estimate</p>
                  </div>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Sticky Summary Bar for mobile */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 transform transition-all duration-300 z-30 lg:hidden ${hasItems ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between max-w-screen-lg mx-auto">
          <div>
            <p className="text-sm text-muted-foreground">Total ({totalItems} {totalItems === 1 ? 'item' : 'items'})</p>
            <p className="text-xl font-bold text-primary">€{totalPrice.toFixed(2)}</p>
          </div>
          <Link to="/booking" onClick={saveEstimate}>
            <Button>
              Book Service
            </Button>
          </Link>
        </div>
      </div>
    </div>;
};
export default PriceEstimatorTool;