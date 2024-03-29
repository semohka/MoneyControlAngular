export interface Product {
  name: string;
  count: number;
  price: number;
  total_price: number;
  image: string;
  category: string;
  shop: string;
}

export const products: Product[] = [

  {
    name: 'Молоко',
    count: 2,
    price: 50,
    total_price: 100,
    image: '',
    category: 'Молочная продукция',
    shop: 'ВВ',
  },
];
