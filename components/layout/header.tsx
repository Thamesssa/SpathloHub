"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCart } from '@/components/cart/cart-context';
import NavLink from '@/components/layout/nav-link';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { cart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsMounted(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="font-playfair text-2xl font-bold tracking-tight"
        >
          Spathlo
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href} 
              active={pathname === item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:flex"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          {/* Cart Button */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 min-w-[1.5rem] h-6 flex items-center justify-center font-medium"
                >
                  {cartItemsCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b py-4">
                  <Link href="/" className="font-playfair text-xl font-bold">
                    Spathlo
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link 
                        href={item.href}
                        className={`text-lg font-medium ${
                          pathname === item.href 
                            ? 'text-primary' 
                            : 'text-foreground/70 hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                
                <div className="mt-auto border-t py-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center gap-2 w-full justify-start"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="h-5 w-5" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-5 w-5" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}