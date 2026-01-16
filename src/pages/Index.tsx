import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Truck, ShoppingBag, Calendar, ArrowRight, Shield, Award, Clock, MapPin, Star, Zap } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import insiderCard from "@/assets/insider-card.jpg";
import corporateFood from "@/assets/corporate-food.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Your One-Stop<br />Food Discovery Platform
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Over 1,500+ selections for Island-wide Delivery, Pick up and Reservations.
          </p>
          
          {/* Search Card */}
          <Card className="max-w-2xl mx-auto p-6 bg-white shadow-2xl">
            <Tabs defaultValue="delivery" className="mb-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="delivery" className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Delivery
                </TabsTrigger>
                <TabsTrigger value="pickup" className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Pick up
                </TabsTrigger>
                <TabsTrigger value="reservations" className="flex items-center gap-2 relative">
                  <Calendar className="w-4 h-4" />
                  Reservations
                  <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-left">For when</label>
                <Input 
                  type="text" 
                  placeholder="Today, 12:00 PM" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-left">To where</label>
                <Input 
                  type="text" 
                  placeholder="Anywhere" 
                  className="w-full"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
              >
                Find food
              </Button>
              
              <Link 
                to="/explore" 
                className="block text-center text-primary hover:underline text-sm"
              >
                Skip and explore all restaurants
              </Link>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Featured Sections */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Corporate Orders */}
          <Link to="/oddle-feeds">
            <Card className="relative overflow-hidden h-80 group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${corporateFood})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Meal Delivery For Offices</h3>
                <p className="text-white/90 mb-4">Perfect for team lunches and corporate events</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>
          
          {/* Insider Program */}
          <Link to="/insider">
            <Card className="relative overflow-hidden h-80 group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${insiderCard})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Your Insider Pass to Dining Privileges</h3>
                <p className="text-white/90 mb-4">Exclusive perks and rewards for members</p>
                <Button className="bg-gradient-gold text-foreground hover:opacity-90">
                  Join the waitlist <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose OddleEats?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the best food delivery and dining platform in Singapore
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Get your food delivered in 30 minutes or less from our partner restaurants
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
            <p className="text-muted-foreground">
              Every restaurant is carefully vetted to ensure the highest quality standards
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rewards Program</h3>
            <p className="text-muted-foreground">
              Earn points with every order and unlock exclusive dining privileges
            </p>
          </Card>
        </div>
      </section>

      {/* Popular Cuisines */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Cuisines</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Japanese", emoji: "🍱", description: "Fresh sushi, ramen, and traditional Japanese delicacies." },
              { name: "Chinese", emoji: "🥢", description: "Authentic Cantonese, Szechuan, and local Chinese favorites." },
              { name: "Italian", emoji: "🍝", description: "Hand-crafted pasta, wood-fired pizzas, and fine Italian wines." },
              { name: "Indian", emoji: "🍛", description: "Rich curries, tandoori specialties, and aromatic spices." },
              { name: "Thai", emoji: "🍜", description: "Bold flavors, spicy stir-fries, and classic Pad Thai." },
              { name: "Korean", emoji: "🍲", description: "Bibimbap, Korean BBQ, and comforting stews." },
              { name: "Western", emoji: "🍔", description: "Juicy burgers, steaks, and classic American comfort food." },
              { name: "Desserts", emoji: "🍰", description: "Sweet treats, artisanal cakes, and gourmet pastries." },
              { name: "Healthy", emoji: "🥗", description: "Nutritious bowls, fresh salads, and organic options." },
              { name: "Fast Food", emoji: "🍕", description: "Quick bites, pizzas, and tasty on-the-go meals." },
              { name: "Seafood", emoji: "🦐", description: "Fresh catch of the day and premium seafood platters." },
              { name: "Vegetarian", emoji: "🥬", description: "Delicious plant-based meals and creative veggie dishes." },
            ].map((cuisine) => (
              <Link key={cuisine.name} to="/explore">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {cuisine.emoji}
                  </div>
                  <p className="font-semibold mb-1">{cuisine.name}</p>
                  <p className="text-xs text-muted-foreground">{cuisine.description}</p>
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 container mx-auto px-4 bg-muted/30">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Choose Your Food</h3>
            <p className="text-muted-foreground">
              Browse through 1,500+ restaurants and select your favorite dishes
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
            <p className="text-muted-foreground">
              Easy checkout with multiple payment options and real-time tracking
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Enjoy Your Meal</h3>
            <p className="text-muted-foreground">
              Fast delivery to your doorstep or convenient pickup from the restaurant
            </p>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Restaurants</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Sushi Paradise", cuisine: "Japanese", rating: 4.8, time: "25-30 min", distance: "1.2 km" },
            { name: "Pasta House", cuisine: "Italian", rating: 4.7, time: "30-35 min", distance: "2.1 km" },
            { name: "Spice Kingdom", cuisine: "Indian", rating: 4.9, time: "20-25 min", distance: "0.8 km" },
          ].map((restaurant, index) => (
            <Link key={index} to="/explore">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                  🍽️
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {restaurant.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{restaurant.cuisine}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{restaurant.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 container mx-auto px-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl my-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight">Get the OddleEats Mobile App</h2>
            <p className="text-xl text-muted-foreground">Download the menu delivery order app for the best food discovery experience in Singapore. Order from 1,500+ restaurants on the go.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 py-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📱</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase">Download for</div>
                    <div className="text-lg font-bold leading-none">Android APK</div>
                  </div>
                </div>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 rounded-xl border-2">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🍎</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase">Download for</div>
                    <div className="text-lg font-bold leading-none">iOS App Store</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-[500px] bg-background border-[8px] border-black rounded-[3rem] shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
              <div className="p-4 space-y-4 pt-10">
                <div className="h-40 bg-muted rounded-2xl animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 bg-muted rounded-xl animate-pulse" />
                  <div className="h-20 bg-muted rounded-xl animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for better SEO and Content Value */}
      <section className="py-16 container mx-auto px-4 bg-background">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-2">How does OddleEats work?</h3>
            <p className="text-muted-foreground">OddleEats is a comprehensive food discovery platform that connects you with over 1,500 restaurants in Singapore. You can browse menus, place orders for delivery or pickup, and even make table reservations all in one place.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-2">What are the delivery areas?</h3>
            <p className="text-muted-foreground">We offer island-wide delivery across Singapore. Whether you're in Jurong, Tampines, or the Central Business District, our partner restaurants and delivery fleet ensure your food arrives fresh and on time.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-2">Are there exclusive rewards for members?</h3>
            <p className="text-muted-foreground">Yes! By joining our Insider program, you gain access to exclusive dining privileges, earn points on every order, and receive early notifications about new restaurant launches and special promotions.</p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
