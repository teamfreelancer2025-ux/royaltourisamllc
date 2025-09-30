// src/config/seo.ts

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
  baseUrl: "https://royalcitytourism.com",
  defaultMeta: {
    title: "Luxury Car Rental Dubai | Premium Chauffeur Services UAE",
    description: "Experience Dubai's finest luxury car rental service. Professional chauffeurs, Mercedes, BMW & premium fleet. 24/7 service across UAE. Book now!",
    keywords: [
      "luxury car rental Dubai",
      "chauffeur service Dubai",
      "Dubai car hire",
      "premium car rental UAE",
      "Mercedes rental Dubai",
      "BMW rental Dubai",
      ...DUBAI_KEYWORDS.primary
    ]
  },
  phone: "+971588373992",
  whatsapp: "+971588373992",
  email: "info@royalcitytourism.com",
  businessAddress: "13 B St - Umm Suqeim - Umm Suqeim 1 - Dubai - United Arab Emirates",
  foundingYear: "2014",
  fleetSize: "200+",
  rating: "4.9",
  reviewCount: "150",
  languages: ["en"],
  currency: "AED",
  timezone: "Asia/Dubai",
  socialMedia: {
    facebook: "https://www.facebook.com/royalcitytourism/",
    instagram: "https://www.instagram.com/royalcitytourisms/", 
    twitter: "https://twitter.com/royalcitytourism",
    linkedin: "https://www.linkedin.com/in/royalcitytourism-llc-8b8787387/",
    youtube: "https://www.youtube.com/channel/UCFzsd7A7eBMlT8vW0XFBc9Q",
    medium: "https://medium.com/@royalcitytourism5/welcome-to-royal-city-tourism-llc-15505e66ec77"
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
