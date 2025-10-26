
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Clock, MapPin, ShoppingCart, Plus } from "lucide-react";
import { useState } from "react";

const restaurants = [
  { 
    name: "Italian Bistro", 
    cuisine: "Italian", 
    rating: 4.5, 
    time: "30-40 min", 
    distance: "2.5 km", 
    image: "🍝",
    description: "Authentic Italian pasta and pizza with fresh ingredients imported directly from Italy",
    price: "$15-25"
  },
  { 
    name: "Sushi Palace", 
    cuisine: "Japanese", 
    rating: 4.8, 
    time: "25-35 min", 
    distance: "1.8 km", 
    image: "🍱",
    description: "Premium sushi and sashimi prepared by master chefs with the freshest seafood",
    price: "$20-35"
  },
  { 
    name: "Burger House", 
    cuisine: "American", 
    rating: 4.3, 
    time: "20-30 min", 
    distance: "3.2 km", 
    image: "🍔",
    description: "Juicy gourmet burgers with hand-cut fries and homemade sauces",
    price: "$10-18"
  },
  { 
    name: "Thai Kitchen", 
    cuisine: "Thai", 
    rating: 4.6, 
    time: "35-45 min", 
    distance: "2.1 km", 
    image: "🍜",
    description: "Spicy and flavorful Thai dishes from traditional recipes with aromatic herbs",
    price: "$12-22"
  },
  { 
    name: "Pizza Corner", 
    cuisine: "Italian", 
    rating: 4.4, 
    time: "25-35 min", 
    distance: "1.5 km", 
    image: "🍕",
    description: "Wood-fired pizzas with crispy crusts and premium toppings",
    price: "$14-24"
  },
  { 
    name: "Chinese Dragon", 
    cuisine: "Chinese", 
    rating: 4.7, 
    time: "30-40 min", 
    distance: "2.8 km", 
    image: "🥡",
    description: "Authentic Chinese cuisine with dim sum, noodles, and signature wok dishes",
    price: "$13-23"
  },
];

const Explore = () => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (restaurantName: string) => {
    setCart([...cart, restaurantName]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cart.length} />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Restaurants</h1>
          <p className="text-muted-foreground">Discover amazing food from local restaurants</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search restaurants, cuisines..." 
              className="pl-10 py-6"
            />
          </div>
          <Button className="bg-gradient-primary hover:opacity-90">
            Search
          </Button>
        </div>
        
        {/* Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            All
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Italian
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Japanese
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Chinese
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Fast Food
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Healthy
          </Badge>
        </div>
        
        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-7xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                <span className="relative z-10 drop-shadow-lg">{restaurant.image}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">{restaurant.name}</h3>
                  <Badge className="bg-gradient-primary">{restaurant.price}</Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-3 font-medium">{restaurant.cuisine}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {restaurant.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold">{restaurant.rating}</span>
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

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    onClick={() => addToCart(restaurant.name)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Order
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Menu
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
