import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  const callNow = () => {
    window.location.href = "tel:+971588373992";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/971588373992", "_blank");
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Contact Royal City Tourism
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Ready to book your luxury ride? Our team is available 24/7 to assist you with bookings, questions, and special requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Get In Touch</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Phone</h4>
                    <p className="text-muted-foreground mb-2 text-xs md:text-sm">Call us anytime for instant booking</p>
                    <a 
                      href="tel:+971588373992" 
                      className="text-primary font-semibold hover:text-primary/80 transition-colors text-sm md:text-base"
                    >
                      +971 58 837 3992
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">WhatsApp</h4>
                    <p className="text-muted-foreground mb-2 text-xs md:text-sm">Quick responses and instant quotes</p>
                    <a 
                      href="https://wa.me/971588373992" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:text-primary/80 transition-colors text-sm md:text-base"
                    >
                      +971 58 837 3992
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Location</h4>
                    <p className="text-muted-foreground mb-2 text-xs md:text-sm">Serving all of Dubai and UAE</p>
                    <p className="text-foreground text-sm md:text-base">Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Operating Hours</h4>
                    <p className="text-muted-foreground mb-2 text-xs md:text-sm">Always available for you</p>
                    <p className="text-foreground text-sm md:text-base">24/7 Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="bg-gradient-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-primary/20">
              <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Quick Actions</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <Button 
                  variant="call" 
                  size="lg" 
                  onClick={callNow}
                  className="flex items-center gap-3 w-full"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={openWhatsApp}
                  className="flex items-center gap-3 w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Service Areas & Features */}
          <div className="space-y-6 md:space-y-8">
            <Card className="bg-gradient-card border border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  Service Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm md:text-base">Dubai Areas</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Dubai Marina</li>
                      <li>• Downtown Dubai</li>
                      <li>• Jumeirah Beach</li>
                      <li>• Dubai Mall</li>
                      <li>• Palm Jumeirah</li>
                      <li>• Dubai Airport</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm md:text-base">Other Emirates</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Abu Dhabi</li>
                      <li>• Sharjah</li>
                      <li>• Ajman</li>
                      <li>• Ras Al Khaimah</li>
                      <li>• Fujairah</li>
                      <li>• Umm Al Quwain</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">Professional chauffeurs with 10+ years experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">200+ luxury vehicles updated monthly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">24/7 customer support and service</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">Competitive rates with no hidden charges</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">Fully insured vehicles and licensed drivers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-16">
          <div className="bg-gradient-luxury rounded-xl md:rounded-3xl p-6 md:p-8 text-primary-foreground max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Book Your Luxury Ride?</h3>
            <p className="text-primary-foreground/80 mb-6 md:mb-8 text-base md:text-lg">
              Experience Dubai in ultimate comfort and style. Contact us now for instant booking and competitive rates.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={callNow}
                className="bg-white text-primary hover:bg-white/90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +971 58 837 3992
              </Button>
              <Button 
                variant="whatsapp" 
                size="xl" 
                onClick={openWhatsApp}
                className="bg-gradient-primary text-primary-foreground hover:bg-gradient-glossy"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;