"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { featuredProducts } from '@/lib/data';
import ProductCard from '@/components/products/product-card';

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' 
        ? -current.clientWidth / 2 
        : current.clientWidth / 2;
        
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
              Popular Dishes
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Discover our most loved South African street foods, crafted with authentic recipes.
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="mr-4"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
            <Link href="/products">
              <Button variant="link" className="font-medium flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[280px] max-w-[280px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}