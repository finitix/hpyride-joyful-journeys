import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Vision from "./pages/Vision";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MobileOnboarding from "./pages/mobile/MobileOnboarding";
import MobileBook from "./pages/mobile/MobileBook";
import MobileOffers from "./pages/mobile/MobileOffers";
import MobileProfile from "./pages/mobile/MobileProfile";
import MobileLogin from "./pages/mobile/MobileLogin";
import MobileSupport from "./pages/mobile/MobileSupport";
import MobileRide from "./pages/mobile/MobileRide";
import MobileRent from "./pages/mobile/MobileRent";
import MobilePool from "./pages/mobile/MobilePool";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Mobile Routes */}
          <Route path="/mobile/onboarding" element={<MobileOnboarding />} />
          <Route path="/mobile/book" element={<MobileBook />} />
          <Route path="/mobile/offers" element={<MobileOffers />} />
          <Route path="/mobile/profile" element={<MobileProfile />} />
          <Route path="/mobile/login" element={<MobileLogin />} />
          <Route path="/mobile/support" element={<MobileSupport />} />
          <Route path="/mobile/ride" element={<MobileRide />} />
          <Route path="/mobile/rent" element={<MobileRent />} />
          <Route path="/mobile/pool" element={<MobilePool />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
