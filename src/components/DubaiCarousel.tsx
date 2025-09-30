import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import Dubai images - SEO optimized for hotel transfers
const dubaiSlides = [
  {
    image: "/dubai-luxury-hero.webp",
    title: "Luxury Car Rental Dubai",
    description: "Experience the ultimate in luxury car rentals with chauffeur service in Dubai. We offer premium vehicles for all your needs.",
    tag: "Luxury Cars",
    action: "Book Now"
  },
  {
    image: "/carousel-images/dubai-burj-khalifa-night.webp", 
    title: "Burj Khalifa Tour",
    description: "Visit the iconic Burj Khalifa with our exclusive tours. Enjoy breathtaking views of Dubai's skyline.",
    tag: "City Tours",
    action: "Explore Tours"
  },
  {
    image: "/carousel-images/dubai-fountain-show.webp", 
    title: "Dubai Fountain Show",
    description: "Witness the spectacular Dubai Fountain Show, a mesmerizing water, music, and light spectacle.",
    tag: "Attractions",
    action: "View Details"
  },
  {
    image: "/carousel-images/dubai-palm-luxury-resort-transfers.webp", 
    title: "Palm Jumeirah Transfers",
    description: "Seamless transfers to and from Palm Jumeirah's luxury resorts with our premium chauffeur service.",
    tag: "Transfers",
    action: "Book Transfer"
  },
  {
    image: "/carousel-images/dubai-atlantis-vip-transfers.webp", 
    title: "Atlantis The Palm VIP",
    description: "Enjoy VIP access and luxury transfers to Atlantis, The Palm. Experience world-class hospitality.",
    tag: "VIP Experience",
    action: "Book VIP"
  },
  {
    image: "/carousel-images/dubai-marina-night.webp", 
    title: "Dubai Marina Night",
    description: "Experience the vibrant nightlife of Dubai Marina with our exclusive tours and transfers.",
    tag: "Nightlife",
    action: "Explore Now"
  },
  {
    image: "/carousel-images/dubai-mall-luxury.webp", 
    title: "Dubai Mall Shopping",
    description: "Indulge in a luxury shopping experience at The Dubai Mall with personal chauffeur service.",
    tag: "Shopping",
    action: "Shop Now"
  },
  {
    image: "/carousel-images/dubai-luxury-hotel-transfers.webp", 
    title: "Luxury Hotel Transfers",
    description: "Arrive in style at Dubai's most prestigious hotels with our premium transfer services.",
    tag: "Hotel Transfers",
    action: "Book Transfer"
  },
  {
    image: "/carousel-images/dubai-shopping-luxury.webp", 
    title: "Luxury Shopping Dubai",
    description: "Discover the best luxury shopping destinations in Dubai with our convenient chauffeur services.",
    tag: "Shopping",
    action: "Explore Shops"
  },
  {
    image: "/carousel-images/dubai-gold-souk.webp", 
    title: "Dubai Gold Souk",
    description: "Explore the traditional charm of Dubai's Gold Souk with our guided tours and transfers.",
    tag: "Culture",
    action: "Discover History"
  },
  {
    image: "/carousel-images/dubai-desert-luxury.webp", 
    title: "Luxury Desert Safari",
    description: "Experience an unforgettable luxury desert safari adventure with private transfers and exclusive activities.",
    tag: "Desert Tours",
    action: "Book Safari"
  }
];

const DubaiCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying || dubaiSlides.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dubaiSlides.length);
    }, 6000); // Increased to 6 seconds for more slides

    return () => clearInterval(timer);
  }, [isAutoPlaying, dubaiSlides.length]);

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
            {/* SEO-Optimized Image */}
            <img
              src={slide.image}
              alt={slide.title}
              width="1200"
              height="630"
              fetchpriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-end p-4 sm:p-6 lg:p-8">
              <div className="max-w-xs sm:max-w-md animate-slide-up">
                {/* Tag */}
                <div className="inline-block bg-gradient-glossy text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 shadow-glossy">
                  {slide.tag}
                </div>
                
                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
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
                  className="backdrop-blur-sm hover:backdrop-blur-md text-sm w-full sm:w-auto"
                  onClick={() => window.open("https://wa.me/971588373992?text=" + encodeURIComponent(`Hi! I'm interested in ${slide.action} - ${slide.title}. Can you provide more details?`), "_blank")}
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
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation flex items-center justify-center ${
              index === currentSlide
                ? 'bg-primary shadow-glow scale-110' 
                : 'bg-muted hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ><span className="sr-only">Go to slide ${index + 1}</span></button>
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