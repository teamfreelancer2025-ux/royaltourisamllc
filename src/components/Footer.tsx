import { Phone, MessageCircle, MapPin, Crown, Car, Users, Clock, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO_CONFIG } from "../config/seo";

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
                src="/logo-premium.webp" 
                alt="Royal City Tourism LLC Original Logo" 
                className="h-12 w-auto shadow-glow"
                width="120" height="48"
                loading="lazy"
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


          {/* Social Media Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
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
              <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5"><path stroke="none" d="M4 11v6H2V9h2V4H2V2h3.5a2.5 2.5 0 012.5 2.5v1H9.5a2.5 2.5 0 012.5 2.5v2h2.5a2.5 2.5 0 012.5 2.5v6H15v-6a2.5 2.5 0 00-2.5-2.5h-2V7.5a2.5 2.5 0 00-2.5-2.5H4v-1h3.5A3.5 3.5 0 0011 2h0.5a3.5 3.5 0 003.5 3.5v1H18v-1a3.5 3.5 0 00-3.5-3.5h-1a3.5 3.5 0 00-3.5 3.5V6H4z"></path></svg>
              </a>
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
                  <p className="text-sm text-muted-foreground">{SEO_CONFIG.businessAddress}</p>
                </div>
              </div>
            </div>
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