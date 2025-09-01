import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | ReaL EstatE WorlD</title>
        <meta name="description" content="Terms and Conditions for ReaL EstatE WorlD - Rules and guidelines for using our real estate services." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="mb-6">
              Welcome to ReaL EstatE WorlD. By accessing or using our website (realestateworldkerala.com), you agree to be bound by these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Services</h2>
            <p className="mb-6">
              We provide real estate consultancy services including property buying, selling, and rental services across Kerala.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>You agree to provide accurate and truthful information when contacting us or listing properties.</li>
              <li>You must not use our website for illegal or fraudulent activities.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p className="mb-6">
              All content on this website, including text, images, and branding, is owned by ReaL EstatE WorlD and may not be copied without permission.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              We strive to provide accurate information, but we are not liable for any losses or damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p className="mb-6">
              We may update these terms at any time. Continued use of our website indicates your acceptance of any changes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              Email: info@realestateworldkerala.com<br/>
              Phone: +91 94472 58746
            </p>

            <p className="text-sm text-muted-foreground mt-8">Effective Date: 2025-08-24</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsConditions;