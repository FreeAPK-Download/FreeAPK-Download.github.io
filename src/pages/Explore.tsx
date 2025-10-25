import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Clock, MapPin } from "lucide-react";

const restaurants = [
  { name: "Italian Bistro", cuisine: "Italian", rating: 4.5, time: "30-40 min", distance: "2.5 km", image: "🍝" },
  { name: "Sushi Palace", cuisine: "Japanese", rating: 4.8, time: "25-35 min", distance: "1.8 km", image: "🍱" },
  { name: "Burger House", cuisine: "American", rating: 4.3, time: "20-30 min", distance: "3.2 km", image: "🍔" },
  { name: "Thai Kitchen", cuisine: "Thai", rating: 4.6, time: "35-45 min", distance: "2.1 km", image: "🍜" },
  { name: "Pizza Corner", cuisine: "Italian", rating: 4.4, time: "25-35 min", distance: "1.5 km", image: "🍕" },
  { name: "Chinese Dragon", cuisine: "Chinese", rating: 4.7, time: "30-40 min", distance: "2.8 km", image: "🥡" },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
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
            <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center text-6xl">
                {restaurant.image}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
