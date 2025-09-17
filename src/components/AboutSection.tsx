import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Star, Shield, Users, Clock, Award } from "lucide-react";
import dubaiLuxuryDesert from "@/assets/dubai-luxury-desert.jpg";
import luxuryCarsMarina from "@/assets/luxury-cars-marina.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-8 border border-primary/20">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">About Royal City Tourism</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
            Why Choose Royal City Tourism?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are one of Dubai's leading luxury car rental companies, providing chauffeur-driven premium vehicles 
            for tourists and businessmen visiting Dubai. Experience the difference of true luxury service.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
            Best City Tour Packages Across UAE: Explore Dubai, Abu Dhabi, and Sharjah with all-inclusive deals and hassle-free ticket booking.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Left - Key Points */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-gradient-card rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-primary/20 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Luxury Fleet Selection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We maintain premium luxury vehicles and update our roster with new models every month. 
                      Choose your dream cars like Lexus, Rolls Royce, Mercedes, BMW at competitive prices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-primary/20 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Trusted Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With over 10 years of experience in travel and tourism, we have many returning customers 
                      who trust us and choose our rental car service every time they visit Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-primary/20 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">World-Class Service</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We pride ourselves on addressing every individual customer and providing world-class service 
                      that brings smiles to our customers' faces when they return home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Logo & CTA */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-gradient-luxury rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-center shadow-luxury relative overflow-hidden">
              {/* Background decorative dots */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <div className="text-primary-foreground relative z-10">
                {/* Logo with square background */}
                <div className="inline-flex items-center justify-center w-24 lg:w-32 h-24 lg:h-32 bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/30 mb-4 lg:mb-6">
                  <img 
                    src="/lovable-uploads/c6014215-e9f4-4713-bb60-c1db1db4bc6f.png" 
                    alt="Royal City Tourism Logo" 
                    className="w-16 lg:w-24 h-16 lg:h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Our Specialization</h3>
                <p className="text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                  Chauffeur-driven and Limousine rental services are what we're known for. 
                  We are your one-stop solution for all travel needs in UAE.
                </p>
                
                <div className="grid grid-cols-3 gap-3 lg:gap-6 mb-6 lg:mb-8">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold mb-1">1000+</div>
                    <div className="text-xs lg:text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold mb-1">95%</div>
                    <div className="text-xs lg:text-sm opacity-90">Return Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold mb-1">5.0</div>
                    <div className="text-xs lg:text-sm opacity-90">Rating</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Bottom Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-gradient-card rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary/20 shadow-card text-center">
            <Award className="w-8 lg:w-12 h-8 lg:h-12 text-primary mx-auto mb-3 lg:mb-4" />
            <h4 className="text-sm lg:text-lg font-bold text-foreground mb-1 lg:mb-2">Licensed & Insured</h4>
            <p className="text-xs lg:text-sm text-muted-foreground">Fully compliant with UAE regulations</p>
          </div>
          
          <div className="bg-gradient-card rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary/20 shadow-card text-center">
            <Clock className="w-8 lg:w-12 h-8 lg:h-12 text-primary mx-auto mb-3 lg:mb-4" />
            <h4 className="text-sm lg:text-lg font-bold text-foreground mb-1 lg:mb-2">Flexible Booking</h4>
            <p className="text-xs lg:text-sm text-muted-foreground">Easy scheduling and reservation system</p>
          </div>
          
          <div className="bg-gradient-card rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary/20 shadow-card text-center">
            <Users className="w-8 lg:w-12 h-8 lg:h-12 text-primary mx-auto mb-3 lg:mb-4" />
            <h4 className="text-sm lg:text-lg font-bold text-foreground mb-1 lg:mb-2">Professional Chauffeurs</h4>
            <p className="text-xs lg:text-sm text-muted-foreground">Experienced and courteous drivers</p>
          </div>
          
          <div className="bg-gradient-card rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary/20 shadow-card text-center">
            <Shield className="w-8 lg:w-12 h-8 lg:h-12 text-primary mx-auto mb-3 lg:mb-4" />
            <h4 className="text-sm lg:text-lg font-bold text-foreground mb-1 lg:mb-2">Safety First</h4>
            <p className="text-xs lg:text-sm text-muted-foreground">Highest safety standards maintained</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;