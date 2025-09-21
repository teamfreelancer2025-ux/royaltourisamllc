// Enhanced SEO utilities and constants for Dubai car rental website

export const DUBAI_KEYWORDS = {
  primary: [
    "Dubai car rental with driver",
    "luxury car rental Dubai", 
    "chauffeur service Dubai",
    "car with driver Dubai",
    "premium vehicle rental UAE",
    "Dubai rental services",
    "luxury transportation Dubai"
  ],
  secondary: [
    "Mercedes S-Class rental Dubai",
    "BMW 7 Series rental Dubai", 
    "Toyota Hiace rental Dubai",
    "luxury transportation Dubai",
    "professional chauffeur Dubai",
    "airport transfer Dubai",
    "business car rental Dubai",
    "Dubai rental deals",
    "affordable services Dubai",
    "premium car hire Dubai"
  ],
  longTail: [
    "best car rental with driver in Dubai",
    "luxury chauffeur driven cars Dubai",
    "professional car rental service UAE",
    "Mercedes rental with chauffeur Dubai",
    "Toyota Hiace van rental Dubai",
    "luxury airport transfer service Dubai",
    "24/7 car rental service Dubai",
    "corporate car rental Dubai UAE",
    "wedding car rental Dubai luxury",
    "VIP transportation service Dubai"
  ],
  lsi: [
    "Dubai luxury transport",
    "UAE premium vehicles",
    "chauffeur driven experience",
    "executive car service",
    "Dubai mobility solutions",
    "premium fleet rental",
    "luxury travel Dubai",
    "concierge car service"
  ],
  voice: [
    "Where can I rent a luxury car with driver in Dubai",
    "What is the best chauffeur service in Dubai", 
    "How much does luxury car rental cost in Dubai",
    "Which company offers Mercedes rental in Dubai",
    "What are Dubai car rental prices with driver"
  ]
};

export const SEO_CONFIG = {
  siteName: "Royal City Tourism LLC",
  siteUrl: "https://royalcitytourism.com",
  phone: "+971588373992",
  whatsapp: "+971588373992",
  email: "info@royalcitytourism.com",
  businessAddress: "Dubai, UAE",
  foundingYear: "2014",
  fleetSize: "200+",
  rating: "4.9",
  reviewCount: "150",
  languages: ["en"],
  currency: "AED",
  timezone: "Asia/Dubai",
  socialMedia: {
    facebook: "https://facebook.com/royalcitytourism",
    instagram: "https://instagram.com/royalcitytourism", 
    twitter: "https://twitter.com/royalcitytourism",
    linkedin: "https://linkedin.com/company/royalcitytourism"
  },
  businessHours: {
    monday: "00:00-23:59",
    tuesday: "00:00-23:59", 
    wednesday: "00:00-23:59",
    thursday: "00:00-23:59",
    friday: "00:00-23:59",
    saturday: "00:00-23:59",
    sunday: "00:00-23:59"
  }
};

// Generate optimized alt text for car images
export const generateCarAltText = (carName: string, seats: number, category: string): string => {
  return `${carName} ${seats} seater luxury car rental Dubai with professional chauffeur - ${category} category`;
};

// Generate WhatsApp message with SEO keywords
export const generateWhatsAppMessage = (carName: string, service: string): string => {
  return `Hi! I'm interested in ${service} ${carName} luxury car rental with driver in Dubai. Can you provide details about availability and pricing?`;
};

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
        "category": car.category
      },
      "price": car.price,
      "availability": "InStock"
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