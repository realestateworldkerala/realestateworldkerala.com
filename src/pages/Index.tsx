import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate in Trivandrum Kerala | Buy Sell Rent Villas Flats Houses | Top Property Dealers</title>
        <meta name="description" content="Find premium properties in Trivandrum, Kochi, Kerala. Buy, sell, rent villas, houses, flats, plots with 10+ years expert real estate consultants. 500+ properties sold, 427+ happy clients. Best property dealers in Kerala." />
        <meta name="keywords" content="real estate trivandrum, properties kerala, buy house kerala, sell property trivandrum, rent villa kochi, real estate agents kerala, property dealers trivandrum, luxury homes kerala, flats for sale kerala, plots trivandrum, commercial property kerala, residential property trivandrum" />
        <link rel="canonical" href="https://realestateworldkerala.com" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Real Estate World Kerala",
            "description": "Premier real estate consultants in Kerala specializing in residential and commercial properties",
            "url": "https://realestateworldkerala.com",
            "telephone": "+919447258746",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Real Estate World",
              "addressLocality": "Trivandrum", 
              "addressRegion": "Kerala",
              "postalCode": "695001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "8.5241",
              "longitude": "76.9366"
            },
            "openingHours": "Mo-Sa 09:00-19:00, Su 10:00-17:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "90"
            }
          })}
        </script>
      </Helmet>
      
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Properties />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer />
      
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-W2MJVSL2"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </div>
    </>
  );
};

export default Index;
