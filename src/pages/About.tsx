import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>About Royal City Tourism LLC - Dubai's Premier Car Rental Company Since 2014</title>
        <meta 
          name="description" 
          content="Royal City Tourism LLC - Dubai's trusted luxury car rental company since 2014. 200+ premium vehicles, professional chauffeurs, 24/7 service. Licensed & insured operations across UAE." 
        />
        <meta name="keywords" content="about Royal City Tourism LLC, Dubai car rental company since 2014, luxury car rental history Dubai, licensed car rental UAE, premium chauffeur service Dubai, professional car rental company" />
        <link rel="canonical" href="/about" />
        
        {/* About Page Open Graph */}
        <meta property="og:title" content="About Royal City Tourism LLC - Dubai's Premier Car Rental" />
        <meta property="og:description" content="Discover our story: 10+ years of excellence in Dubai's luxury car rental industry. Trusted by thousands of satisfied customers." />
        <meta property="og:url" content="https://royalcitytourism.com/about" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Royal City Tourism LLC",
          "alternateName": "Royal City Tourism",
          "description": "Premier luxury car rental company in Dubai, UAE, operating since 2014",
          "url": "https://royalcitytourism.com",
          "logo": "https://royalcitytourism.com/src/assets/logo-premium.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971503441993",
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          },
          "foundingDate": "2014",
          "numberOfEmployees": "50-100",
          "industry": "Car Rental Services",
          "slogan": "Experience Dubai in Ultimate Luxury"
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
        <section className="py-20 bg-gradient-section-alt backdrop-blur-sm min-h-screen">
          <div className="container mx-auto px-4">
            <AboutSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;