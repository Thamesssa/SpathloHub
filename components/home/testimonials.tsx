"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Thabo Ngwenya",
    location: "Johannesburg",
    quote: "Their kotas are just like the ones I grew up eating in Soweto. The flavors are authentic and the portions are generous. My favorite spot for South African comfort food!",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Lerato Molefe",
    location: "Pretoria",
    quote: "I've tried bunny chow all over South Africa, and Spathlo's version is among the best. The balance of spices and the quality of the curry is outstanding.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Michael Botha",
    location: "Cape Town",
    quote: "The magwinya remind me of my grandmother's cooking. Fresh, fluffy, and perfectly fried. I order them at least once a week!",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "Durban",
    quote: "As someone who's not from South Africa, I was amazed by the flavors. The staff took time to explain the different dishes, and everything I've tried has been delicious!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to serve authentic South African street food that people love.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevTestimonial}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-background"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIdx * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-full">
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="flex flex-col items-center text-center pt-6 px-6 md:px-12">
                      <div className="mb-6 text-primary">
                        <Quote className="h-8 w-8" />
                      </div>
                      
                      <p className="text-lg md:text-xl mb-8 italic">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex flex-col items-center">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-lg">{testimonial.name}</h3>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextTestimonial}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-background"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  idx === currentIdx 
                    ? 'bg-primary' 
                    : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}