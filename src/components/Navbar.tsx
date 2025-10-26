import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ShoppingCart, Package } from "lucide-react";

interface NavbarProps {
  cartCount?: number;
}

export const Navbar = ({ cartCount = 0 }: NavbarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">O</span>
          </div>
          <span className="text-xl font-bold text-foreground">OddleEats</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <Link to="/explore">
              <Search className="w-4 h-4 mr-2" />
              EXPLORE
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={isActive("/my-list") ? "text-primary" : ""}
            asChild
          >
            <Link to="/my-list">
              <Heart className="w-4 h-4 mr-2" />
              MY LIST
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className={isActive("/order-status") ? "text-primary" : ""}
            asChild
          >
            <Link to="/order-status">
              <Package className="w-4 h-4 mr-2" />
              ORDER STATUS
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="relative"
            asChild
          >
            <Link to="/cart">
              <ShoppingCart className="w-4 h-4 mr-2" />
              CART
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-primary">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={isActive("/oddle-feeds") ? "text-primary" : ""}
            asChild
          >
            <Link to="/oddle-feeds">ODDLE FEEDS</Link>
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            asChild
          >
            <Link to="/sign-in">Sign In / Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
