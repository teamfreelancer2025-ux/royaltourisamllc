import { Helmet } from "react-helmet-async";
import RentACarSection from "@/components/RentACarSection";

const RentACar = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>Rent a Car Dubai with Driver | Luxury Vehicles UAE</title>
        <meta 
          name="description" 
          content="Rent luxury cars in Dubai with chauffeur. Mercedes S-Class, BMW 7 Series, Toyota Hiace, Audi A6 available. 24/7 service across UAE." 
        />
        <meta name="keywords" content="rent a car Dubai with driver, Mercedes S-Class rental Dubai, BMW 7 Series rental, Toyota Hiace rental, luxury car hire Dubai" />
        <link rel="canonical" href="https://royalcitytourism.com/rent-a-car" />
        
        {/* Page-specific Open Graph */}
        <meta property="og:title" content="Rent a Car Dubai with Driver | Luxury Vehicles UAE" />
        <meta property="og:description" content="Rent luxury cars in Dubai with chauffeur. Mercedes S-Class, BMW 7 Series, Toyota Hiace, Audi A6 available. 24/7 service across UAE." />
        <meta property="og:url" content="https://royalcitytourism.com/rent-a-car" />
        
        {/* Structured Data for Car Rental Service */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Dubai Car Rental with Driver Service",
          "description": "Premium luxury car rental service in Dubai with professional chauffeur drivers",
          "provider": {
            "@type": "Organization",
            "name": "Royal City Tourism L.L.C"
          },
          "areaServed": "Dubai, UAE",
          "serviceType": "Car Rental with Driver",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Luxury Car Rental Fleet",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car",
                  "name": "Mercedes S-Class",
                  "brand": "Mercedes-Benz",
                  "model": "S-Class",
                  "seatingCapacity": "4",
                  "fuelType": "Gasoline",
                  "offers": {
                    "@type": "Offer",
                    "price": "350", // Placeholder price
                    "priceCurrency": "AED",
                    "availability": "InStock"
                  }
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Car",
                  "name": "BMW 7 Series",
                  "brand": "BMW",
                  "model": "7 Series", 
                  "seatingCapacity": "4",
                  "fuelType": "Gasoline",
                  "offers": {
                    "@type": "Offer",
                    "price": "350", // Placeholder price
                    "priceCurrency": "AED",
                    "availability": "InStock"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car",
                  "name": "Toyota Hiace",
                  "brand": "Toyota",
                  "model": "Hiace",
                  "seatingCapacity": "13",
                  "fuelType": "Gasoline",
                  "offers": {
                    "@type": "Offer",
                    "price": "300", // Placeholder price
                    "priceCurrency": "AED",
                    "availability": "InStock"
                  }
                }
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
        {/* Main Car Rental Section */}
        <section className="py-20 bg-gradient-matte-deep" aria-label="Car Rental Fleet Overview">
          <div className="container mx-auto px-4">
            <header className="mb-12 text-center">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Dubai Car Rental with Driver - Premium Fleet
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience Dubai in luxury with our professional chauffeur-driven vehicles. Choose from Mercedes S-Class, BMW 7 Series, Toyota Hiace and more premium cars.
              </p>
            </header>
            <RentACarSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default RentACar;