import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const callNow = () => {
    window.location.href = "tel:+971588373992";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/971588373992", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/5c339dab-1858-4a78-a443-4d64375fdf88.webp" 
              alt="Royal City Tourism LLC Original Logo" 
              className="h-10 md:h-12 w-auto shadow-glow"
            />
            <div className="block">
              <h1 className="font-display text-lg md:text-xl font-bold text-primary">Royal City Tourism</h1>
              <p className="text-xs text-muted-foreground">L.L.C</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
            <Link to="/about" className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/about' ? 'text-primary' : ''}`}>About</Link>
            
            <Link to="/faq" className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/faq' ? 'text-primary' : ''}`}>FAQ</Link>
            <Link to="/reviews" className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/reviews' ? 'text-primary' : ''}`}>Reviews</Link>
            <Link to="/contact" className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/contact' ? 'text-primary' : ''}`}>Contact</Link>
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="call" size="sm" onClick={callNow} className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button variant="whatsapp" size="sm" onClick={openWhatsApp} className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`text-foreground hover:text-primary transition-colors font-medium px-2 ${location.pathname === '/' ? 'text-primary' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className={`text-foreground hover:text-primary transition-colors font-medium px-2 ${location.pathname === '/about' ? 'text-primary' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
              
              <Link to="/faq" className={`text-foreground hover:text-primary transition-colors font-medium px-2 ${location.pathname === '/faq' ? 'text-primary' : ''}`} onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/reviews" className={`text-foreground hover:text-primary transition-colors font-medium px-2 ${location.pathname === '/reviews' ? 'text-primary' : ''}`} onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link to="/contact" className={`text-foreground hover:text-primary transition-colors font-medium px-2 ${location.pathname === '/contact' ? 'text-primary' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="flex space-x-3 px-2 pt-4">
                <Button variant="call" size="sm" onClick={callNow} className="flex items-center gap-2 flex-1">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button variant="whatsapp" size="sm" onClick={openWhatsApp} className="flex items-center gap-2 flex-1">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;