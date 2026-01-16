import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About OddleEats</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting food lovers with the best dining experiences across Singapore
          </p>
        </div>
        
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in the heart of Singapore, OddleEats began as a small initiative to help local restaurants reach more customers through digital innovation. Over the years, we have evolved into a comprehensive food discovery ecosystem that bridges the gap between passionate chefs and food enthusiasts. Our journey is driven by a deep love for Singapore's diverse culinary landscape and a commitment to excellence in every delivery.
          </p>
          <p className="text-muted-foreground mb-4">
            Today, we are proud to be a trusted partner for over 1,500 establishments, ranging from neighborhood gems to Michelin-starred restaurants. We have served millions of meals, each one representing a connection made and a story shared over the dinner table. Our platform is designed with both the diner and the restaurateur in mind, ensuring a seamless experience from browsing to the first bite.
          </p>
          <p className="text-muted-foreground">
            As we look to the future, we remain dedicated to our core mission of empowering the F&B industry through technology while providing our community with unparalleled access to quality dining experiences. Thank you for being part of our story and letting us be part of yours.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">100K+ Users</h3>
            <p className="text-sm text-muted-foreground">Active monthly users</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">1,500+ Restaurants</h3>
            <p className="text-sm text-muted-foreground">Partner restaurants</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">5+ Years</h3>
            <p className="text-sm text-muted-foreground">Of excellence</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">99% Satisfaction</h3>
            <p className="text-sm text-muted-foreground">Customer rating</p>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            To revolutionize the way people discover and enjoy food by providing a seamless 
            platform that connects diners with the best restaurants, while supporting local 
            businesses and creating meaningful employment opportunities.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Quality First:</strong> We partner only with restaurants that meet our high standards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Customer Focused:</strong> Your satisfaction is our top priority</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Innovation:</strong> We constantly improve our platform and services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Community:</strong> We support local businesses and create jobs</span>
            </li>
          </ul>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default About;
