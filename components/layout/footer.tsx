import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-playfair text-2xl font-bold inline-block mb-4">
              Spathlo
            </Link>
            <p className="text-muted-foreground">
              Authentic South African street food, delivered to your doorstep.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/products?category=kotas" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kotas
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=bunnychow" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bunnychow
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=magwinya" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Magwinya
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=sides" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sides
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=drinks" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Drinks
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-muted-foreground">
                123 Vilakazi Street<br />
                Soweto, Johannesburg<br />
                South Africa
              </p>
              <p className="text-muted-foreground mt-3">
                <a 
                  href="tel:+27123456789" 
                  className="hover:text-foreground transition-colors"
                >
                  +27 12 345 6789
                </a>
              </p>
              <p className="text-muted-foreground mt-1">
                <a 
                  href="mailto:hello@spathlo.co.za" 
                  className="hover:text-foreground transition-colors"
                >
                  hello@spathlo.co.za
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Spathlo. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}