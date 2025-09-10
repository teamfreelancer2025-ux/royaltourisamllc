import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import Dubai images
import dubaiHero from "@/assets/dubai-luxury-hero.jpg";
import dubaiMarina from "@/assets/dubai-marina-night.jpg";
import dubaiShopping from "@/assets/dubai-shopping-luxury.jpg";
import dubaiDesert from "@/assets/dubai-desert-luxury.jpg";
import dubaiPalm from "@/assets/dubai-palm-aerial.jpg";
import dubaiAtlantis from "@/assets/dubai-atlantis-luxury.jpg";
import dubaiGoldSouk from "@/assets/dubai-gold-souk.jpg";
import dubaiBurjNight from "@/assets/dubai-burj-khalifa-night.jpg";
import dubaiFountain from "@/assets/dubai-fountain-show.jpg";
import dubaiMallLux from "@/assets/dubai-mall-luxury.jpg";
import dubaiLuxHotel from "@/assets/dubai-luxury-hotel.jpg";

const dubaiSlides = [
  {
    image: dubaiHero,
    title: "Burj Khalifa Luxury Experience",
    description: "Experience Dubai's iconic skyline with our premium vehicle fleet",
    tag: "City Tours",
    action: "Book City Tour"
  },
  {
    image: dubaiBurjNight,
    title: "Burj Khalifa Night Magic",
    description: "Witness the world's tallest building illuminated in luxury comfort",
    tag: "Night Tours",
    action: "Book Night Tour"
  },
  {
    image: dubaiFountain,
    title: "Dubai Fountain Spectacular",
    description: "Premium front-row access to the world's largest fountain show",
    tag: "VIP Experience",
    action: "Book VIP Experience"
  },
  {
    image: dubaiPalm,
    title: "Palm Jumeirah Paradise",
    description: "Luxury resort transfers to Dubai's most exclusive destinations",
    tag: "Resort Tours",
    action: "Book Resort Tour"
  },
  {
    image: dubaiAtlantis,
    title: "Atlantis Dubai Premium",
    description: "VIP transfers to Dubai's most luxurious hotels and attractions",
    tag: "VIP Tours",
    action: "Book VIP Tour"
  },
  {
    image: dubaiMarina,
    title: "Dubai Marina Nights",
    description: "Explore the glittering Dubai Marina in ultimate comfort and style",
    tag: "Marina Tours",
    action: "Book Marina Tour"
  },
  {
    image: dubaiMallLux,
    title: "Dubai Mall Luxury Shopping",
    description: "Personal chauffeur service to the world's largest shopping destination",
    tag: "Shopping Tours",
    action: "Book Shopping Tour"
  },
  {
    image: dubaiLuxHotel,
    title: "5-Star Hotel Transfers",
    description: "Arrive in style at Dubai's most prestigious luxury hotels",
    tag: "Hotel Transfers",
    action: "Book Transfer"
  },
  {
    image: dubaiShopping,
    title: "Premium Shopping Experience",
    description: "Visit Dubai Mall and luxury destinations with personal chauffeur",
    tag: "Shopping Tours",
    action: "Book Shopping Tour"
  },
  {
    image: dubaiGoldSouk,
    title: "Gold Souk Heritage",
    description: "Discover Dubai's traditional markets with modern luxury transport",
    tag: "Heritage Tours",
    action: "Book Heritage Tour"
  },
  {
    image: dubaiDesert,
    title: "Desert Safari Adventure",
    description: "Luxury desert experiences with premium 4WD vehicles",
    tag: "Desert Tours",
    action: "Book Desert Tour"
  }
];

const DubaiCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dubaiSlides.length);
    }, 6000); // Increased to 6 seconds for more slides

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dubaiSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dubaiSlides.length) % dubaiSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-luxury group touch-manipulation"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Carousel */}
      <div className="relative w-full h-full">
        {dubaiSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-luxury ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-end p-4 sm:p-6 lg:p-8">
              <div className="max-w-xs sm:max-w-md animate-slide-up">
                {/* Tag */}
                <div className="inline-block bg-gradient-glossy text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 shadow-glossy">
                  {slide.tag}
                </div>
                
                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                  {slide.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Button */}
                <Button 
                  variant="matte" 
                  size="sm"
                  className="backdrop-blur-sm hover:backdrop-blur-md text-xs sm:text-sm w-full sm:w-auto"
                  onClick={() => window.open("https://wa.me/971503441993?text=" + encodeURIComponent(`Hi! I'm interested in ${slide.action} - ${slide.title}. Can you provide more details?`), "_blank")}
                >
                  {slide.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:flex absolute inset-0 items-center justify-between p-4 pointer-events-none">
        <Button
          variant="matte"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          variant="matte"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Play/Pause Control - Hidden on mobile */}
      <div className="hidden md:block absolute top-4 right-4">
        <Button
          variant="matte"
          size="icon"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>

      {/* Slide Indicators - Optimized for mobile */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {dubaiSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide
                ? 'bg-primary shadow-glow scale-110' 
                : 'bg-muted hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-muted/30">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / dubaiSlides.length) * 100}%` }}
        />
      </div>

      {/* Touch/Swipe indicators for mobile */}
      <div className="md:hidden absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground/60 bg-background/20 backdrop-blur-sm px-2 py-1 rounded">
        Swipe to navigate
      </div>
    </div>
  );
};

export default DubaiCarousel;