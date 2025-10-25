import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold">OddleEats</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your one-stop food discovery platform for delivery, pickup, and reservations.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-sm text-muted-foreground hover:text-primary">Explore Restaurants</Link></li>
              <li><Link to="/my-list" className="text-sm text-muted-foreground hover:text-primary">My Favorites</Link></li>
              <li><Link to="/oddle-feeds" className="text-sm text-muted-foreground hover:text-primary">Corporate Orders</Link></li>
              <li><Link to="/insider" className="text-sm text-muted-foreground hover:text-primary">Insider Program</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@oddleeats.com
              </li>
              <li className="text-sm text-muted-foreground">
                Singapore
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OddleEats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
