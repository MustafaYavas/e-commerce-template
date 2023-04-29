export interface Product {
  id: number;
  product_name: string;
  image: string;
  category: string;
  price: number;
  discount: boolean;
  weight: string;
  materials: string[];
  info: string;
  dimensions: string;
  madeIn: string;
}

export interface CartProduct {
  id: number;
  product_name: string;
  image: string;
  price: number;
  discount: boolean;
  quantity: number;
}
