import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-2xl">
            <Image
              src="https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="South African cuisine preparation"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Our South African Food Story
            </h2>
            
            <div className="space-y-4 text-lg">
              <p>
                Spathlo brings authentic South African street food to food enthusiasts everywhere. Our name comes from South African township slang for a quarter-loaf kota sandwich, one of our signature offerings.
              </p>
              
              <p>
                We specialize in three iconic South African street foods: Kotas, Bunnychow, and Magwinya. Each dish is prepared using traditional recipes passed down through generations, with ingredients sourced from quality suppliers.
              </p>
              
              <p>
                Our mission is to share the vibrant flavors of South African street food culture while preserving its rich heritage and authenticity. Every bite tells a story of South Africa's diverse culinary traditions.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M15 10L11 14L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>Authentic South African recipes</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M15 10L11 14L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>Quality ingredients</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M15 10L11 14L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>Traditional cooking methods</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/about">
                <Button size="lg" variant="outline" className="group">
                  Learn More 
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}