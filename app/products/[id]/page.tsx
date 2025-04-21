import { products } from '@/lib/data';
import ProductDetail from '@/components/products/product-detail';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return null;
  }
  
  return <ProductDetail id={params.id} />;
}