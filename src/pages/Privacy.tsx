import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <Card className="p-8">
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              place an order, or contact us for support. This may include your name, email address, 
              phone number, delivery address, and payment information.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              process your orders, send you updates and promotional materials, and respond to your 
              comments and questions.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="mb-6">
              We may share your information with restaurants and delivery partners to fulfill your 
              orders, with service providers who perform services on our behalf, and when required 
              by law or to protect our rights.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information from 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="mb-6">
              You have the right to access, update, or delete your personal information. You can 
              manage your account settings or contact us directly for assistance.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="mb-6">
              We use cookies and similar tracking technologies to track activity on our service and 
              store certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              support@oddleeats.com
            </p>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
