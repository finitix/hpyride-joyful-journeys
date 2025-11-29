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
import MobileLanding from "./pages/mobile/MobileLanding";
import MobileAbout from "./pages/mobile/MobileAbout";
import MobileFeatures from "./pages/mobile/MobileFeatures";
import MobileServices from "./pages/mobile/MobileServices";
import MobileHowItWorks from "./pages/mobile/MobileHowItWorks";
import MobileSafety from "./pages/mobile/MobileSafety";
import MobileFAQs from "./pages/mobile/MobileFAQs";

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
          <Route path="/mobile" element={<MobileLanding />} />
          <Route path="/mobile/about" element={<MobileAbout />} />
          <Route path="/mobile/features" element={<MobileFeatures />} />
          <Route path="/mobile/services" element={<MobileServices />} />
          <Route path="/mobile/how-it-works" element={<MobileHowItWorks />} />
          <Route path="/mobile/safety" element={<MobileSafety />} />
          <Route path="/mobile/faqs" element={<MobileFAQs />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
