import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Phone, MessageCircle, Clock } from "lucide-react";

interface CarCardProps {
  name: string;
  image: string;
  seats: number;
  price: string;
  additionalPrice: string;
  extraHourRate: string;
  category: "4-seater" | "5-seater" | "7-seater" | "8-seater" | "13-seater" | "15-seater";
}

const CarCard = ({ name, image, seats, price, additionalPrice, extraHourRate, category }: CarCardProps) => {
  const openWhatsApp = () => {
    const message = `Hi! I'm interested in renting the ${name} (${seats} seater) for ${price}. Could you please provide more details?`;
    window.open(`https://wa.me/971503441993?text=${encodeURIComponent(message)}`, "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+971503441993";
  };

  return (
    <Card className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} luxury car rental Dubai with professional chauffeur - ${seats} seater premium vehicle`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width="400"
          height="192"
        />
        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-primary-foreground text-sm font-semibold">{category}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">{seats} Seater</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">10 Hours Dubai:</span>
            <span className="text-lg font-bold text-primary">{price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Other Emirates:
            </span>
            <span className="text-sm font-semibold text-foreground">{additionalPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Extra Hours:
            </span>
            <span className="text-sm font-semibold text-accent">{extraHourRate}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="call" 
            size="sm" 
            onClick={callNow}
            className="flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
          <Button 
            variant="whatsapp" 
            size="sm" 
            onClick={openWhatsApp}
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;