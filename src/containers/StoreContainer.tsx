import ProductCard from '@/components/card/product/ProductCard';
import { Product } from '@/helpers/types';

interface StoreContainerProps {
  products: Product[];
}

const StoreContainer = ({ products }: StoreContainerProps) => {
  return (
    <>
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          productName={prod.product_name}
          image={prod.image}
          price={prod.price}
          discount={prod.discount}
        />
      ))}
    </>
  );
};

export default StoreContainer;
