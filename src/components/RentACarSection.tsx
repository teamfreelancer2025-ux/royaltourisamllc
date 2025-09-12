// Rent A Car Section Component - Updated
import CarCard from "@/components/CarCard";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import car images
import mercedesSClass from "@/assets/cars/mercedes-s-class.jpg";
import bmw7Series from "@/assets/cars/bmw-7-series.jpg";

import audiA6 from "@/assets/cars/audi-a6.jpg";
import lexusES350 from "@/assets/cars/lexus-es350.jpg";
import mercedesViano from "@/assets/cars/mercedes-viano.jpg";
import toyotaPrevia8Silver from "@/assets/cars/toyota-previa-8-silver.jpg";
import nissanPatrol from "@/assets/cars/nissan-patrol.jpg";
import gmcSuv from "@/assets/cars/gmc-suv.jpg";
import kiaCarnival from "@/assets/cars/kia-carnival.jpg";
import toyotaLandCruiser from "@/assets/cars/toyota-land-cruiser.jpg";

// Cars organized by price (low to high)
const carsByPrice = [
  // Budget Range
  {
    name: "Toyota Previa",
    image: toyotaPrevia8Silver,
    seats: 8,
    price: "650 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "50 AED/hr",
    category: "8-seater" as const
  },
  {
    name: "KIA Carnival",
    image: kiaCarnival,
    seats: 7,
    price: "650 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "50 AED/hr",
    category: "7-seater" as const
  },
  // Mid Range
  {
    name: "Land Cruiser",
    image: toyotaLandCruiser,
    seats: 8,
    price: "800 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "100 AED/hr",
    category: "8-seater" as const
  },
  {
    name: "Audi A6",
    image: audiA6,
    seats: 4,
    price: "800 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "80 AED/hr",
    category: "4-seater" as const
  },
  {
    name: "Lexus ES 350",
    image: lexusES350,
    seats: 5,
    price: "900 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "90 AED/hr",
    category: "5-seater" as const
  },
  {
    name: "Mercedes Viano",
    image: mercedesViano,
    seats: 5,
    price: "1100 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "110 AED/hr",
    category: "5-seater" as const
  },
  {
    name: "GMC",
    image: gmcSuv,
    seats: 7,
    price: "1200 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "120 AED/hr",
    category: "7-seater" as const
  },
  {
    name: "Nissan Patrol",
    image: nissanPatrol,
    seats: 7,
    price: "1300 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "130 AED/hr",
    category: "7-seater" as const
  },
  // Premium Range
  {
    name: "BMW 7 Series",
    image: bmw7Series,
    seats: 5,
    price: "1500 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "150 AED/hr",
    category: "5-seater" as const
  },
  {
    name: "Mercedes S Class",
    image: mercedesSClass,
    seats: 5,
    price: "1750 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "175 AED/hr",
    category: "5-seater" as const
  }
];


const RentACarSection = () => {
  return (
    <section id="rent-a-car" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Car className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Fleet</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Rent a Luxury Car in Dubai
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our extensive collection of premium vehicles. All prices include professional chauffeur service for 10 hours in Dubai with extra hours available.
          </p>
        </div>

        {/* All Vehicles */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carsByPrice.map((car, index) => (
              <CarCard
                key={`price-${index}`}
                name={car.name}
                image={car.image}
                seats={car.seats}
                price={car.price}
                additionalPrice={car.additionalPrice}
                extraHourRate={car.extraHourRate}
                category={car.category}
              />
            ))}
          </div>
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-3xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Quote?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us for special packages, long-term rentals, or group bookings. We'll create the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971503441993" className="inline-block">
                <Button variant="matte" className="backdrop-blur-sm">
                  Call +971 50 344 1993
                </Button>
              </a>
              <a href="https://wa.me/971503441993" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="glossy" className="hover:animate-glow-pulse">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentACarSection;