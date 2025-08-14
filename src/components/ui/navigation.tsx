import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-ocean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e7716581-2732-401f-9f91-75bcd2dfc5ce.png" 
              alt="Al Manwari International Logo" 
              className="h-12 w-12"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
                AL-MANWARI
              </div>
              <div className="text-sm text-muted-foreground">INTERNATIONAL</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActivePath(item.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-ocean rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+968 9551 1144</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@almanwari.com</span>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    isActivePath(item.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-border mt-4">
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-4 w-4" />
                    <span>+968 9551 1144</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@almanwari.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;