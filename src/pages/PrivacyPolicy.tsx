import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ReaL EstatE WorlD</title>
        <meta name="description" content="Privacy Policy for ReaL EstatE WorlD - How we collect, use and protect your personal information." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="mb-6">
              At ReaL EstatE WorlD (realestateworldkerala.com), we respect your privacy and are committed to protecting the personal information you share with us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Contact information such as name, phone number, and email when you submit inquiries.</li>
              <li>Property details you share with us for listing or consultation.</li>
              <li>Website usage data collected via analytics tools.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>To respond to your inquiries and provide real estate services.</li>
              <li>To improve our website and marketing strategies.</li>
              <li>To comply with legal obligations if required.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
            <p className="mb-6">
              We do not sell, rent, or trade your personal information. We may share your data only with trusted partners for providing services or when required by law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
            <p className="mb-6">
              We may use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, contact us:</p>
            <p className="mb-6">
              Email: info@realestateworldkerala.com<br/>
              Phone: +91 94472 58746
            </p>

            <p className="text-sm text-muted-foreground">Effective Date: 2025-08-24</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;