import ReviewsSection from "@/components/ReviewsSection";
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '../config/seo';
import { generateBreadcrumbSchema } from '../utils/seo';

const Reviews = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SEO_CONFIG.baseUrl },
    { name: "Reviews", url: `${SEO_CONFIG.baseUrl}/reviews` }
  ]);

  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <SEOHead
        title="Customer Reviews | Royal City Tourism"
        description="Read reviews from our satisfied customers and see why we are the top choice for luxury transport in Dubai."
        canonicalUrl={`${SEO_CONFIG.baseUrl}/reviews`}
        ogImage={`${SEO_CONFIG.baseUrl}/assets/images/og-image-reviews.jpg`}
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
        <section className="py-20 bg-gradient-matte-deep backdrop-blur-sm min-h-screen">
          <div className="container mx-auto px-4">
            <ReviewsSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reviews;