"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/components/cart/cart-context';
import { useToast } from '@/hooks/use-toast';
import SimilarProducts from '@/components/products/similar-products';

export default function ProductDetail({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-6">Product not found</h1>
        <Button onClick={() => router.push('/products')}>
          Back to Products
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
      duration: 3000,
    });
  };
  
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative overflow-hidden rounded-2xl bg-muted h-[400px] md:h-[500px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="flex flex-col">
          <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full w-fit mb-3">
            {product.category}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold">{product.name}</h1>
          
          <div className="mt-2 mb-6">
            <p className="text-2xl font-bold">R{product.price.toFixed(2)}</p>
          </div>
          
          <div className="prose prose-lg max-w-none mb-6">
            <p>{product.description}</p>
          </div>
          
          <div className="flex items-center mt-auto mb-6">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </Button>
            <span className="mx-4 font-medium text-lg w-6 text-center">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus size={16} />
            </Button>
          </div>
          
          <Button 
            size="lg" 
            onClick={handleAddToCart}
            className="w-full md:w-auto"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      
      <SimilarProducts currentProductId={product.id} category={product.category} />
    </div>
  );
}