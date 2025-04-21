import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">About Spathlo</h1>
        
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image 
            src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="South African street food market"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2>Our Story</h2>
          <p>
            Spathlo was founded in 2023 with a simple mission: to bring the authentic flavors of South African street food to food enthusiasts everywhere. Our founders, proud South Africans with a passion for their culinary heritage, noticed that while South African cuisine was gaining popularity globally, it was still difficult to find authentic dishes outside major cities.
          </p>
          
          <p>
            The name "Spathlo" comes from South African township slang for a quarter-loaf kota sandwich, one of our signature offerings. We believe that food is more than just sustenance—it's a way to connect with culture, community, and history.
          </p>
          
          <h2>Our Food</h2>
          <p>
            We specialize in three iconic South African street foods:
          </p>
          
          <ul>
            <li>
              <strong>Kotas</strong> - Iconic township sandwiches made with a quarter loaf of bread filled with various ingredients including chips (fries), polony, russian sausage, atchar, and cheese.
            </li>
            <li>
              <strong>Bunnychow</strong> - A hollowed-out loaf of bread filled with flavorful curry, a dish with roots in the Indian South African community of Durban.
            </li>
            <li>
              <strong>Magwinya</strong> - Also known as fat cakes or vetkoek, these deep-fried dough breads can be eaten plain or filled with savory mince or jam.
            </li>
          </ul>
          
          <p>
            All our dishes are prepared using authentic recipes and techniques, with ingredients sourced from quality suppliers. We take pride in bringing the true taste of South African street food culture to your table.
          </p>
          
          <h2>Our Values</h2>
          <p>
            At Spathlo, we believe in:
          </p>
          
          <ul>
            <li><strong>Authenticity</strong> - We never compromise on the traditional flavors and preparation methods.</li>
            <li><strong>Community</strong> - Food brings people together, and we aim to create a community around our shared love for South African cuisine.</li>
            <li><strong>Quality</strong> - We use only the freshest ingredients and maintain high standards in our food preparation.</li>
            <li><strong>Cultural Appreciation</strong> - We're proud ambassadors of South African food culture and enjoy sharing its rich history and diversity.</li>
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/products">
            <Button size="lg">
              Explore Our Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}