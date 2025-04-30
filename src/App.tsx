
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import LaundryServiceList from "./pages/LaundryServiceList";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import FAQ from "./pages/FAQ";
import Account from "./pages/Account";
import OrderTracking from "./pages/OrderTracking";
import NotFound from "./pages/NotFound";
import PriceEstimator from "./pages/PriceEstimator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/wash-drop-now">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/laundry-services" element={<LaundryServiceList />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/price-estimator" element={<PriceEstimator />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/account" element={<Account />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
