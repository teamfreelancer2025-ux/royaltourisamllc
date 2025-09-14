import { useEffect } from 'react';

// Technical SEO enhancements component
export const TechnicalSEO = () => {
  useEffect(() => {
    // Performance optimization script loader
    const script = document.createElement('script');
    script.src = '/performance-optimizer.js';
    script.async = true;
    document.body.appendChild(script);

    // Google Analytics script loader (replace GA_MEASUREMENT_ID with actual ID)
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(gaScript);

    const gaConfigScript = document.createElement('script');
    gaConfigScript.src = '/google-analytics.js';
    document.head.appendChild(gaConfigScript);

    // Add critical resource hints
    const addResourceHint = (rel: string, href: string, as?: string) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (as) link.setAttribute('as', as);
      document.head.appendChild(link);
    };

    // Preload critical images
    addResourceHint('preload', '/src/assets/dubai-luxury-hero.jpg', 'image');
    addResourceHint('preload', '/src/assets/cars/mercedes-s-class.jpg', 'image');
    addResourceHint('preload', '/src/assets/cars/bmw-7-series.jpg', 'image');

    // Add structured data for current page
    const addStructuredData = (data: any, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Voice search optimization - add conversational structured data
    const voiceSearchData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Royal City Tourism L.L.C",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "telephone": "+971503441993",
      "description": "Best luxury car rental service in Dubai with professional chauffeurs. Mercedes S-Class, BMW 7 Series, Toyota Hiace available 24/7 across UAE.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dubai Car Rental Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Mercedes S-Class Rental Dubai",
            "description": "Luxury Mercedes S-Class with professional chauffeur",
            "price": "350 AED per day",
            "availability": "Available 24/7"
          },
          {
            "@type": "Offer",
            "name": "BMW 7 Series Rental Dubai", 
            "description": "Executive BMW 7 Series with experienced driver",
            "price": "350 AED per day",
            "availability": "Available 24/7"
          },
          {
            "@type": "Offer",
            "name": "Toyota Hiace Group Rental Dubai",
            "description": "Spacious Toyota Hiace 13-seater for group transportation",
            "price": "300 AED per day", 
            "availability": "Available 24/7"
          }
        ]
      }
    };

    addStructuredData(voiceSearchData, 'voice-search-data');

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[src*="performance-optimizer"], script[src*="google-analytics"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TechnicalSEO;