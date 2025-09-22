import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import RentACarSection from "@/components/RentACarSection";

import FifteenSeaterSection from "@/components/FifteenSeaterSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>Dubai Car Rental with Driver | Royal City Tourism UAE</title>
        <meta 
          name="description" 
          content="Luxury car rental in Dubai with chauffeur. Mercedes S-Class, BMW 7 Series, Toyota Hiace. 24/7 service across UAE. Book now." 
        />
        <meta name="keywords" content="Dubai car rental with driver, luxury car rental Dubai, chauffeur service Dubai, Mercedes S-Class rental Dubai, BMW rental Dubai, Toyota Hiace rental, car with driver Dubai, premium vehicle rental UAE, luxury transportation Dubai" />
        <link rel="canonical" href="https://royalcitytourism.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Dubai Car Rental with Driver | Royal City Tourism UAE" />
        <meta property="og:description" content="Experience Dubai in luxury. Premium car rental with chauffeur service. Mercedes, BMW, Toyota fleet available 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://royalcitytourism.com" />
        <meta property="og:image" content="https://royalcitytourism.com/dubai-luxury-hero.webp" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@royalcitytourism" />
        <meta name="twitter:title" content="Dubai Car Rental with Driver | Royal City Tourism UAE" />
        <meta name="twitter:description" content="Luxury car rental Dubai with professional chauffeur. Mercedes, BMW, Toyota fleet. Book now!" />
        <meta name="twitter:image" content="https://royalcitytourism.com/dubai-luxury-hero.webp" />
        
        {/* Additional SEO Meta */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="geo.position" content="25.276987;55.296249" />
        <meta name="ICBM" content="25.276987, 55.296249" />
        <meta name="language" content="EN" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CarRental",
          "name": "Royal City Tourism L.L.C",
          "description": "Luxury car rental in Dubai with chauffeur. Mercedes S-Class, BMW 7 Series, Toyota Hiace. 24/7 service across UAE. Book now.",
          "url": "https://royalcitytourism.com",
          "telephone": "+971 58 837 3992",
          "email": "info@royalcitytourism.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.276987",
            "longitude": "55.296249"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "$$$",
          "areaServed": ["Dubai", "Abu Dhabi", "Sharjah"],
          "serviceType": "Luxury Car Rental with Professional Chauffeur Service",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Car Rental Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car", // Changed from Product to Car
                  "name": "Mercedes S-Class Rental with Driver",
                  "description": "Luxury Mercedes S-Class rental with professional chauffeur in Dubai",
                  "offers": {
                    "@type": "Offer",
                    "price": "350", // Placeholder price
                    "priceCurrency": "AED",
                    "availability": "InStock"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car", // Changed from Product to Car
                  "name": "BMW 7 Series Rental with Driver",
                  "description": "Premium BMW 7 Series rental with professional chauffeur in Dubai",
                  "offers": {
                    "@type": "Offer",
                    "price": "350", // Placeholder price
                    "priceCurrency": "AED",
                    "availability": "InStock"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car", // Changed from Product to Car
                  "name": "Toyota Hiace Van Rental",
                  "description": "Spacious Toyota Hiace van rental for group transportation in Dubai",
                  "offers": {
                    "@type": "Offer",
                    "price": "300", // Placeholder price
                    "priceCurrency": "AED",
                    "availability": "InStock"
                  }
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "Organization",
              "name": "Royal City Tourism L.L.C"
            },
            "ratingValue": "4.9",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
        </script>
      </Helmet>

      {/* Space Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-twinkle"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary-glow rounded-full animate-twinkle-delayed"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float"></div>
      </div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section with H1 for SEO */}
        <section className="min-h-screen -mt-20" aria-label="Dubai Car Rental Hero Section">
          <h1 className="sr-only">Dubai Car Rental with Driver - Royal City Tourism LLC - Premium Luxury Chauffeur Service</h1>
          <HeroSection />
        </section>
        
        {/* All Car Details Sections */}
        <section className="py-20 bg-gradient-matte-deep">
          <div className="container mx-auto px-4">
            <RentACarSection />
          </div>
        </section>
        
        {/* Vehicle Sections */}
        <section className="py-20 bg-gradient-section backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <FifteenSeaterSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;