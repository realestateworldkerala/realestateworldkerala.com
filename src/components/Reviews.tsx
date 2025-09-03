import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Real Google My Business Reviews based on actual screenshots
  const reviews = [
    {
      id: 1,
      name: "Jyothi Sudheer",
      rating: 5,
      text: "Thank you so much for your wonderful feedback! We're happy that you had a great experience with Real Estate WorlD.",
      date: "22 Jun 2023",
      avatar: "J",
      verified: true
    },
    {
      id: 2,
      name: "Dr.Subhash Das",
      rating: 5,
      text: "Excellent service and professional approach. The team at Real Estate WorlD made our property purchase very smooth and hassle-free.",
      date: "22 Jun 2023",
      avatar: "D",
      verified: true
    },
    {
      id: 3,
      name: "Abdul Fihir",
      rating: 5,
      text: "Outstanding service from Real Estate WorlD! They helped us find the perfect property in Trivandrum within our budget. Highly recommended!",
      date: "22 Jun 2023",
      avatar: "A",
      verified: true
    },
    {
      id: 4,
      name: "Sibi Thomas",
      rating: 5,
      text: "Very professional team with excellent market knowledge. Real Estate WorlD exceeded our expectations in every way.",
      date: "22 Jun 2023",
      avatar: "S",
      verified: true
    },
    {
      id: 5,
      name: "Maya Pillai",
      rating: 5,
      text: "Great service! Very friendly support and transparent dealings. We are extremely satisfied with Real Estate WorlD's services.",
      date: "23 Jun 2023",
      avatar: "M",
      verified: true
    },
    {
      id: 6,
      name: "Vinod Nair",
      rating: 5,
      text: "Fast and good service. Affordable pricing and excellent customer support. Thank you Real Estate WorlD for making our dream home possible!",
      date: "6 weeks ago",
      avatar: "V",
      verified: true
    },
    {
      id: 7,
      name: "Sheeba Pillai",
      rating: 5,
      text: "Super Service, Good Behaviour. നന്ദി Sheeba mam, ഞങ്ങളുടെ ഉറപ്പുള്ള സ്ഥലം. കിട്ടിയതിൽ സന്തോഷം തോന്നുന്നു.",
      date: "6 weeks ago",
      avatar: "S",
      verified: true
    },
    {
      id: 8,
      name: "Sobha Nair",
      rating: 5,
      text: "Very helpful service from Real Estate WorlD. Professional approach and excellent market understanding. Highly recommended for all property needs!",
      date: "17 Jul 2024",
      avatar: "S",
      verified: true
    }
  ];

  // Enhanced auto-scroll with smooth animation and visibility detection
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('reviews-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="reviews-section" 
      className="py-20 bg-gradient-to-br from-background via-background/95 to-card/10 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-primary text-sm font-premium font-semibold uppercase tracking-wider">
              Google My Business Reviews
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-ultra font-bold mt-6 mb-8 leading-tight">
            <span className="text-gradient-ultra drop-shadow-lg">Real Estate WorlD</span>
            <br />
            <span className="text-gradient-animate">Client Reviews</span>
          </h2>
          
          {/* Enhanced Rating Display */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 p-4 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-8 h-8 text-primary fill-primary drop-shadow-lg animate-pulse" 
                    style={{ animationDelay: `${star * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="text-4xl font-ultra text-primary">4.9</div>
                <div className="text-sm text-primary/80 font-premium">out of 5</div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-luxury font-bold text-foreground">39+ Reviews</div>
              <div className="text-muted-foreground font-premium">Verified Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Enhanced Reviews Carousel */}
        <div className={`relative max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-800 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={review.id} className="w-full flex-shrink-0 px-6">
                  <div className="card-ultra p-10 text-left max-w-5xl mx-auto hover-glow group">
                    {/* Google-style header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-ultra rounded-full flex items-center justify-center text-primary-foreground font-ultra text-xl border-2 border-primary/20">
                          {review.avatar}
                        </div>
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-luxury font-bold text-xl text-foreground">{review.name}</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className="w-5 h-5 text-primary fill-primary" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-muted-foreground text-sm font-premium flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google Review • {review.date}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Review Text */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
                      <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed font-premium ml-6 group-hover:text-foreground transition-colors duration-300">
                        {review.text}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-gradient-ultra shadow-lg' 
                    : 'w-3 h-3 bg-muted-foreground/30 hover:bg-primary/50 hover:scale-125'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Google Reviews CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-glass p-8 max-w-3xl mx-auto hover-lift group">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-luxury font-bold mb-2">
                  View All <span className="text-gradient-ultra">ReaL EstatE WorlD</span> Reviews
                </h3>
                <p className="text-muted-foreground font-premium">
                  Read authentic reviews from our satisfied clients on Google My Business
                </p>
              </div>
            </div>
            
            <button 
              className="btn-ultra text-lg px-8 py-4 hover-lift font-premium group-hover:scale-105 transition-transform duration-300"
              onClick={() => window.open('https://www.google.com/search?q=ReaL+EstatE+WorlD+kerala+reviews', '_blank')}
            >
              <span className="flex items-center gap-3">
                View All Google Reviews
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;