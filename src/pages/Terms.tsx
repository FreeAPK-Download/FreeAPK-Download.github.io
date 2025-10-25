import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <Card className="p-8">
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using OddleEats, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to these terms, please do not use 
              our service.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Use of Service</h2>
            <p className="mb-6">
              You agree to use our service only for lawful purposes and in accordance with these 
              Terms. You must not use our service in any way that causes damage to the service or 
              impairs its availability or accessibility.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="mb-6">
              When you create an account with us, you must provide accurate and complete information. 
              You are responsible for maintaining the confidentiality of your account and password.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Orders and Payments</h2>
            <p className="mb-6">
              All orders are subject to acceptance and availability. Prices are subject to change 
              without notice. Payment must be made in full before order processing.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Cancellations and Refunds</h2>
            <p className="mb-6">
              Cancellation policies vary by restaurant. Refunds are issued at our discretion and 
              in accordance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="mb-6">
              The service and its original content, features, and functionality are owned by 
              OddleEats and are protected by international copyright, trademark, and other 
              intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall OddleEats be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of the service.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any 
              changes by posting the new Terms of Service on this page.
            </p>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
