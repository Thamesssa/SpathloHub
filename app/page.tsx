import HeroSection from '@/components/home/hero-section';
import FeaturedProducts from '@/components/home/featured-products';
import CategoryShowcase from '@/components/home/category-showcase';
import Testimonials from '@/components/home/testimonials';
import AboutSection from '@/components/home/about-section';
import Newsletter from '@/components/home/newsletter';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
}