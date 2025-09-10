import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What does the chauffeur service include?",
    answer: "Our chauffeur service includes a professional, licensed driver who will handle all the driving while you relax. The service covers 10 hours within Dubai, with additional charges for other Emirates. All our chauffeurs are experienced, speak English, and are familiar with Dubai's roads and attractions."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24 hours in advance to ensure vehicle availability. However, we also accept same-day bookings subject to availability. For special events, holidays, or peak seasons, we suggest booking 3-7 days in advance."
  },
  {
    question: "What are the additional charges for other Emirates?",
    answer: "Travel to other Emirates (Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain) incurs an additional charge of 100 AED per trip. This covers the extra distance and time required for inter-emirate travel."
  },
  {
    question: "Are fuel and toll charges included in the price?",
    answer: "Yes, all fuel costs and Salik (toll) charges within Dubai are included in our quoted prices. You don't need to worry about any additional fuel or toll expenses during your 10-hour rental period in Dubai."
  },
  {
    question: "Can I extend my rental period?",
    answer: "Absolutely! If you need the vehicle for more than 10 hours, you can extend the rental. Additional hours are charged at an hourly rate, which varies depending on the vehicle type. Please inform the chauffeur or call us to arrange the extension."
  },
  {
    question: "What happens if I'm running late for pickup?",
    answer: "We understand that schedules can change. Please call us as soon as possible if you're running late. We provide a 30-minute grace period for pickups. Beyond that, waiting time may be charged to ensure fairness to other customers and our chauffeurs."
  },
  {
    question: "Do you provide child seats?",
    answer: "Yes, we can provide child seats upon request at the time of booking. We have various types of child seats available for different ages and sizes. Please specify the age and number of children when making your reservation."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Bookings can be cancelled up to 6 hours before the scheduled pickup time without any charges. Cancellations made less than 6 hours before pickup may incur a cancellation fee. No-shows are charged the full amount."
  },
  {
    question: "Are your vehicles insured?",
    answer: "Yes, all our vehicles are fully insured with comprehensive coverage. This includes third-party liability, comprehensive insurance, and passenger insurance. You can travel with complete peace of mind knowing you're fully protected."
  },
  {
    question: "Can I request a specific vehicle model?",
    answer: "While we'll do our best to provide your preferred vehicle model, availability depends on our current fleet status and booking schedule. We guarantee the vehicle category you book (4-seater, 7-seater, etc.) and will provide a vehicle of equal or higher standard if your specific model isn't available."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Find answers to the most common questions about our luxury car rental services in Dubai.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-primary/20 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40"
            >
              <button
                className="w-full px-4 md:px-6 py-4 md:py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-base md:text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItems.includes(index) && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="pt-2 border-t border-primary/10">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-16">
          <div className="bg-gradient-card rounded-xl md:rounded-3xl p-6 md:p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Still Have Questions?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Our customer service team is available 24/7 to help you with any questions or special requirements.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <Button 
                variant="glossy" 
                size="lg" 
                onClick={() => window.location.href = "tel:+971503441993"}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={() => window.open("https://wa.me/971503441993", "_blank")}
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;