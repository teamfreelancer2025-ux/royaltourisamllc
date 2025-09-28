// Enhanced SEO utilities and constants for Dubai car rental website
import { DUBAI_KEYWORDS, SEO_CONFIG } from '../config/seo';

// Generate optimized alt text for car images
export const generateCarAltText = (carName: string, seats: number, category: string): string => {
  return `${carName} ${seats} seater luxury car rental Dubai with professional chauffeur - ${category} category`;
};

// Generate WhatsApp message with SEO keywords
export const generateWhatsAppMessage = (carName: string, service: string): string => {
  return `Hi! I'm interested in ${service} ${carName} luxury car rental with driver in Dubai. Can you provide details about availability and pricing?`;
};

// Generate structured data for Website
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SEO_CONFIG.siteName,
  "url": SEO_CONFIG.siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Generate structured data for car rental services
export const generateCarRentalSchema = (cars: any[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dubai Luxury Car Rental with Driver",
  "provider": {
    "@type": "Organization", 
    "name": SEO_CONFIG.siteName
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Luxury Car Rental Fleet",
    "itemListElement": cars.map((car, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Car",
        "name": car.name,
        "seatingCapacity": car.seats,
        "category": car.category,
        "offers": {
          "@type": "Offer",
          "price": car.price,
          "priceCurrency": SEO_CONFIG.currency,
          "availability": "InStock"
        }
      }
    }))
  }
});

// Dubai areas for local SEO
export const DUBAI_AREAS = [
  "Dubai Marina",
  "Downtown Dubai", 
  "Business Bay",
  "JBR",
  "Palm Jumeirah",
  "Dubai Mall",
  "Burj Khalifa",
  "Dubai International Airport",
  "Al Maktoum Airport",
  "Jumeirah",
  "Deira",
  "Bur Dubai"
];

export const UAE_EMIRATES = [
  "Dubai",
  "Abu Dhabi", 
  "Sharjah",
  "Ajman",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain"
];

// Enhanced Schema.org structured data generators
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SEO_CONFIG.siteUrl}#organization`,
  "name": SEO_CONFIG.siteName,
  "alternateName": "Royal City Tourism Dubai",
  "description": "Premier luxury car rental service in Dubai with professional chauffeur-driven vehicles. Mercedes, BMW, Toyota fleet available 24/7 across UAE.",
  "url": SEO_CONFIG.siteUrl,
  "telephone": SEO_CONFIG.phone,
  "email": SEO_CONFIG.email,
  "foundingDate": SEO_CONFIG.foundingYear,
  "currenciesAccepted": "AED,USD,EUR",
  "paymentAccepted": "Cash,Credit Card,Bank Transfer",
  "priceRange": "$$$$",
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
  "areaServed": UAE_EMIRATES.map(emirate => ({
    "@type": "City",
    "name": emirate,
    "addressCountry": "AE"
  })),
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.276987", 
      "longitude": "55.296249"
    },
    "geoRadius": "100000"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": SEO_CONFIG.rating,
    "reviewCount": SEO_CONFIG.reviewCount,
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": Object.values(SEO_CONFIG.socialMedia)
});

export const generateCarRentalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury Car Rental with Chauffeur Dubai",
  "description": "Professional luxury car rental service in Dubai featuring Mercedes S-Class, BMW 7 Series, Toyota Hiace with experienced chauffeurs.",
  "provider": {
    "@type": "Organization",
    "@id": `${SEO_CONFIG.siteUrl}#organization`
  },
  "serviceType": "Car Rental Service",
  "category": "Transportation",
  "areaServed": UAE_EMIRATES,
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": SEO_CONFIG.siteUrl,
    "servicePhone": SEO_CONFIG.phone
  },
  "offers": {
    "@type": "Offer",
    "availability": "InStock",
    "price": "Starting from 250 AED/day",
    "priceCurrency": "AED"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// SEO title and meta description generators
export const generateSEOTitle = (pageTitle: string, includeKeyword = true): string => {
  const keyword = includeKeyword ? "Dubai Car Rental" : "";
  const siteName = SEO_CONFIG.siteName;
  
  if (pageTitle.length + keyword.length + siteName.length > 55) {
    return `${pageTitle} | ${keyword}`.substring(0, 57) + "...";
  }
  
  return `${pageTitle} ${keyword ? `- ${keyword}` : ""} | ${siteName}`;
};

export const generateSEODescription = (content: string, keywords: string[] = []): string => {
  const keywordPhrase = keywords.slice(0, 2).join(", ");
  const maxLength = 155;
  
  let description = content;
  if (keywordPhrase && !content.toLowerCase().includes(keywordPhrase.toLowerCase())) {
    description = `${keywordPhrase}. ${content}`;
  }
  
  if (description.length > maxLength) {
    return description.substring(0, maxLength - 3) + "...";
  }
  
  return description;
};