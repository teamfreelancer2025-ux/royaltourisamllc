import { Helmet } from "react-helmet-async";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>Dubai Car Rental FAQ - Booking, Pricing & Requirements | Royal City Tourism</title>
        <meta 
          name="description" 
          content="Get answers to Dubai car rental questions: booking process, chauffeur requirements, pricing, payment methods, areas covered. Professional car rental service since 2014." 
        />
        <meta name="keywords" content="Dubai car rental FAQ, car rental questions Dubai, chauffeur service requirements, car rental booking process Dubai, luxury car rental pricing, Dubai transportation FAQ" />
        <link rel="canonical" href="/faq" />
        
        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "Dubai Car Rental Frequently Asked Questions",
          "description": "Common questions and answers about luxury car rental services in Dubai",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I book a car with driver in Dubai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can book instantly by calling +971 50 344 1993 or WhatsApp. We offer same-day booking and 24/7 service availability."
              }
            },
            {
              "@type": "Question", 
              "name": "What areas do you cover in UAE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide chauffeur services across Dubai, Abu Dhabi, Sharjah, Ajman, and all Emirates in UAE."
              }
            },
            {
              "@type": "Question",
              "name": "What luxury cars are available for rental?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our fleet includes Mercedes S-Class, BMW 7 Series, Audi A6, Toyota Hiace, Mercedes Sprinter, and over 200+ premium vehicles."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide professional chauffeurs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our vehicles come with experienced, licensed, and professional chauffeurs who know Dubai routes expertly."
              }
            }
          ]
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
        <div className="container mx-auto px-4 py-20">
          <FAQSection />
        </div>
      </main>
    </div>
  );
};

export default FAQ;