
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Clock, MapPin, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import pizzaImg from '@assets/stock_images/realistic_4k_close_u_bce1074c.jpg'
import sushiImg from '@assets/stock_images/realistic_4k_sushi_p_9f490996.jpg'
import ramenImg from '@assets/stock_images/realistic_4k_bowl_of_d779278f.jpg'
import burgerImg from '@assets/stock_images/realistic_4k_gourmet_45d26ccd.jpg'
import healthyImg from '@assets/stock_images/realistic_4k_healthy_6e85fe65.jpg'
import carbonaraImg from '@assets/stock_images/realistic_4k_authent_c1fd19ec.jpg'
import dimSumImg from '@assets/stock_images/realistic_4k_assortm_898b4492.jpg'
import indianCurryImg from '@assets/stock_images/realistic_4k_authent_57c85766.jpg'

interface FoodItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  prepTime: string;
  restaurant: string;
}

const foodItems: FoodItem[] = [
  // Italian
  {
    id: 1,
    name: "Spaghetti Carbonara",
    category: "Italian",
    price: 18.99,
    description: "Creamy pasta with crispy pancetta, parmesan cheese, and farm-fresh eggs. A classic Roman dish made with authentic Italian ingredients.",
    image: carbonaraImg,
    rating: 4.8,
    prepTime: "25-30 min",
    restaurant: "Italian Bistro"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Italian",
    price: 16.50,
    description: "Wood-fired pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil on a perfectly crispy crust.",
    image: pizzaImg,
    rating: 4.9,
    prepTime: "20-25 min",
    restaurant: "Pizza Corner"
  },
  {
    id: 21,
    name: "Truffle Mushroom Risotto",
    category: "Italian",
    price: 24.50,
    description: "Arborio rice slow-cooked with wild mushrooms, black truffle oil, and aged parmesan.",
    image: pizzaImg,
    rating: 4.9,
    prepTime: "30-35 min",
    restaurant: "Italian Bistro"
  },
  {
    id: 22,
    name: "Seafood Linguine",
    category: "Italian",
    price: 26.99,
    description: "Fresh linguine tossed with prawns, mussels, and squid in a spicy tomato garlic sauce.",
    image: carbonaraImg,
    rating: 4.7,
    prepTime: "25-30 min",
    restaurant: "Italian Bistro"
  },
  {
    id: 3,
    name: "Lasagna Bolognese",
    category: "Italian",
    price: 19.99,
    description: "Layers of pasta with rich meat sauce, béchamel, and melted cheese. Baked to golden perfection.",
    image: carbonaraImg,
    rating: 4.7,
    prepTime: "30-35 min",
    restaurant: "Italian Bistro"
  },
  {
    id: 4,
    name: "Tiramisu",
    category: "Italian",
    price: 8.99,
    description: "Classic Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa powder.",
    image: carbonaraImg,
    rating: 4.9,
    prepTime: "15 min",
    restaurant: "Italian Bistro"
  },

  // Japanese
  {
    id: 5,
    name: "Sushi Platter",
    category: "Japanese",
    price: 28.99,
    description: "Assorted premium sushi including tuna, salmon, yellowtail, and eel. Served with wasabi, ginger, and soy sauce.",
    image: sushiImg,
    rating: 4.9,
    prepTime: "20-25 min",
    restaurant: "Sushi Palace"
  },
  {
    id: 23,
    name: "Wagyu Beef Don",
    category: "Japanese",
    price: 32.00,
    description: "Premium sliced Wagyu beef served over Japanese rice with an onsen egg and sweet soy glaze.",
    image: sushiImg,
    rating: 5.0,
    prepTime: "15-20 min",
    restaurant: "Sushi Palace"
  },
  {
    id: 24,
    name: "Matcha Lava Cake",
    category: "Japanese",
    price: 12.50,
    description: "Warm matcha cake with a molten center, served with vanilla bean ice cream.",
    image: sushiImg,
    rating: 4.8,
    prepTime: "15 min",
    restaurant: "Sushi Palace"
  },
  {
    id: 6,
    name: "Ramen Bowl",
    category: "Japanese",
    price: 15.99,
    description: "Rich pork bone broth with tender chashu pork, soft-boiled egg, bamboo shoots, and fresh noodles.",
    image: ramenImg,
    rating: 4.8,
    prepTime: "25-30 min",
    restaurant: "Sushi Palace"
  },
  {
    id: 7,
    name: "Chicken Teriyaki",
    category: "Japanese",
    price: 17.50,
    description: "Grilled chicken glazed with homemade teriyaki sauce, served with steamed rice and vegetables.",
    image: sushiImg,
    rating: 4.7,
    prepTime: "20-25 min",
    restaurant: "Sushi Palace"
  },
  {
    id: 8,
    name: "Tempura Set",
    category: "Japanese",
    price: 19.99,
    description: "Crispy light battered shrimp and seasonal vegetables, served with tentsuyu dipping sauce.",
    image: sushiImg,
    rating: 4.6,
    prepTime: "20-25 min",
    restaurant: "Sushi Palace"
  },

  // Chinese
  {
    id: 9,
    name: "Kung Pao Chicken",
    category: "Chinese",
    price: 14.99,
    description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce.",
    image: dimSumImg,
    rating: 4.7,
    prepTime: "20-25 min",
    restaurant: "Chinese Dragon"
  },
  {
    id: 10,
    name: "Sweet & Sour Pork",
    category: "Chinese",
    price: 15.50,
    description: "Crispy pork pieces tossed in tangy sweet and sour sauce with bell peppers and pineapple.",
    image: dimSumImg,
    rating: 4.6,
    prepTime: "25-30 min",
    restaurant: "Chinese Dragon"
  },
  {
    id: 11,
    name: "Dim Sum Platter",
    category: "Chinese",
    price: 18.99,
    description: "Assorted steamed dumplings including siu mai, har gow, and char siu bao. Perfect for sharing.",
    image: dimSumImg,
    rating: 4.8,
    prepTime: "20-25 min",
    restaurant: "Chinese Dragon"
  },
  {
    id: 25,
    name: "Butter Chicken",
    category: "Indian",
    price: 22.50,
    description: "Tender chicken in a rich tomato and butter sauce, served with garlic naan.",
    image: indianCurryImg,
    rating: 4.9,
    prepTime: "25-30 min",
    restaurant: "Spice Kingdom"
  },
  {
    id: 26,
    name: "Vegetable Biryani",
    category: "Indian",
    price: 18.99,
    description: "Fragrant basmati rice cooked with seasonal vegetables and aromatic spices.",
    image: indianCurryImg,
    rating: 4.8,
    prepTime: "30-35 min",
    restaurant: "Spice Kingdom"
  },
  {
    id: 12,
    name: "Chow Mein",
    category: "Chinese",
    price: 13.99,
    description: "Stir-fried noodles with vegetables, chicken, and savory sauce. A classic Chinese favorite.",
    image: dimSumImg,
    rating: 4.5,
    prepTime: "20-25 min",
    restaurant: "Chinese Dragon"
  },

  // Fast Food
  {
    id: 13,
    name: "Classic Cheeseburger",
    category: "Fast Food",
    price: 12.99,
    description: "Juicy beef patty with melted cheddar, lettuce, tomato, pickles, and special sauce on a toasted bun.",
    image: burgerImg,
    rating: 4.6,
    prepTime: "15-20 min",
    restaurant: "Burger House"
  },
  {
    id: 14,
    name: "Crispy Chicken Wings",
    category: "Fast Food",
    price: 11.99,
    description: "Golden fried chicken wings tossed in your choice of BBQ, buffalo, or honey garlic sauce.",
    image: burgerImg,
    rating: 4.7,
    prepTime: "20-25 min",
    restaurant: "Burger House"
  },
  {
    id: 15,
    name: "Loaded Fries",
    category: "Fast Food",
    price: 8.99,
    description: "Crispy fries topped with melted cheese, bacon bits, jalapeños, and sour cream.",
    image: burgerImg,
    rating: 4.5,
    prepTime: "15-20 min",
    restaurant: "Burger House"
  },
  {
    id: 16,
    name: "Chicken Nuggets",
    category: "Fast Food",
    price: 9.99,
    description: "Tender chicken breast pieces in a crispy golden coating. Served with your choice of dipping sauce.",
    image: burgerImg,
    rating: 4.4,
    prepTime: "15-20 min",
    restaurant: "Burger House"
  },

  // Healthy
  {
    id: 17,
    name: "Buddha Bowl",
    category: "Healthy",
    price: 14.99,
    description: "Quinoa base with roasted vegetables, chickpeas, avocado, and tahini dressing. Packed with nutrients.",
    image: healthyImg,
    rating: 4.8,
    prepTime: "20-25 min",
    restaurant: "Green Kitchen"
  },
  {
    id: 18,
    name: "Grilled Salmon Salad",
    category: "Healthy",
    price: 19.99,
    description: "Fresh Atlantic salmon over mixed greens with cherry tomatoes, cucumber, and lemon vinaigrette.",
    image: healthyImg,
    rating: 4.9,
    prepTime: "20-25 min",
    restaurant: "Green Kitchen"
  },
  {
    id: 19,
    name: "Acai Bowl",
    category: "Healthy",
    price: 12.99,
    description: "Organic acai blended with banana and berries, topped with granola, fresh fruit, and honey.",
    image: healthyImg,
    rating: 4.7,
    prepTime: "15-20 min",
    restaurant: "Green Kitchen"
  },
  {
    id: 20,
    name: "Protein Smoothie",
    category: "Healthy",
    price: 8.99,
    description: "Blend of banana, peanut butter, protein powder, almond milk, and spinach. Perfect post-workout drink.",
    image: healthyImg,
    rating: 4.6,
    prepTime: "10-15 min",
    restaurant: "Green Kitchen"
  },
];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const categories = ["All", "Italian", "Japanese", "Chinese", "Fast Food", "Healthy"];

  const filteredItems = foodItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const item = foodItems.find(i => i.id === parseInt(id));
      return sum + (item ? item.price * qty : 0);
    }, 0);
  };

  const handleViewCart = () => {
    navigate('/cart', { state: { cart, foodItems } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={getTotalItems()} />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Our Menu</h1>
          <p className="text-muted-foreground">Discover delicious food from various cuisines</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search food, cuisines..." 
              className="pl-10 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {getTotalItems() > 0 && (
            <Button 
              className="bg-gradient-primary hover:opacity-90 px-8"
              onClick={handleViewCart}
            >
              View Cart (${getTotalPrice().toFixed(2)})
            </Button>
          )}
        </div>
        
        {/* Category Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(category => (
            <Badge 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedCategory === category 
                  ? "bg-gradient-primary hover:opacity-90" 
                  : "hover:bg-primary hover:text-primary-foreground"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Food Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <Badge variant="outline" className="mb-2">{item.category}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">${item.price}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.prepTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <Link 
                    to={`/recipe/${item.id}`} 
                    className="text-primary hover:underline text-sm font-semibold flex items-center gap-1"
                  >
                    View Recipe & Ingredients <Plus className="w-3 h-3" />
                  </Link>
                </div>

                {cart[item.id] ? (
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="px-4 py-2 bg-primary/10 rounded-md font-bold">
                      {cart[item.id]}
                    </div>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                      onClick={() => addToCart(item.id)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90"
                    onClick={() => addToCart(item.id)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Order
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No items found matching your search.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
