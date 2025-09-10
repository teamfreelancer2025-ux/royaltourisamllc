import { Helmet } from "react-helmet-async";
import ReviewsSection from "@/components/ReviewsSection";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>Customer Reviews - 4.9★ Dubai Car Rental Testimonials | Royal City Tourism</title>
        <meta 
          name="description" 
          content="Read 150+ genuine customer reviews about Royal City Tourism's Dubai car rental with driver service. 4.9/5 rating. See why clients choose our luxury chauffeur service." 
        />
        <meta name="keywords" content="Dubai car rental reviews, customer testimonials Dubai, luxury car rental feedback, Royal City Tourism reviews, chauffeur service reviews Dubai, 5 star car rental Dubai" />
        <link rel="canonical" href="/reviews" />
        
        {/* Reviews Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Royal City Tourism LLC",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Ahmed Al Mansoori"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Excellent luxury car rental service in Dubai. Professional chauffeur, clean Mercedes S-Class, punctual service."
            },
            {
              "@type": "Review", 
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Best car rental experience in Dubai. BMW 7 Series was immaculate and driver was very professional."
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
        <section className="py-20 bg-gradient-matte-deep backdrop-blur-sm min-h-screen">
          <div className="container mx-auto px-4">
            <ReviewsSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reviews;