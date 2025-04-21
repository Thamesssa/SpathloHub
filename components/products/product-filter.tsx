import { Button } from '@/components/ui/button';

interface ProductFilterProps {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export default function ProductFilter({ activeCategory, setActiveCategory }: ProductFilterProps) {
  const categories = [
    { id: null, name: 'All' },
    { id: 'kotas', name: 'Kotas' },
    { id: 'bunnychow', name: 'Bunny Chow' },
    { id: 'magwinya', name: 'Magwinya' },
    { id: 'sides', name: 'Sides' },
    { id: 'drinks', name: 'Drinks' }
  ];
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category.id ?? 'all'}
          variant={activeCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(category.id)}
          className="min-w-[80px]"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}