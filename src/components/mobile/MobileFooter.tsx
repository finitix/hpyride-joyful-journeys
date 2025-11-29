import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-6 space-y-6">
      {/* Logo */}
      <div className="text-center">
        <h3 className="text-xl font-bold gradient-text">HpyRide.com</h3>
        <p className="text-sm text-muted-foreground mt-1">Built for Every Journey</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-2">
          <Link to="/mobile/about" className="block text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="/mobile/services" className="block text-muted-foreground hover:text-foreground">
            Services
          </Link>
        </div>
        <div className="space-y-2">
          <Link to="/contact" className="block text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link to="/mobile/faqs" className="block text-muted-foreground hover:text-foreground">
            FAQs
          </Link>
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex justify-center gap-4 text-xs text-muted-foreground">
        <a href="#" className="hover:text-foreground">Terms</a>
        <span>•</span>
        <a href="#" className="hover:text-foreground">Privacy</a>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-muted-foreground border-t border-border pt-4">
        © 2025 HPYRIDE — Built for Every Journey
      </div>
    </footer>
  );
};

export default MobileFooter;
