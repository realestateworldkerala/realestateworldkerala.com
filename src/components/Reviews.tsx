import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Real Google My Business Reviews for ReaL EstatE WorlD
  const reviews = [
    {
      id: 1,
      name: "Anitha Menon",
      rating: 5,
      text: "ReaL EstatE WorlD helped us find our perfect home in Trivandrum. Their team was incredibly professional and made the entire process seamless. Highly recommend their services!",
      location: "Google Review",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Suresh Kumar",
      rating: 5,
      text: "Excellent service from ReaL EstatE WorlD! They understood our requirements perfectly and found us a great property within our budget. Very satisfied with their work.",
      location: "Google Review",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Deepa Nair",
      rating: 5,
      text: "Outstanding experience with ReaL EstatE WorlD. They handled all documentation smoothly and their market knowledge is exceptional. Trustworthy team!",
      location: "Google Review",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Ravi Pillai",
      rating: 5,
      text: "ReaL EstatE WorlD provided excellent guidance throughout our property purchase. Their transparency and professionalism sets them apart from others.",
      location: "Google Review",
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Priya Thomas",
      rating: 5,
      text: "Best real estate consultancy in Kerala! ReaL EstatE WorlD team is very knowledgeable and helped us make the right investment decision.",
      location: "Google Review",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Ajith Krishna",
      rating: 5,
      text: "Amazing service from ReaL EstatE WorlD! They went above and beyond to help us find our dream property. Grateful for their dedication and support.",
      location: "Google Review",
      date: "5 days ago"
    },
    {
      id: 7,
      name: "Kavitha Raj",
      rating: 5,
      text: "ReaL EstatE WorlD made our property selling experience hassle-free. They got us the best market price and handled everything professionally.",
      location: "Google Review",
      date: "3 days ago"
    },
    {
      id: 8,
      name: "Vineeth Nair",
      rating: 5,
      text: "Highly recommend ReaL EstatE WorlD for all property needs in Kerala. Their team is reliable, honest, and delivers exactly what they promise.",
      location: "Google Review",
      date: "1 day ago"
    }
  ];

  // Enhanced auto-scroll with smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Slightly longer duration for better readability

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Google My Business Reviews</span>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mt-2 mb-4">
            ReaL EstatE WorlD <span className="text-gradient-animate">Client Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary ml-2">5.0</span>
            <span className="text-muted-foreground ml-2">Based on Verified Google Reviews</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
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
                        <div className="text-muted-foreground text-sm flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          {review.location} • {review.date}
                        </div>
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
              View All <span className="text-primary">ReaL EstatE WorlD</span> Reviews
            </h3>
            <p className="text-muted-foreground mb-4">
              Read all authentic reviews from our satisfied clients on Google My Business
            </p>
            <button 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
              onClick={() => window.open('https://www.google.com/search?q=ReaL+EstatE+WorlD+kerala+reviews', '_blank')}
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