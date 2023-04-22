import ProductCard from '@/components/card/product/ProductCard';
import products from '../../products.json';

const page = () => {
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

export default page;
