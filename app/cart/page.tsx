"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/cart/cart-context';
import { Button } from '@/components/ui/button';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulating checkout process
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      // Redirect to success page in a real implementation
      window.location.href = '/checkout/success';
    }, 2000);
  };
  
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-playfair font-bold mb-8">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add some delicious South African food to get started</p>
          <Link href="/products">
            <Button size="lg">
              Browse Menu
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ScrollArea className="h-[calc(100vh-300px)] pr-4">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b">
                  <div className="flex-shrink-0 relative w-full sm:w-24 h-24 rounded-md overflow-hidden mb-4 sm:mb-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow sm:ml-6">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <p className="font-medium">R{item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center mt-4 sm:mt-0">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </Button>
                    <span className="mx-3 font-medium">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-destructive"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              ))}
            </ScrollArea>
            
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm p-6 border sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.quantity} × {item.name}</span>
                    <span>R{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span>R{cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Delivery</span>
                <span>R25.00</span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>R{(cartTotal + 25).toFixed(2)}</span>
              </div>
              
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center gap-2"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
                {!isCheckingOut && <ArrowRight size={16} />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}