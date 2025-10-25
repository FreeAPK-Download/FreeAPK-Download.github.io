import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Gift, Percent, Star } from "lucide-react";
import insiderCard from "@/assets/insider-card.jpg";

const Insider = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${insiderCard})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-gradient-gold text-foreground">
            <Crown className="w-4 h-4 mr-1" />
            Exclusive Membership
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Your Insider Pass to<br />Dining Privileges
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Unlock exclusive perks, rewards, and VIP experiences
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Member Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Percent className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Exclusive Discounts</h3>
              <p className="text-sm text-muted-foreground">Up to 30% off at partner restaurants</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Birthday Treats</h3>
              <p className="text-sm text-muted-foreground">Special rewards on your birthday</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Priority Access</h3>
              <p className="text-sm text-muted-foreground">First access to new restaurants</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Crown className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">VIP Events</h3>
              <p className="text-sm text-muted-foreground">Exclusive dining experiences</p>
            </Card>
          </div>
        </div>
        
        {/* Membership Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-2">Silver</h3>
              <div className="text-3xl font-bold mb-4">$9.99<span className="text-sm font-normal text-muted-foreground">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>10% off all orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Free delivery once a month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Birthday reward</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Join Waitlist</Button>
            </Card>
            
            <Card className="p-6 border-accent border-2 relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-gradient-gold text-foreground">Popular</Badge>
              <h3 className="text-2xl font-bold mb-2">Gold</h3>
              <div className="text-3xl font-bold mb-4">$19.99<span className="text-sm font-normal text-muted-foreground">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span>20% off all orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span>Free delivery unlimited</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span>Exclusive events access</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-gold text-foreground hover:opacity-90">Join Waitlist</Button>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-2">Platinum</h3>
              <div className="text-3xl font-bold mb-4">$29.99<span className="text-sm font-normal text-muted-foreground">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>30% off all orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Free delivery unlimited</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Concierge service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>VIP events & tastings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Personal dining advisor</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Join Waitlist</Button>
            </Card>
          </div>
        </div>
        
        {/* Waitlist Form */}
        <Card className="max-w-2xl mx-auto p-8">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold mb-2">Join the Waitlist</h2>
            <p className="text-muted-foreground">
              Be among the first to experience Insider privileges
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input placeholder="Enter your name" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input type="tel" placeholder="+65 XXXX XXXX" />
            </div>
            
            <Button className="w-full bg-gradient-gold text-foreground hover:opacity-90 text-lg py-6">
              <Crown className="w-5 h-5 mr-2" />
              Join Insider Waitlist
            </Button>
          </form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Insider;
