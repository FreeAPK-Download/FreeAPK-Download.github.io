import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Calendar, Package } from "lucide-react";
import corporateFood from "@/assets/corporate-food.jpg";

const OddleFeeds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${corporateFood})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Corporate Meal Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hassle-free meal delivery for teams, meetings, and corporate events
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Office Delivery</h3>
            <p className="text-sm text-muted-foreground">Direct to your workplace</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Group Orders</h3>
            <p className="text-sm text-muted-foreground">Feed your entire team</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Scheduled</h3>
            <p className="text-sm text-muted-foreground">Plan meals in advance</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Package className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Variety</h3>
            <p className="text-sm text-muted-foreground">1,500+ restaurant options</p>
          </Card>
        </div>
        
        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Get Started</h2>
            <p className="text-muted-foreground">
              Fill in your details and we'll help you set up corporate meal delivery
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <Input placeholder="Enter your company name" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Contact Person</label>
              <Input placeholder="Enter your name" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <Input type="email" placeholder="your.email@company.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Team Size</label>
              <Input type="number" placeholder="Number of employees" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Delivery Address</label>
              <Input placeholder="Office address" />
            </div>
            
            <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6">
              Request Corporate Account
            </Button>
          </form>
        </Card>
        
        {/* Popular Packages */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Badge className="mb-4">Breakfast</Badge>
              <h3 className="text-xl font-bold mb-2">Morning Boost</h3>
              <p className="text-muted-foreground mb-4">
                Coffee, pastries, and breakfast items
              </p>
              <div className="text-2xl font-bold mb-4">$15 <span className="text-sm font-normal text-muted-foreground">per person</span></div>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
            
            <Card className="p-6 border-primary border-2">
              <Badge className="mb-4 bg-primary">Most Popular</Badge>
              <h3 className="text-xl font-bold mb-2">Team Lunch</h3>
              <p className="text-muted-foreground mb-4">
                Full meals with variety of cuisines
              </p>
              <div className="text-2xl font-bold mb-4">$25 <span className="text-sm font-normal text-muted-foreground">per person</span></div>
              <Button className="w-full bg-gradient-primary hover:opacity-90">Select Package</Button>
            </Card>
            
            <Card className="p-6">
              <Badge className="mb-4" variant="secondary">Premium</Badge>
              <h3 className="text-xl font-bold mb-2">Executive Catering</h3>
              <p className="text-muted-foreground mb-4">
                Premium selections for special events
              </p>
              <div className="text-2xl font-bold mb-4">$45 <span className="text-sm font-normal text-muted-foreground">per person</span></div>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OddleFeeds;
