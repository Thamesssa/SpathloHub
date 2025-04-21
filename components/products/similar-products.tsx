import { products } from '@/lib/data';
import { Product } from '@/lib/types';
import ProductCard from '@/components/products/product-card';

interface SimilarProductsProps {
  currentProductId: string;
  category: string;
}

export default function SimilarProducts({ currentProductId, category }: SimilarProductsProps) {
  const similarProducts = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 3);
  
  if (similarProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-playfair font-bold mb-6">You might also like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}