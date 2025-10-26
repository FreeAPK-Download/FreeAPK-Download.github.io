
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Clock, CheckCircle, Truck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const OrderStatus = () => {
  const activeOrders = [
    {
      id: "#ORD-12345",
      restaurant: "Italian Bistro",
      items: 3,
      total: 58,
      status: "preparing",
      estimatedTime: "25-30 min",
      image: "🍝"
    },
    {
      id: "#ORD-12344",
      restaurant: "Sushi Palace",
      items: 2,
      total: 45,
      status: "on-the-way",
      estimatedTime: "10-15 min",
      image: "🍱"
    },
  ];

  const pastOrders = [
    {
      id: "#ORD-12343",
      restaurant: "Burger House",
      items: 2,
      total: 32,
      status: "delivered",
      date: "Dec 15, 2024",
      image: "🍔"
    },
    {
      id: "#ORD-12342",
      restaurant: "Thai Kitchen",
      items: 4,
      total: 65,
      status: "delivered",
      date: "Dec 14, 2024",
      image: "🍜"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "preparing":
        return <Badge className="bg-yellow-500">Preparing</Badge>;
      case "on-the-way":
        return <Badge className="bg-blue-500">On the Way</Badge>;
      case "delivered":
        return <Badge className="bg-green-500">Delivered</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Order Status</h1>
          <p className="text-muted-foreground">Track your current and past orders</p>
        </div>

        {/* Active Orders */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Active Orders</h2>
          {activeOrders.length > 0 ? (
            <div className="space-y-4">
              {activeOrders.map((order) => (
                <Card key={order.id} className="p-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center text-3xl">
                      {order.image}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm text-muted-foreground">{order.id}</p>
                          <h3 className="font-bold text-xl">{order.restaurant}</h3>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Package className="w-4 h-4 text-muted-foreground" />
                          <span>{order.items} items</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{order.estimatedTime}</span>
                        </div>
                        <div className="font-bold text-primary">
                          Total: ${order.total}
                        </div>
                      </div>

                      {/* Progress Steps */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm">Order Placed</span>
                        </div>
                        <div className="h-px flex-1 bg-border" />
                        <div className="flex items-center gap-2">
                          <CheckCircle className={`w-5 h-5 ${order.status === 'preparing' || order.status === 'on-the-way' ? 'text-green-500' : 'text-muted-foreground'}`} />
                          <span className="text-sm">Preparing</span>
                        </div>
                        <div className="h-px flex-1 bg-border" />
                        <div className="flex items-center gap-2">
                          <Truck className={`w-5 h-5 ${order.status === 'on-the-way' ? 'text-blue-500' : 'text-muted-foreground'}`} />
                          <span className="text-sm">On the Way</span>
                        </div>
                        <div className="h-px flex-1 bg-border" />
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-muted-foreground" />
                          <span className="text-sm">Delivered</span>
                        </div>
                      </div>

                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-bold mb-2">No active orders</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring and place your first order
              </p>
              <Button asChild className="bg-gradient-primary hover:opacity-90">
                <Link to="/explore">Explore Restaurants</Link>
              </Button>
            </Card>
          )}
        </div>

        {/* Past Orders */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Past Orders</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {pastOrders.map((order) => (
              <Card key={order.id} className="p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center text-2xl">
                    {order.image}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground">{order.id}</p>
                        <h3 className="font-bold">{order.restaurant}</h3>
                      </div>
                      {getStatusBadge(order.status)}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{order.date}</span>
                      <span className="font-bold text-primary">${order.total}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Reorder
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderStatus;
