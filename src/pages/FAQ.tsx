import FAQSection from "@/components/FAQSection";
import { SEO_CONFIG } from '../config/seo';
import { generateBreadcrumbSchema, generateFAQSchema } from '../utils/seo';

// Dummy FAQ data for schema generation - replace with actual FAQ content from FAQSection if available
const faqs = [
  {
    question: "What does the chauffeur service include?",
    answer: "Our chauffeur service includes a professional, licensed driver who will handle all the driving while you relax. The service covers 10 hours within Dubai, with additional charges for other Emirates. All our chauffeurs are experienced, speak English, and are familiar with Dubai's roads and attractions."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24 hours in advance to ensure vehicle availability. However, we also accept same-day bookings subject to availability. For special events, holidays, or peak seasons, we suggest booking 3-7 days in advance."
  },
  {
    question: "What are the additional charges for other Emirates?",
    answer: "Travel to other Emirates (Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain) incurs an additional charge of 100 AED per trip. This covers the extra distance and time required for inter-emirate travel."
  },
  {
    question: "Are fuel and toll charges included in the price?",
    answer: "Yes, all fuel costs and Salik (toll) charges within Dubai are included in our quoted prices. You don't need to worry about any additional fuel or toll expenses during your 10-hour rental period in Dubai."
  },
];

const FAQ = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SEO_CONFIG.baseUrl },
    { name: "FAQ", url: `${SEO_CONFIG.baseUrl}/faq` }
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      {/* The SEOHead component in main.tsx will handle global SEO */}

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
        <div className="container mx-auto px-4 py-20">
          <FAQSection />
        </div>
      </main>
    </div>
  );
};

export default FAQ;