"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Authentic South African Street Food",
    description: "Experience the vibrant flavors of South Africa's most beloved street foods, now available for delivery.",
    imageUrl: "https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Order Now"
  },
  {
    id: 2,
    title: "Try Our Famous Kota Sandwiches",
    description: "Delicious quarter loaves filled with your choice of quality ingredients and our special sauces.",
    imageUrl: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "View Menu"
  },
  {
    id: 3,
    title: "Bunny Chow - A Durban Delight",
    description: "Hollowed bread filled with aromatic curry, a South African classic that's sure to satisfy.",
    imageUrl: "https://images.pexels.com/photos/9646858/pexels-photo-9646858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Explore"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image 
            src={slide.imageUrl} 
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl text-white">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <Link href="/products">
                  <Button size="lg" className="group">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}