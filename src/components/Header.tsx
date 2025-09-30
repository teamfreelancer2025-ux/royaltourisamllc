import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { SEO_CONFIG } from "../config/seo";


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
              src="/logo-premium.webp" 
              alt="Royal City Tourism LLC Original Logo" 
              className="h-10 md:h-12 w-auto shadow-glow"
              width="100" height="40"
              loading="eager"
            />
            <div className="block">
              <h2 className="font-display text-lg md:text-xl font-bold text-primary">Royal City Tourism</h2>
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
              {/* Social Media Links */}
              <div className="flex items-center gap-4 mt-6">
                <a href={SEO_CONFIG.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href={SEO_CONFIG.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href={SEO_CONFIG.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.04 2.13C21.36 2.41 20.6 2.58 19.8 2.65A4.47 4.47 0 0021.6 1.05a8.21 8.21 0 01-2.34 1.34A4.45 4.45 0 0015.42 0c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.1 1.04A12.6 12.6 0 013.75 1.51a4.5 4.5 0 001.4 6 4.47 4.47 0 01-2.02-.55v.06c0 2.18 1.55 4 3.6 4.42a4.48 4.48 0 01-2.03.08c.57 1.8 2.22 3.1 4.17 3.13C7.54 18.06 6 18.5 4.5 18.5c-.88 0-1.72-.05-2.54-.15.93 1.03 2.14 1.8 3.56 2.24A12.7 12.7 0 0022.5 7.5c0-.18 0-.36-.01-.54a8.94 8.94 0 002.16-2.22z"></path></svg>
                </a>
                <a href={SEO_CONFIG.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg>
                </a>
                <a href={SEO_CONFIG.socialMedia.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C2 8 2 12 2 12s0 4 1.46 5.58a2.78 2.78 0 001.94 2C7.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C22 16 22 12 22 12s0-4-1.46-5.58zM10 15.34V8.66l5.96 3.34-5.96 3.34z"></path></svg>
                </a>
                <a href={SEO_CONFIG.socialMedia.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5"><path stroke="none" d="M4 11v6H2V9h2V4H2V2h3.5a2.5 2.5 0 012.5 2.5v1H9.5a2.5 2.5 0 012.5 2.5v2h2.5a2.5 2.5 0 012.5 2.5v6H15v-6a2.5 2.5 0 00-2.5-2.5h-2V7.5a2.5 2.5 0 00-2.5-2.5H4v-1h3.5A3.5 3.5 0 0011 2h0.5a3.5 3.5 0 003.5 3.5v1H18v-1a3.5 3.5 0 00-3.5-3.5h-1a3.5 3.5 0 00-3.5 3.5V6H4z"></path></svg>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;