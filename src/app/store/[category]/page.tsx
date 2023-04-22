import ProductCard from '@/components/card/product/ProductCard';
import products from '../../../products.json';
import { Product } from '@/helpers/types';

const page = ({ params }: any) => {
  let allProducts: Product[] = [];

  if (Object.keys(params).length > 0) {
    if (params.category === 'sale')
      allProducts = products.filter((prod) => prod.discount === true);
    else
      allProducts = products.filter(
        (prod) => prod.category.toLowerCase() === params.category
      );
  } else allProducts = products;

  return (
    <>
      {allProducts.map((prod) => (
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
