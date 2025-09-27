import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from 'react';
import HeroSection from "@/components/HeroSection";

const RentACarSection = lazy(() => import("@/components/RentACarSection"));
const FifteenSeaterSection = lazy(() => import("@/components/FifteenSeaterSection"));

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>Luxury Car Rental & Chauffeur Services in Dubai | Royal City</title>
        <meta 
          name="description" 
          content="Top luxury car rental & chauffeur services in Dubai. Explore sightseeing with our premium fleet for tourism, travel, and tours." 
        />
        <link rel="canonical" href="https://royalcitytourism.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Luxury Car Rental & Chauffeur Services in Dubai | Royal City" />
        <meta property="og:description" content="Top luxury car rental & chauffeur services in Dubai. Explore sightseeing with our premium fleet for tourism, travel, and tours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://royalcitytourism.com" />
        <meta property="og:image" content="https://royalcitytourism.com/dubai-luxury-hero.webp" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@royalcitytourism" />
        <meta name="twitter:title" content="Luxury Car Rental & Chauffeur Services in Dubai | Royal City" />
        <meta name="twitter:description" content="Top luxury car rental & chauffeur services in Dubai. Explore sightseeing with our premium fleet for tourism, travel, and tours." />
        <meta name="twitter:image" content="https://royalcitytourism.com/dubai-luxury-hero.webp" />
        
        {/* Additional SEO Meta */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="geo.position" content="25.276987;55.296249" />
        <meta name="ICBM" content="25.276987, 55.296249" />
        <meta name="language" content="EN" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
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
          <h1 className="sr-only">Luxury Dubai Car Rentals & Chauffeur Services</h1>
          <HeroSection />
        </section>
        
        {/* All Car Details Sections */}
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </main>
    </div>
  );
};

export default Home;