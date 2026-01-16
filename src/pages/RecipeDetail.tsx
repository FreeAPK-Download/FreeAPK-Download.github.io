import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Utensils, ChefHat } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// This would ideally come from a shared data file or API
const recipeDetails = {
  "1": {
    name: "Classic Spaghetti Carbonara",
    prepTime: "25 min",
    servings: "2",
    difficulty: "Medium",
    description: "A timeless Roman pasta dish that relies on the quality of its simple ingredients: farm-fresh eggs, aged Pecorino Romano, and crispy guanciale or pancetta.",
    ingredients: [
      "200g Spaghetti",
      "100g Pancetta or Guanciale, cubed",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Black pepper, freshly ground",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook spaghetti according to package directions until al dente.",
      "While pasta cooks, fry the pancetta in a large pan over medium heat until crispy. Remove from heat.",
      "In a small bowl, whisk the eggs and mix in the grated Pecorino Romano and plenty of black pepper.",
      "Reserve half a cup of pasta water, then drain the spaghetti.",
      "Quickly toss the hot pasta into the pan with the pancetta. Ensure the pan is not too hot to avoid scrambling the eggs.",
      "Pour the egg and cheese mixture over the pasta, tossing vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and pepper."
    ]
  },
  "2": {
    name: "Authentic Margherita Pizza",
    prepTime: "20 min",
    servings: "1",
    difficulty: "Easy",
    description: "The quintessential Italian pizza, representing the colors of the Italian flag with red tomatoes, white mozzarella, and green basil.",
    ingredients: [
      "Pizza dough ball",
      "San Marzano tomato sauce",
      "Fresh Mozzarella di Bufala",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Sea salt"
    ],
    instructions: [
      "Preheat your oven (and pizza stone if available) to the highest possible temperature.",
      "Stretch the pizza dough into a circular shape on a floured surface.",
      "Spread a thin layer of tomato sauce over the dough, leaving room for the crust.",
      "Tear pieces of fresh mozzarella and distribute evenly over the sauce.",
      "Drizzle with olive oil and add a pinch of salt.",
      "Bake until the crust is charred and the cheese is bubbly and melted.",
      "Garnish with fresh basil leaves immediately after removing from the oven."
    ]
  },
  "5": {
    name: "Premium Sushi Platter",
    prepTime: "45 min",
    servings: "2",
    difficulty: "Hard",
    description: "An exquisite assortment of traditional Nigiri and Maki, showcasing the freshest seasonal fish and perfectly seasoned vinegared rice.",
    ingredients: [
      "Sushi-grade Salmon and Tuna",
      "Sushi rice (Koshihikari)",
      "Rice vinegar, sugar, and salt",
      "Nori sheets",
      "Wasabi and pickled ginger",
      "Soy sauce for dipping"
    ],
    instructions: [
      "Rinse and cook the sushi rice, then season it with the vinegar mixture while still warm.",
      "Slice the fish into consistent, bite-sized rectangles for Nigiri.",
      "Form small oval balls of rice with damp hands and top with a smear of wasabi and a slice of fish.",
      "For Maki, lay a nori sheet on a bamboo mat, spread rice evenly, add fillings, and roll tightly.",
      "Slice rolls into 6-8 pieces using a very sharp, damp knife.",
      "Arrange beautifully on a platter and serve with accompaniments."
    ]
  }
};

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeDetails[id as keyof typeof recipeDetails];

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
          <Button asChild>
            <Link to="/explore">Back to Explore</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/explore" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {recipe.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-12 py-6 border-y">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">{recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">{recipe.servings} Servings</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-primary" />
                <span className="font-semibold">{recipe.difficulty}</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-primary" />
              Cooking Instructions
            </h2>
            <div className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-8 sticky top-24 bg-muted/30 border-2">
              <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {ingredient}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 bg-gradient-primary hover:opacity-90 py-6 text-lg">
                Order These Ingredients
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetail;