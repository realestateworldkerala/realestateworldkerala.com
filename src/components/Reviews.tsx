import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Priya Nair",
      rating: 5,
      text: "Excellent service! Real Estate World helped us find our dream home in Trivandrum. Their team was professional and guided us through every step of the process.",
      location: "Trivandrum"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      text: "Outstanding experience with Real Estate World. They found the perfect property for our family within our budget. Highly recommended for anyone looking for property in Kerala.",
      location: "Kochi"
    },
    {
      id: 3,
      name: "Sunitha Thomas",
      rating: 5,
      text: "Very reliable and trustworthy team. They helped us sell our property at the best market price. The entire process was smooth and hassle-free.",
      location: "Trivandrum"
    },
    {
      id: 4,
      name: "Mohammed Ali",
      rating: 5,
      text: "Professional service with great attention to detail. Real Estate World made our property purchase experience enjoyable and stress-free.",
      location: "Kozhikode"
    },
    {
      id: 5,
      name: "Lakshmi Menon",
      rating: 5,
      text: "Best real estate consultancy in Kerala! Their market knowledge and customer service is exceptional. Found us the perfect investment property.",
      location: "Kottayam"
    },
    {
      id: 6,
      name: "Arun Krishnan",
      rating: 5,
      text: "Impressed with their professionalism and transparency. They helped us with all legal documentation and made the buying process very easy.",
      location: "Thrissur"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Client Reviews</span>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mt-2 mb-4">
            What Our <span className="text-gradient-animate">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary ml-2">4.9</span>
            <span className="text-muted-foreground ml-2">Based on 90+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <Card className="card-luxury p-8 text-center max-w-4xl mx-auto">
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-5 h-5 ${star <= review.rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-lg md:text-xl text-foreground/90 mb-6 italic leading-relaxed">
                      "{review.text}"
                    </blockquote>

                    {/* Reviewer Info */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-lg">{review.name}</div>
                        <div className="text-muted-foreground text-sm">{review.location}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">
              See All Our <span className="text-primary">Google Reviews</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Read more authentic reviews from our satisfied clients on Google
            </p>
            <button 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
              onClick={() => window.open('https://www.google.com/search?q=real+estate+world+kerala+reviews', '_blank')}
            >
              View on Google Reviews
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;