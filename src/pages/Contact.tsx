import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>Contact Royal City Tourism UAE | Dubai Car Rental</title>
        <meta 
          name="description" 
          content="Contact Royal City Tourism for Dubai car rental with driver. Call +971 58 837 3992 or WhatsApp for instant quotes. 24/7 luxury chauffeur service." 
        />
        <meta name="keywords" content="contact Dubai car rental, book car rental Dubai, Royal City Tourism contact, luxury chauffeur service" />
        <link rel="canonical" href="https://royalcitytourism.com/contact" />
        
        {/* Contact Page Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Royal City Tourism L.L.C",
          "description": "Contact information for Dubai's premier car rental service",
          "mainEntity": {
            "@type": "Organization",
            "name": "Royal City Tourism L.L.C",
            "telephone": "+971 58 837 3992",
            "email": "info@royalcitytourism.com",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+971 58 837 3992",
                "contactType": "customer service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic"],
                "hoursAvailable": "Mo-Su 00:00-23:59"
              },
              {
                "@type": "ContactPoint",
                "url": "https://wa.me/971588373992",
                "contactType": "customer service",
                "name": "WhatsApp Support"
              }
            ]
          }
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