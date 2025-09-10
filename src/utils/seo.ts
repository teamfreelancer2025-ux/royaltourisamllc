// SEO utilities and constants for Dubai car rental website

export const DUBAI_KEYWORDS = {
  primary: [
    "Dubai car rental with driver",
    "luxury car rental Dubai", 
    "chauffeur service Dubai",
    "car with driver Dubai",
    "premium vehicle rental UAE"
  ],
  secondary: [
    "Mercedes S-Class rental Dubai",
    "BMW 7 Series rental Dubai", 
    "Toyota Hiace rental Dubai",
    "luxury transportation Dubai",
    "professional chauffeur Dubai",
    "airport transfer Dubai",
    "business car rental Dubai"
  ],
  longTail: [
    "best car rental with driver in Dubai",
    "luxury chauffeur driven cars Dubai",
    "professional car rental service UAE",
    "Mercedes rental with chauffeur Dubai",
    "Toyota Hiace van rental Dubai",
    "luxury airport transfer service Dubai"
  ]
};

export const SEO_CONFIG = {
  siteName: "Royal City Tourism LLC",
  siteUrl: "https://royalcitytourism.com",
  phone: "+971503441993",
  email: "info@royalcitytourism.com",
  businessAddress: "Dubai, UAE",
  foundingYear: "2014",
  fleetSize: "200+",
  rating: "4.9",
  reviewCount: "150"
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