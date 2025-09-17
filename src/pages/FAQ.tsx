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
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does the chauffeur service include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our chauffeur service includes a professional, licensed driver who will handle all the driving while you relax. The service covers 10 hours within Dubai, with additional charges for other Emirates. All our chauffeurs are experienced, speak English, and are familiar with Dubai's roads and attractions."
              }
            },
            {
              "@type": "Question",
              "name": "How far in advance should I book?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We recommend booking at least 24 hours in advance to ensure vehicle availability. However, we also accept same-day bookings subject to availability. For special events, holidays, or peak seasons, we suggest booking 3-7 days in advance."
              }
            },
            {
              "@type": "Question",
              "name": "What are the additional charges for other Emirates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Travel to other Emirates (Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain) incurs an additional charge of 100 AED per trip. This covers the extra distance and time required for inter-emirate travel."
              }
            },
            {
              "@type": "Question",
              "name": "Are fuel and toll charges included in the price?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all fuel costs and Salik (toll) charges within Dubai are included in our quoted prices. You don't need to worry about any additional fuel or toll expenses during your 10-hour rental period in Dubai."
              }
            },
            {
              "@type": "Question",
              "name": "Can I extend my rental period?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! If you need the vehicle for more than 10 hours, you can extend the rental. Additional hours are charged at an hourly rate, which varies depending on the vehicle type. Please inform the chauffeur or call us to arrange the extension."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if I'm running late for pickup?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We understand that schedules can change. Please call us as soon as possible if you're running late. We provide a 30-minute grace period for pickups. Beyond that, waiting time may be charged to ensure fairness to other customers and our chauffeurs."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide child seats?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can provide child seats upon request at the time of booking. We have various types of child seats available for different ages and sizes. Please specify the age and number of children when making your reservation."
              }
            },
            {
              "@type": "Question",
              "name": "What's your cancellation policy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bookings can be cancelled up to 6 hours before the scheduled pickup time without any charges. Cancellations made less than 6 hours before pickup may incur a cancellation fee. No-shows are charged the full amount."
              }
            },
            {
              "@type": "Question",
              "name": "Are your vehicles insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our vehicles are fully insured with comprehensive coverage. This includes third-party liability, comprehensive insurance, and passenger insurance. You can travel with complete peace of mind knowing you're fully protected."
              }
            },
            {
              "@type": "Question",
              "name": "Can I request a specific vehicle model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While we'll do our best to provide your preferred vehicle model, availability depends on our current fleet status and booking schedule. We guarantee the vehicle category you book (4-seater, 7-seater, etc.) and will provide a vehicle of equal or higher standard if your specific model isn't available."
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