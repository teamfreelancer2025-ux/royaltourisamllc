import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import DubaiCarousel from "@/components/DubaiCarousel";

const HeroSection = () => {
  const callNow = () => {
    window.location.href = "tel:+971588373992";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/971588373992", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background/95 to-background pt-16 md:pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 bg-primary/15 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/10 rounded-full blur-sm animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content - Photos and CTAs */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            
            {/* CTA Content - First on mobile */}
            <div className="w-full space-y-4 sm:space-y-6 order-1 lg:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center lg:text-left">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Experience Dubai in Luxury with Royal City Tourism
                </h1>
                <p className="text-muted-foreground mb-8 text-lg max-w-lg mx-auto lg:mx-0">
                  Your premier partner for luxury car rentals and chauffeur services in Dubai and across the UAE.
                </p>
              </div>

              <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                <Button 
                  variant="glossy" 
                  size="xl" 
                  onClick={openWhatsApp}
                  className="flex items-center gap-3 w-full justify-center min-h-[52px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  GET INSTANT QUOTE ON WHATSAPP
                </Button>
                <Button 
                  variant="matte" 
                  size="xl" 
                  onClick={callNow}
                  className="flex items-center gap-3 w-full justify-center backdrop-blur-sm min-h-[52px]"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW: +971 58 837 3992
                </Button>
              </div>
            </div>

            {/* Dubai Photos - Second on mobile */}
            <div className="w-full order-2 lg:order-1 animate-slide-up">
              <DubaiCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;