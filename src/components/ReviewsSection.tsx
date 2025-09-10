import { Star, Quote, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Ahmed Al-Rashid",
    country: "UAE",
    rating: 5,
    text: "Exceptional service! The Mercedes S-Class was immaculate and the chauffeur was professional and punctual. Royal City Tourism made our business trip to Dubai absolutely seamless."
  },
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    rating: 5,
    text: "Amazing experience with Royal City Tourism! We booked a BMW 7 Series for our family vacation in Dubai. The car was spotless and the service was five-star."
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: "Outstanding chauffeur service! We needed a Mercedes Sprinter for our group. The vehicle was luxurious and spacious, perfect for our Dubai tour."
  },
  {
    name: "Jennifer Chen",
    country: "Singapore",
    rating: 5,
    text: "Royal City Tourism exceeded our expectations! The Lexus ES 350 was beautiful and comfortable. The chauffeur was extremely professional."
  },
  {
    name: "David Williams",
    country: "Australia",
    rating: 5,
    text: "Fantastic service from start to finish! Booked an Audi A6 for business meetings across Dubai. The car was pristine and the chauffeur was professional."
  },
  {
    name: "Fatima Al-Zahra",
    country: "Saudi Arabia",
    rating: 5,
    text: "Excellent experience with the Toyota Previa for our family trip. The 8-seater was perfect for our group, clean and comfortable."
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-8 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Customer Reviews</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Read genuine feedback from our satisfied customers around the world.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
              <CardContent className="p-4 md:p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-3">
                  <Quote className="w-6 h-6 text-primary/40" />
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow text-sm md:text-base">
                  "{review.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Reviewer Info */}
                <div className="flex items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm md:text-base">{review.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{review.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16">
          <div className="text-center p-3 md:p-6 bg-gradient-card rounded-xl border border-primary/20">
            <div className="text-xl md:text-4xl font-bold text-primary mb-1">5.0</div>
            <div className="flex justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
              ))}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Rating</div>
          </div>
          
          <div className="text-center p-3 md:p-6 bg-gradient-card rounded-xl border border-primary/20">
            <div className="text-xl md:text-4xl font-bold text-primary mb-1">1000+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Customers</div>
          </div>
          
          <div className="text-center p-3 md:p-6 bg-gradient-card rounded-xl border border-primary/20">
            <div className="text-xl md:text-4xl font-bold text-primary mb-1">95%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Return Rate</div>
          </div>
          
          <div className="text-center p-3 md:p-6 bg-gradient-card rounded-xl border border-primary/20">
            <div className="text-xl md:text-4xl font-bold text-primary mb-1">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center px-2">
          <div className="bg-gradient-card rounded-xl md:rounded-3xl p-4 md:p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">Ready to Experience Luxury?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Join thousands of satisfied customers who trust Royal City Tourism.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <Button 
                variant="glossy" 
                size="lg" 
                onClick={() => window.location.href = "tel:+971503441993"}
                className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm md:text-base">Book Your Ride</span>
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={() => window.open("https://wa.me/971503441993", "_blank")}
                className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm md:text-base">Get Quote</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;