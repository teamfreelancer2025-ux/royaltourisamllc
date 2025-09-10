import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, MapPin, Car, Users } from "lucide-react";

// Blog posts for SEO content marketing
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Luxury Car Rental Tips for Dubai Visitors",
    excerpt: "Discover essential tips for renting luxury cars in Dubai. From choosing the right vehicle to understanding local traffic rules.",
    image: "/src/assets/dubai-luxury-hero.jpg",
    date: "2024-12-07",
    category: "Travel Tips",
    readTime: "5 min read",
    slug: "luxury-car-rental-tips-dubai",
    keywords: "Dubai car rental tips, luxury car rental guide, Dubai travel tips"
  },
  {
    id: 2, 
    title: "Mercedes S-Class vs BMW 7 Series: Which Luxury Car to Choose in Dubai?",
    excerpt: "Compare the features, comfort, and benefits of Mercedes S-Class and BMW 7 Series for your Dubai car rental experience.",
    image: "/src/assets/cars/mercedes-s-class.jpg",
    date: "2024-12-06",
    category: "Car Comparison",
    readTime: "7 min read",
    slug: "mercedes-s-class-vs-bmw-7-series-dubai",
    keywords: "Mercedes S-Class rental Dubai, BMW 7 Series rental, luxury car comparison"
  },
  {
    id: 3,
    title: "Best Areas to Visit in Dubai with Your Chauffeur-Driven Car",
    excerpt: "Explore Dubai's most iconic destinations with the comfort and luxury of a professional chauffeur service.",
    image: "/src/assets/dubai-burj-khalifa-night.jpg", 
    date: "2024-12-05",
    category: "Dubai Guide",
    readTime: "6 min read",
    slug: "best-dubai-areas-chauffeur-car",
    keywords: "Dubai sightseeing with chauffeur, Dubai attractions, chauffeur service Dubai"
  },
  {
    id: 4,
    title: "Why Choose Toyota Hiace for Group Transportation in Dubai?",
    excerpt: "Learn why Toyota Hiace is the perfect choice for family trips, business groups, and airport transfers in Dubai.",
    image: "/src/assets/cars/toyota-hiace-13.jpg",
    date: "2024-12-04", 
    category: "Fleet Guide",
    readTime: "4 min read",
    slug: "toyota-hiace-group-transportation-dubai",
    keywords: "Toyota Hiace rental Dubai, group transportation Dubai, family car rental"
  },
  {
    id: 5,
    title: "Dubai Airport Transfer: Luxury Car Rental vs Regular Taxi",
    excerpt: "Compare the benefits of luxury airport transfers with chauffeur service versus regular taxi services in Dubai.",
    image: "/src/assets/dubai-marina-night.jpg",
    date: "2024-12-03",
    category: "Airport Transfer", 
    readTime: "5 min read",
    slug: "dubai-airport-transfer-luxury-vs-taxi",
    keywords: "Dubai airport transfer, luxury airport pickup, chauffeur airport service"
  },
  {
    id: 6,
    title: "Business Car Rental in Dubai: Impress Your Clients",
    excerpt: "Discover how luxury car rental with chauffeur service can enhance your business image and client relationships in Dubai.",
    image: "/src/assets/cars/bmw-7-series.jpg",
    date: "2024-12-02",
    category: "Business",
    readTime: "6 min read", 
    slug: "business-car-rental-dubai-client-impression",
    keywords: "business car rental Dubai, corporate chauffeur service, executive transportation Dubai"
  }
];

const Blog = () => {
  const handleReadMore = (slug: string) => {
    // In a real implementation, this would navigate to the full blog post
    window.open(`https://wa.me/971503441993?text=${encodeURIComponent(`Hi! I'd like to read more about "${slug}". Can you provide more information about your Dubai car rental services?`)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      <Helmet>
        <title>Dubai Car Rental Blog - Tips, Guides & Expert Advice | Royal City Tourism</title>
        <meta 
          name="description" 
          content="Read expert articles about Dubai car rental, luxury vehicle guides, travel tips, and chauffeur service insights. Stay updated with Dubai's premium transportation trends." 
        />
        <meta name="keywords" content="Dubai car rental blog, luxury car rental tips, Dubai travel guide, chauffeur service advice, UAE transportation blog, Mercedes BMW rental Dubai" />
        <link rel="canonical" href="/blog" />
        
        {/* Blog Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Royal City Tourism Dubai Car Rental Blog",
          "description": "Expert insights on luxury car rental and chauffeur services in Dubai",
          "url": "https://royalcitytourism.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Royal City Tourism LLC"
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": {
              "@type": "Organization", 
              "name": "Royal City Tourism LLC"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Royal City Tourism LLC"
            },
            "mainEntityOfPage": `https://royalcitytourism.com/blog/${post.slug}`,
            "image": post.image,
            "keywords": post.keywords
          }))
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
            
            {/* Header */}
            <header className="text-center mb-16">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Dubai Car Rental Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights, tips, and guides for luxury car rental and chauffeur services in Dubai and UAE
              </p>
            </header>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                  
                  {/* Post Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={`${post.title} - Dubai car rental blog post`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-primary-foreground text-sm font-semibold">{post.category}</span>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    
                    {/* Post Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleReadMore(post.slug)}
                      className="group/btn w-full"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call-to-Action Section */}
            <section className="mt-20 text-center bg-gradient-matte rounded-2xl p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Experience Dubai in Luxury?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                From Mercedes S-Class to Toyota Hiace, choose from our premium fleet with professional chauffeur service across Dubai and UAE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="glossy" 
                  size="lg"
                  onClick={() => window.open("https://wa.me/971503441993?text=" + encodeURIComponent("Hi! I'd like to book a luxury car rental with driver in Dubai. Can you provide availability and pricing?"), "_blank")}
                  className="flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Book Your Luxury Car
                </Button>
                
                <Button 
                  variant="matte" 
                  size="lg"
                  onClick={() => window.location.href = "/rent-a-car"}
                  className="flex items-center gap-2"
                >
                  <Car className="w-5 h-5" />
                  View Our Fleet
                </Button>
              </div>
            </section>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;