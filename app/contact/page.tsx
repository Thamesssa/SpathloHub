"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail,
  Clock, 
  Send
} from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon!",
        duration: 5000,
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                rows={5}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">
                  123 Vilakazi Street<br />
                  Soweto, Johannesburg<br />
                  South Africa
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+27 12 345 6789</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">hello@spathlo.co.za</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 10:00 AM - 9:00 PM<br />
                  Saturday & Sunday: 11:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 h-64 bg-muted rounded-lg overflow-hidden">
            {/* Map placeholder - In a real implementation, you'd use Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center bg-secondary/30">
              <p className="text-muted-foreground">Interactive Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}