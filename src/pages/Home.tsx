import { lazy, Suspense } from 'react';
import HeroSection from "@/components/HeroSection";
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '../config/seo';
import { 
  generateBreadcrumbSchema, 
  generateOrganizationSchema,
  generateCarRentalSchema 
} from '../utils/seo';

const RentACarSection = lazy(() => import("@/components/RentACarSection"));
const FifteenSeaterSection = lazy(() => import("@/components/FifteenSeaterSection"));

const Home = () => {
  const schemas = [
    generateBreadcrumbSchema([{ name: "Home", url: SEO_CONFIG.baseUrl }]),
    generateOrganizationSchema(),
    generateCarRentalSchema([])
  ];
  
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <SEOHead
        title="Luxury Car Rental & Chauffeur Service in Dubai | Royal City Tourism"
        description="Experience Dubai's finest luxury car rental and chauffeur services. Professional drivers, premium fleet including Mercedes S-Class, BMW 7 Series, and group vehicles. Available 24/7 across UAE."
        canonicalUrl={SEO_CONFIG.baseUrl}
        ogImage={`${SEO_CONFIG.baseUrl}/dubai-luxury-hero.webp`}
        schemas={schemas}
      />

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
        {/* Hero Section */}
        <section className="min-h-screen -mt-20">
          <HeroSection />
        </section>
        
        {/* About Us Section */}
        <section className="py-20 bg-gradient-matte-deep">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Dubai's Premier Luxury Car Service</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
              <p>
                Welcome to Royal City Tourism, your trusted partner for luxury transportation in Dubai and across the UAE. 
                Since 2014, we've been delivering exceptional chauffeur services with our fleet of over 200 premium vehicles.
              </p>
              <p>
                Our professional chauffeurs are trained to provide the highest level of service, ensuring your journey is 
                comfortable, safe, and punctual. Whether you need airport transfers, corporate travel, or special event 
                transportation, we're available 24/7 to serve you.
              </p>
              <p>
                With a perfect blend of luxury and reliability, we cater to both individual travelers and large groups. 
                Our diverse fleet includes prestigious vehicles like the Mercedes S-Class and BMW 7 Series, as well as 
                spacious options like the Mercedes Sprinter and Toyota Hiace for group transportation.
              </p>
            </div>
          </div>
        </section>
        
        {/* All Car Details Sections */}
        <Suspense fallback={<div>Loading...</div>}>
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