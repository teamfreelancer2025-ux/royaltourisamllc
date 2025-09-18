import { Phone, MessageCircle, MapPin, Crown, Car, Users, Clock, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero border-t border-primary/20 relative z-50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5c339dab-1858-4a78-a443-4d64375fdf88.webp" 
                alt="Royal City Tourism LLC Original Logo" 
                className="h-12 w-auto shadow-glow"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-primary">Royal City Tourism</h3>
                <p className="text-sm text-muted-foreground">L.L.C</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Dubai's leading luxury car rental service with over 10 years of experience. 
              We provide chauffeur-driven premium vehicles for tourists and business travelers.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Premium Service</span>
              </div>
            </div>
          </div>


          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Our Services</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Car className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Chauffeur-Driven Cars</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Group Transportation</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Airport Transfers</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">24/7 Availability</span>
              </div>
            </div>
            <div className="bg-card/30 rounded-lg p-4 border border-primary/10">
              <p className="text-sm text-muted-foreground mb-2">Service Areas:</p>
              <p className="text-xs text-muted-foreground">Dubai • Abu Dhabi • Sharjah • All UAE Emirates</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Call Anytime</p>
                  <a 
                    href="tel:+971588373992" 
                    className="text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    +971 58 837 3992
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <a 
                    href="https://wa.me/971588373992" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    +971 58 837 3992
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Dubai, UAE</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons removed as requested */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Royal City Tourism L.L.C. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Dubai's Premier Luxury Car Rental Service
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>24/7 Service</span>
              <span>•</span>
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-primary/10 pt-4 mt-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
            <p className="text-[10px] text-muted-foreground/70">
              Design and developed by{" "}
              <a 
                href="https://wa.me/919489060996" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Mhd Wasim
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a href="tel:+919489060996" aria-label="Call Wasim" title="Call Wasim" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary/80 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919489060996" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Wasim" title="WhatsApp Wasim" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary/80 transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-wasim-itswasimhere----/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn Profile" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary/80 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;