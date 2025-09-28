import { lazy, Suspense } from 'react';
import HeroSection from "@/components/HeroSection";
import { SEOOptimizer } from '@/components/SEOOptimizer';
import { DUBAI_KEYWORDS, SEO_CONFIG, generateBreadcrumbSchema } from '@/utils/seo';

const RentACarSection = lazy(() => import("@/components/RentACarSection"));
const FifteenSeaterSection = lazy(() => import("@/components/FifteenSeaterSection"));

const Home = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SEO_CONFIG.siteUrl }
  ]);
  
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <SEOOptimizer
        title="Luxury Car Rental Dubai with Driver | Royal City Tourism"
        description="Experience the best luxury car rental and chauffeur services in Dubai with Royal City Tourism. Premium sedans, SUVs, and vans available 24/7."
        keywords={[
          ...DUBAI_KEYWORDS.primary,
          ...DUBAI_KEYWORDS.secondary,
          "car rental Dubai",
          "chauffeur Dubai",
          "luxury cars Dubai",
          "Royal City Tourism"
        ]}
        canonicalUrl={SEO_CONFIG.siteUrl}
        structuredData={[breadcrumbSchema]}
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