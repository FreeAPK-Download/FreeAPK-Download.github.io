import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const favorites = [
  { name: "Sushi Palace", cuisine: "Japanese", rating: 4.8, time: "25-35 min", distance: "1.8 km", image: "🍱" },
  { name: "Thai Kitchen", cuisine: "Thai", rating: 4.6, time: "35-45 min", distance: "2.1 km", image: "🍜" },
];

const MyList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Heart className="w-10 h-10 text-destructive fill-destructive" />
            My Favorites
          </h1>
          <p className="text-muted-foreground">Your saved restaurants and meals</p>
        </div>
        
        {favorites.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((restaurant, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center text-6xl relative">
                  {restaurant.image}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                  >
                    <Heart className="w-5 h-5 text-destructive fill-destructive" />
                  </Button>
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
        ) : (
          <Card className="p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-6">
              Start exploring and save your favorite restaurants
            </p>
            <Button asChild className="bg-gradient-primary hover:opacity-90">
              <Link to="/explore">Explore Restaurants</Link>
            </Button>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
