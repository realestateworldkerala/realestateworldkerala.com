import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kerala Real Estate Blog - ReaL EstatE WorlD</title>
        <meta
          name="description"
          content="Kerala culture and real estate insights: Thiruvananthapuram, Padmanabhaswamy Temple, Thrissur Pooram, hill stations, beaches, Kochi, Nilambur teak, SM Street."
        />
        <link rel="canonical" href="https://realestateworldkerala.com/blog" />
      </Helmet>

      <Header />

      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <div className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-medium mb-4">
              Kerala & Real Estate Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-luxury font-bold text-primary">
              Insights from ReaL EstatE WorlD
            </h1>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Explore Kerala’s culture, places, festivals and property insights – curated for buyers, sellers and investors.
            </p>
          </header>

          {/* Thiruvananthapuram */}
          <article id="thiruvananthapuram" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">
              Exploring Thiruvananthapuram: The Capital City of Kerala
            </h2>
            <img
              src="/lovable-uploads/35092910-c06e-45dd-ad64-f36fdaa2b037.png"
              alt="Kerala Legislative Assembly in Thiruvananthapuram - Kerala capital city landmark"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground mb-4">
              Thiruvananthapuram (Trivandrum), Kerala’s capital and largest city, blends ancient traditions with modern aspirations.
            </p>
            <p className="text-muted-foreground mb-4">
              The name translates to “City of Lord Ananta,” linked to the iconic Sree Padmanabhaswamy Temple. The Legislative Assembly complex reflects Kerala’s architectural legacy.
            </p>
            <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Must‑Visit Attractions</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Sree Padmanabhaswamy Temple – architectural grandeur dedicated to Lord Vishnu.</li>
              <li>Napier Museum – archaeological artifacts and bronze idols.</li>
              <li>Kovalam Beach – world famous crescent beaches and shallow waters.</li>
              <li>Shankumugham Beach – serene sunsets and fresh sea breeze.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              A cultural and academic hub with Technopark and excellent connectivity, Thiruvananthapuram is ideal for life and investment.
            </p>
          </article>

          {/* Sree Padmanabhaswamy Temple */}
          <article id="padmanabhaswamy-temple" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">
              Sree Padmanabhaswamy Temple: History, Devotion and Mystery
            </h2>
            <img
              src="/lovable-uploads/49813c52-c1b5-47d6-bf63-5a0869b049b6.png"
              alt="Sree Padmanabhaswamy Temple in Thiruvananthapuram reflecting in the temple pond"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground mb-4">
              A magnificent fusion of Dravidian and Kerala styles, renowned for its seven‑tiered gopuram and the deity of Lord Vishnu in Anantha‑Shayana posture.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Kulasekhara Mandapam and Ottakkal Mandapam showcase masterful stone work.</li>
              <li>Dhvajastambham – an 80‑foot golden flagstaff symbolizes grandeur.</li>
              <li>The vaults and legends add enduring intrigue to the temple’s legacy.</li>
            </ul>
          </article>

          {/* Thrissur Pooram */}
          <article id="thrissur-pooram" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Thrissur Pooram: The Grand Festival of Festivals</h2>
            <img
              src="/lovable-uploads/a77466eb-9f41-4bdf-b4aa-1d5a8d9f7483.png"
              alt="Thrissur Pooram festival elephants with golden caparisons and colorful umbrellas"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground mb-4">
              A 36‑hour spectacle uniting temples and communities with elephant processions, melam, Kudamattam and breathtaking fireworks.
            </p>
          </article>

          {/* Hill Stations */}
          <article id="hill-stations" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Kerala’s Hill Stations</h2>
            <p className="text-muted-foreground mb-4">
              From tea‑clad Munnar to biodiverse Wayanad, tranquil Vagamon and wildlife‑rich Thekkady – Kerala’s hills are perfect for nature, trekking and wellness.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Munnar – tea gardens, Eravikulam National Park, Anamudi Peak.</li>
              <li>Wayanad – Edakkal Caves, Chembra Peak, wildlife sanctuary.</li>
              <li>Vagamon – meadows, pine forest, paragliding and Marmala Falls.</li>
              <li>Thekkady – Periyar National Park, spice plantations, bamboo rafting.</li>
            </ul>
          </article>

          {/* Waterfalls */}
          <article id="waterfalls" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Kerala’s Waterfalls</h2>
            <img
              src="/lovable-uploads/164f0f6d-f977-4894-80b3-6f01598c4bdb.png"
              alt="Scenic Kerala waterfall flowing through lush forests"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Athirappilly – the Niagara of South India on the Chalakudy River.</li>
              <li>Soochipara – three‑tiered cascade amid Wayanad’s forests.</li>
              <li>Meenmutty – a towering multi‑tiered fall inside Wayanad sanctuary.</li>
              <li>Thusharagiri and Vazhachal – scenic treks and rich biodiversity.</li>
            </ul>
          </article>

          {/* Beaches */}
          <article id="beaches" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Kerala’s Beaches</h2>
            <img
              src="/lovable-uploads/466e0d9c-8979-4372-9eaf-75d3bb91aba3.png"
              alt="Kovalam Lighthouse beach golden sunset view"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Kovalam – lighthouse views, water sports and Ayurveda.</li>
              <li>Varkala – dramatic red laterite cliffs over the sea.</li>
              <li>Marari – tranquil fishing village vibes and eco‑stays.</li>
              <li>Muzhappilangad – Asia’s longest drive‑in beach experience.</li>
              <li>Cherai – sea on one side and backwaters on the other.</li>
            </ul>
          </article>

          {/* Kochi Metro City */}
          <article id="kochi" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Kochi: Kerala’s Metro City</h2>
            <img
              src="/lovable-uploads/1b2b95cc-cbee-41d7-951c-ad6bb86bca10.png"
              alt="Aerial view of Kochi city and backwaters with boats"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground">
              A commercial powerhouse with Infopark, Water Metro and a world‑class port – Kochi blends heritage with modern infrastructure.
            </p>
          </article>

          {/* Nilambur Teak */}
          <article id="nilambur-teak" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Nilambur Teak: The Mecca of Teak</h2>
            <img
              src="/lovable-uploads/335e10f3-61fc-4d01-8547-4cb37c4bbed4.png"
              alt="Nilambur teak tree with identification plaque in forest"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground">
              GI‑tagged for its golden‑brown hue, durability and fine grain; celebrated at the Nilambur Teak Museum and Conolly’s Plot.
            </p>
          </article>

          {/* SM Street */}
          <article id="sm-street" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">SM Street, Kozhikode (Mithai Theruvu)</h2>
            <img
              src="/lovable-uploads/3a431ae5-2cd5-41ff-846e-ad0b8551bbac.png"
              alt="Busy SM Street in Kozhikode with shops and people walking"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground">
              A historic pedestrian‑friendly market famed for Kozhikodan halwa, textiles, jewelry and rich literary heritage.
            </p>
          </article>

          {/* Kathakali */}
          <article id="kathakali" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Kathakali: The Storytelling Dance of Kerala</h2>
            <img
              src="/lovable-uploads/b335a157-13c5-49bc-bdfc-277f4a918ae6.png"
              alt="Kathakali artists in full costume performing on stage"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground mb-4">
              A 17th‑century dance‑drama famed for elaborate makeup, costumes, mudras and navarasa expressions.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Pachcha (Green) – heroic and virtuous characters.</li>
              <li>Kathi (Knife) – brave yet evil roles.</li>
              <li>Kari (Black) – demonic figures.</li>
              <li>Thaadi (Beard) – demon variants like Chuvanna Thaadi.</li>
              <li>Minukku (Polished) – gentle, refined characters.</li>
            </ul>
          </article>

          {/* My Own Home – Malayali Dream */}
          <article id="malayali-home-dream" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">My Own Home: The Dream of Every Malayali</h2>
            <img
              src="/lovable-uploads/0ba56ac9-9dd7-4d24-b2a0-fd67dcf614e0.png"
              alt="Traditional Kerala home with sloping tiled roof and garden"
              className="w-full h-64 md:h-96 object-cover rounded-xl border border-border mb-6"
              loading="lazy"
            />
            <p className="text-muted-foreground">
              A home is more than a building – it’s the culmination of hard work, dreams and family bonds. From Gulf dreams to modern designs, Malayalis cherish the journey to ownership.
            </p>
          </article>

          {/* Mohanlal (Lalettan) */}
          <article id="mohanlal" className="mb-16">
            <h2 className="text-3xl font-luxury font-bold text-primary mb-4">Lalettan: The Complete Actor and Cultural Icon</h2>
            <p className="text-muted-foreground">
              Mohanlal’s four‑decade career spans iconic roles from Bharatham and Vanaprastham to Spadikam. A versatile actor, producer and philanthropist – beloved as “Lalettan” across India.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
