import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CheckoutSuccess() {
  return (
    <div className="container mx-auto py-20 px-4 text-center max-w-md">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
      </div>
      
      <h1 className="text-3xl font-playfair font-bold mb-4">Order Confirmed!</h1>
      
      <p className="text-muted-foreground mb-8">
        Thank you for your order. We've received your payment and will start preparing your delicious South African food right away.
      </p>
      
      <div className="space-y-4">
        <Link href="/products">
          <Button className="w-full">
            Continue Shopping
          </Button>
        </Link>
        
        <Link href="/">
          <Button variant="outline" className="w-full">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}