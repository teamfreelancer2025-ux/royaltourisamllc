import ContactSection from "@/components/ContactSection";
import { SEOOptimizer } from '@/components/SEOOptimizer';
import { DUBAI_KEYWORDS, SEO_CONFIG, generateBreadcrumbSchema } from '@/utils/seo';

const Contact = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SEO_CONFIG.siteUrl },
    { name: "Contact Us", url: `${SEO_CONFIG.siteUrl}/contact` }
  ]);

  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <SEOOptimizer
        title="Contact Royal City Tourism | Luxury Car Rental & Chauffeur Dubai"
        description="Get in touch with Royal City Tourism for luxury car rentals and chauffeur services in Dubai. Contact us for inquiries, bookings, and 24/7 support."
        keywords={[
          ...DUBAI_KEYWORDS.primary,
          "contact Royal City Tourism",
          "Dubai car rental contact number",
          "chauffeur service booking Dubai"
        ]}
        canonicalUrl={`${SEO_CONFIG.siteUrl}/contact`}
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
        <section className="py-20 bg-gradient-section-alt min-h-screen">
          <div className="container mx-auto px-4">
            <ContactSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;