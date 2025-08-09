import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Priya Nair",
      rating: 5,
      text: "Excellent service! Real Estate World helped us find our dream home in Thiruvananthapuram. Professional and trustworthy.",
      location: "Thiruvananthapuram"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Sold my property in Kochi through them. Got the best price and hassle-free process. Highly recommended!",
      location: "Kochi"
    },
    {
      name: "Meera Joseph",
      rating: 5,
      text: "Amazing experience buying our villa in Munnar. Their local knowledge and guidance made everything smooth.",
      location: "Munnar"
    },
    {
      name: "Anish Thomas",
      rating: 5,
      text: "Best real estate service in Kerala. Transparent dealing and excellent customer support throughout.",
      location: "Alleppey"
    },
    {
      name: "Lakshmi Menon",
      rating: 5,
      text: "Found the perfect rental apartment in Technopark area. Quick response and professional service.",
      location: "Thiruvananthapuram"
    },
    {
      name: "Suresh Pillai",
      rating: 5,
      text: "Their market knowledge is outstanding. Helped us make the right investment decision in Kochi.",
      location: "Kochi"
    },
    {
      name: "Divya Sharma",
      rating: 5,
      text: "Exceptional service from start to finish. Made our home buying journey stress-free and enjoyable.",
      location: "Kozhikode"
    },
    {
      name: "Arun Krishnan",
      rating: 5,
      text: "Professional team with deep local insights. Grateful for their patience and expertise.",
      location: "Thrissur"
    }
  ];

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-6">
            What Our Clients
            <span className="text-golden"> Say About Us</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-golden fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-primary">4.9</div>
            <div className="text-muted-foreground ml-2">based on 90 reviews</div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-soft text-center">
                    <Quote className="w-12 h-12 text-golden mx-auto mb-6 opacity-50" />
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-golden fill-current" />
                      ))}
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-1">{review.name}</h4>
                    <p className="text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentReview ? 'bg-golden' : 'bg-border'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>

        {/* Scrolling Reviews Bar */}
        <div className="relative overflow-hidden bg-gradient-primary rounded-xl p-6">
          <div className="flex animate-scroll space-x-8">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="flex items-center space-x-4 text-white whitespace-nowrap">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-golden fill-current" />
                  ))}
                </div>
                <span className="font-medium">{review.name}</span>
                <span className="text-silver-light">-</span>
                <span className="text-silver-light italic">"{review.text.slice(0, 60)}..."</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join our family of satisfied customers
          </p>
          <a 
            href="https://wa.me/919447258746" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-golden hover:text-golden-light transition-colors font-medium"
          >
            Share your experience with us →
          </a>
        </div>
      </div>

    </section>
  );
};

export default Reviews;