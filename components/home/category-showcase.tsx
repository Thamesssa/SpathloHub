import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'kotas',
    name: 'Kotas',
    description: 'Iconic township sandwiches filled with delicious layers of ingredients.',
    imageUrl: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-amber-50 dark:bg-amber-950/30',
    textColor: 'text-amber-600 dark:text-amber-400'
  },
  {
    id: 'bunnychow',
    name: 'Bunny Chow',
    description: 'Hollowed bread loaves filled with aromatic curry - a Durban specialty.',
    imageUrl: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-red-50 dark:bg-red-950/30',
    textColor: 'text-red-600 dark:text-red-400'
  },
  {
    id: 'magwinya',
    name: 'Magwinya',
    description: 'Deep-fried dough bread, crispy outside and fluffy inside.',
    imageUrl: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-green-50 dark:bg-green-950/30',
    textColor: 'text-green-600 dark:text-green-400'
  }
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">
            Authentic Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of traditional South African street food categories, each with its own unique flavors and history.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`rounded-2xl overflow-hidden ${category.color} transition-transform duration-300 hover:shadow-lg group`}
            >
              <div className="aspect-video relative">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className={`mb-3 font-medium text-sm ${category.textColor}`}>
                  South African Specialty
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <Link href={`/products?category=${category.id}`}>
                  <Button variant="link" className="px-0 group">
                    Explore Menu 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}