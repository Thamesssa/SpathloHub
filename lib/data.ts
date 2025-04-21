import { Product } from './types';

export const products: Product[] = [
  // Kotas
  {
    id: 'kota-classic',
    name: 'Classic Kota',
    description: 'The traditional kota with polony, russian sausage, chips, atchar, and our special sauce in a quarter loaf of bread.',
    price: 45.00,
    category: 'kotas',
    imageUrl: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Popular'
  },
  {
    id: 'kota-cheese',
    name: 'Cheese Kota',
    description: 'Our classic kota with an extra layer of melted cheese for that creamy goodness.',
    price: 55.00,
    category: 'kotas',
    imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'kota-deluxe',
    name: 'Deluxe Kota',
    description: 'The ultimate kota experience with egg, cheese, russian sausage, polony, chips, and our special sauce.',
    price: 65.00,
    category: 'kotas',
    imageUrl: 'https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'kota-chicken',
    name: 'Chicken Kota',
    description: 'A kota filled with tender grilled chicken strips, fresh lettuce, chips, and our signature sauce.',
    price: 60.00,
    category: 'kotas',
    imageUrl: 'https://images.pexels.com/photos/4149263/pexels-photo-4149263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  
  // Bunny Chow
  {
    id: 'bunny-beef',
    name: 'Beef Curry Bunny Chow',
    description: 'A quarter loaf filled with traditional South African beef curry, spiced to perfection.',
    price: 75.00,
    category: 'bunnychow',
    imageUrl: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Spicy'
  },
  {
    id: 'bunny-chicken',
    name: 'Chicken Curry Bunny Chow',
    description: 'A quarter loaf filled with fragrant chicken curry, a milder alternative to our beef bunny.',
    price: 70.00,
    category: 'bunnychow',
    imageUrl: 'https://images.pexels.com/photos/5409363/pexels-photo-5409363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'bunny-lamb',
    name: 'Lamb Curry Bunny Chow',
    description: 'A rich, aromatic lamb curry served in a hollow quarter loaf, Durban style.',
    price: 85.00,
    category: 'bunnychow',
    imageUrl: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Premium'
  },
  {
    id: 'bunny-bean',
    name: 'Bean Curry Bunny Chow',
    description: 'A vegetarian option featuring a flavorful mixed bean curry in a quarter loaf.',
    price: 65.00,
    category: 'bunnychow',
    imageUrl: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  
  // Magwinya
  {
    id: 'magwinya-plain',
    name: 'Plain Magwinya',
    description: 'Traditional South African fat cakes, deep-fried to golden perfection. Served in pairs.',
    price: 25.00,
    category: 'magwinya',
    imageUrl: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Classic'
  },
  {
    id: 'magwinya-mince',
    name: 'Mince Magwinya',
    description: 'Magwinya filled with savory spiced minced beef. A perfect quick meal or snack.',
    price: 35.00,
    category: 'magwinya',
    imageUrl: 'https://images.pexels.com/photos/6941025/pexels-photo-6941025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'magwinya-jam',
    name: 'Jam Magwinya',
    description: 'Sweet magwinya filled with apricot jam for a delightful treat.',
    price: 30.00,
    category: 'magwinya',
    imageUrl: 'https://images.pexels.com/photos/6941073/pexels-photo-6941073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'magwinya-cheese',
    name: 'Cheese Magwinya',
    description: 'Magwinya filled with melted cheese for a savory-sweet combination.',
    price: 35.00,
    category: 'magwinya',
    imageUrl: 'https://images.pexels.com/photos/6941087/pexels-photo-6941087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  
  // Sides
  {
    id: 'side-chips',
    name: 'Slap Chips',
    description: 'South African style soft chips, perfectly cooked and seasoned.',
    price: 25.00,
    category: 'sides',
    imageUrl: 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'side-salad',
    name: 'Fresh Veg Salad',
    description: 'A refreshing mix of chopped tomatoes, onions, and peppers with a vinegar dressing.',
    price: 30.00,
    category: 'sides',
    imageUrl: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'side-atchar',
    name: 'Extra Atchar',
    description: 'Spicy pickled mango condiment, perfect with any of our main dishes.',
    price: 15.00,
    category: 'sides',
    imageUrl: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  
  // Drinks
  {
    id: 'drink-soda',
    name: 'Soft Drink Can',
    description: 'Choose from a variety of refreshing sodas.',
    price: 15.00,
    category: 'drinks',
    imageUrl: 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'drink-water',
    name: 'Bottled Water',
    description: 'Still or sparkling water, 500ml.',
    price: 12.00,
    category: 'drinks',
    imageUrl: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'drink-rooibos',
    name: 'Rooibos Iced Tea',
    description: 'Traditional South African rooibos tea, served cold and slightly sweetened.',
    price: 20.00,
    category: 'drinks',
    imageUrl: 'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const featuredProducts = products.filter(product => 
  ['kota-classic', 'bunny-beef', 'magwinya-plain', 'kota-deluxe', 'bunny-lamb', 'magwinya-mince'].includes(product.id)
);