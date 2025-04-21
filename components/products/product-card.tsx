"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/components/cart/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [isHovering, setIsHovering] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      ...product,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
      duration: 3000,
    });
  };
  
  return (
    <Link href={`/products/${product.id}`}>
      <Card 
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-md group border-border/50", 
          className
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovering ? "scale-110" : "scale-100"
            )}
          />
          
          {product.badge && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
              {product.badge}
            </div>
          )}
          
          <div className={cn(
            "absolute bottom-0 left-0 right-0 flex justify-between p-3 bg-gradient-to-t from-black/70 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}>
            <Button 
              size="sm" 
              variant="secondary"
              className="gap-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">Add to Cart</span>
            </Button>
            
            <Button 
              size="sm" 
              variant="secondary"
              className="gap-1"
            >
              <Eye className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">View</span>
            </Button>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
          <h3 className="font-medium truncate">{product.name}</h3>
          <div className="mt-1 font-bold">R{product.price.toFixed(2)}</div>
        </CardContent>
      </Card>
    </Link>
  );
}