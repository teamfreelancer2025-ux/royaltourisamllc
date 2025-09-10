import CarCard from "@/components/CarCard";
import { Users, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import car images
import toyotaHiace13 from "@/assets/cars/toyota-hiace-13.jpg";
import mercedesSprinter15 from "@/assets/cars/mercedes-sprinter-15.jpg";

const fifteenSeaterCars = [
  {
    name: "Toyota Hiace",
    image: toyotaHiace13,
    seats: 13,
    price: "650 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "65 AED/hr",
    category: "13-seater" as const
  },
  {
    name: "Mercedes Sprinter",
    image: mercedesSprinter15,
    seats: 15,
    price: "2000 AED",
    additionalPrice: "100 AED additional",
    extraHourRate: "200 AED/hr",
    category: "15-seater" as const
  }
];

const FifteenSeaterSection = () => {
  return (
    <section id="15-seater" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Group & Corporate Travel</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            13-15 Seater Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ideal for large groups, corporate events, and special occasions. Travel together in comfort and style across Dubai and UAE.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {fifteenSeaterCars.map((car, index) => (
            <CarCard
              key={index}
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

        {/* Use Cases Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Corporate Events</h3>
            <p className="text-sm text-muted-foreground">Perfect for business meetings, conferences, and corporate outings</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Group Tourism</h3>
            <p className="text-sm text-muted-foreground">Ideal for tour groups exploring Dubai's attractions together</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.701 2.701 0 003 15.546V9.75c0-4.97 4.03-9 9-9s9 4.03 9 9v5.796z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Special Events</h3>
            <p className="text-sm text-muted-foreground">Weddings, celebrations, and special occasions transportation</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Airport Transfers</h3>
            <p className="text-sm text-muted-foreground">Large group airport pickups and drop-offs with luggage space</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-3xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Planning a Group Trip?</h3>
            <p className="text-muted-foreground mb-6">
              Let us handle your transportation needs. Our large vehicles ensure everyone travels together comfortably and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glossy" 
                size="lg" 
                onClick={() => window.location.href = "tel:+971503441993"}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call for Group Booking
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={() => window.open("https://wa.me/971503441993", "_blank")}
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifteenSeaterSection;