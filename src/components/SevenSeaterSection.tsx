import CarCard from "@/components/CarCard";
import { Users } from "lucide-react";

// Import car images
import toyotaPrevia8Complete from "@/assets/cars/toyota-previa-8-complete.jpg";

const sevenSeaterCars = [
  {
    name: "Toyota Previa",
    image: toyotaPrevia8Complete,
    seats: 8,
    price: "650 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "50 AED/hr",
    category: "7-seater" as const
  }
];

const SevenSeaterSection = () => {
  return (
    <section id="7-seater" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Family & Group Travel</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            7-8 Seater Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Perfect for families and small groups. Spacious, comfortable, and equipped with premium amenities for your Dubai adventure.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {sevenSeaterCars.map((car, index) => (
            <div key={index} className="w-full max-w-md">
              <CarCard
                name={car.name}
                image={car.image}
                seats={car.seats}
                price={car.price}
                additionalPrice={car.additionalPrice}
                extraHourRate={car.extraHourRate}
                category={car.category}
              />
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Family Comfort</h3>
            <p className="text-muted-foreground">
              Spacious interiors with premium seating for up to 8 passengers, perfect for family trips around Dubai.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 20.5v-1.5m6 1.5v-1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Ample Storage</h3>
            <p className="text-muted-foreground">
              Large luggage compartment for shopping bags, suitcases, and all your travel essentials.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Premium Amenities</h3>
            <p className="text-muted-foreground">
              Air conditioning, entertainment systems, and luxury finishes for maximum comfort during your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SevenSeaterSection;