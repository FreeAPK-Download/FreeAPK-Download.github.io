
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, ShoppingCart, Plus, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Import images
import italianPasta from "@/assets/italian-pasta.jpg";
import italianPizza from "@/assets/italian-pizza.jpg";
import japaneseSushi from "@/assets/japanese-sushi.jpg";
import japaneseRamen from "@/assets/japanese-ramen.jpg";
import chineseDimsum from "@/assets/chinese-dimsum.jpg";
import chineseNoodles from "@/assets/chinese-noodles.jpg";
import fastfoodBurger from "@/assets/fastfood-burger.jpg";
import fastfoodFries from "@/assets/fastfood-fries.jpg";
import healthySalad from "@/assets/healthy-salad.jpg";
import healthyBowl from "@/assets/healthy-bowl.jpg";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  restaurant: string;
  prepTime: string;
  tags: string[];
}

const menuItems: MenuItem[] = [
  // Italian
  {
    id: 1,
    name: "Spaghetti Carbonara",
    category: "Italian",
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.8,
    reviews: 245,
    image: italianPasta,
    description: "Creamy pasta with crispy bacon, parmesan cheese, and egg yolk. Made with authentic Italian ingredients and traditional cooking methods.",
    restaurant: "Italian Bistro",
    prepTime: "25-30 min",
    tags: ["Popular", "Best Seller"]
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Italian",
    price: 16.99,
    rating: 4.7,
    reviews: 189,
    image: italianPizza,
    description: "Classic wood-fired pizza with fresh mozzarella, tomato sauce, and basil. Thin crispy crust baked to perfection in our traditional stone oven.",
    restaurant: "Pizza Corner",
    prepTime: "20-25 min",
    tags: ["Vegetarian"]
  },
  // Japanese
  {
    id: 3,
    name: "Premium Sushi Platter",
    category: "Japanese",
    price: 32.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 312,
    image: japaneseSushi,
    description: "Assorted premium sushi with salmon, tuna, and eel. Includes 16 pieces of chef's selection sushi and sashimi made fresh daily.",
    restaurant: "Sushi Palace",
    prepTime: "30-35 min",
    tags: ["Premium", "Chef's Choice"]
  },
  {
    id: 4,
    name: "Tonkotsu Ramen",
    category: "Japanese",
    price: 15.99,
    rating: 4.8,
    reviews: 276,
    image: japaneseRamen,
    description: "Rich pork bone broth with tender chashu, soft-boiled egg, and fresh noodles. Slow-cooked for 12 hours for maximum flavor.",
    restaurant: "Ramen House",
    prepTime: "20-25 min",
    tags: ["Comfort Food", "Popular"]
  },
  // Chinese
  {
    id: 5,
    name: "Dim Sum Deluxe Set",
    category: "Chinese",
    price: 22.99,
    rating: 4.7,
    reviews: 198,
    image: chineseDimsum,
    description: "Steamed dim sum variety including har gow, siu mai, and BBQ pork buns. Served with special dipping sauces and fresh ginger.",
    restaurant: "Chinese Dragon",
    prepTime: "25-30 min",
    tags: ["Sharing Platter"]
  },
  {
    id: 6,
    name: "Dan Dan Noodles",
    category: "Chinese",
    price: 13.99,
    rating: 4.6,
    reviews: 165,
    image: chineseNoodles,
    description: "Spicy Sichuan noodles with minced pork, peanuts, and chili oil. Authentic recipe with the perfect balance of savory and spicy flavors.",
    restaurant: "Noodle Master",
    prepTime: "15-20 min",
    tags: ["Spicy", "Quick"]
  },
  // Fast Food
  {
    id: 7,
    name: "Double Cheese Burger",
    category: "Fast Food",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.5,
    reviews: 432,
    image: fastfoodBurger,
    description: "Juicy double beef patties with melted cheddar, lettuce, tomato, and special sauce. Served with crispy pickles on a toasted brioche bun.",
    restaurant: "Burger House",
    prepTime: "15-20 min",
    tags: ["Fast", "Best Value"]
  },
  {
    id: 8,
    name: "Loaded Fries",
    category: "Fast Food",
    price: 8.99,
    rating: 4.4,
    reviews: 287,
    image: fastfoodFries,
    description: "Crispy golden fries topped with cheese sauce, bacon bits, jalapeños, and sour cream. Perfect as a snack or side dish.",
    restaurant: "Fries & More",
    prepTime: "10-15 min",
    tags: ["Shareable", "Quick"]
  },
  // Healthy
  {
    id: 9,
    name: "Mediterranean Salad Bowl",
    category: "Healthy",
    price: 14.99,
    rating: 4.7,
    reviews: 203,
    image: healthySalad,
    description: "Fresh mixed greens with grilled chicken, feta cheese, olives, cherry tomatoes, and balsamic vinaigrette. Packed with protein and nutrients.",
    restaurant: "Green Life",
    prepTime: "15-20 min",
    tags: ["Low Calorie", "High Protein"]
  },
  {
    id: 10,
    name: "Poke Bowl",
    category: "Healthy",
    price: 16.99,
    rating: 4.8,
    reviews: 256,
    image: healthyBowl,
    description: "Hawaiian-style bowl with fresh salmon, avocado, edamame, seaweed, and brown rice. Topped with sesame seeds and ponzu sauce.",
    restaurant: "Fresh Bowl Co.",
    prepTime: "20-25 min",
    tags: ["Gluten-Free", "Omega-3 Rich"]
  },
];

const Explore = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const categories = ["All", "Italian", "Japanese", "Chinese", "Fast Food", "Healthy"];

  const addToCart = (itemId: number, itemName: string) => {
    setCart([...cart, itemId]);
    toast({
      title: "Added to cart!",
      description: `${itemName} has been added to your order.`,
    });
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cart.length} />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Our Menu</h1>
          <p className="text-muted-foreground">Discover delicious food from various cuisines with exclusive offers</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for dishes, restaurants..." 
              className="pl-10 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 px-8">
            Search
          </Button>
        </div>
        
        {/* Category Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedCategory === category 
                  ? "bg-gradient-primary text-white" 
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        
        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.tags.length > 0 && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} className="bg-gradient-primary shadow-lg">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all">
                  <Heart className="w-5 h-5 text-primary" />
                </button>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.restaurant}</p>
                  </div>
                  <Badge variant="outline" className="ml-2">{item.category}</Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{item.rating}</span>
                    <span className="text-muted-foreground">({item.reviews})</span>
                  </div>
                  <span className="text-muted-foreground">{item.prepTime}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  {item.originalPrice && (
                    <Badge variant="destructive" className="bg-red-500">
                      Save ${(item.originalPrice - item.price).toFixed(2)}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    onClick={() => addToCart(item.id, item.name)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                  <Button variant="outline" className="px-4">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No items found matching your search.</p>
            <Button 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;
