import ProductCard from '@/components/card/product/ProductCard';
import products from '../../../products.json';

const LatestArrivalsBody = () => {
  return (
    <div className="grid-three">
      {products.slice(0, 3).map((prod) => (
        <ProductCard
          key={prod.id}
          productName={prod.product_name}
          price={prod.price}
          image={prod.image}
          discount={prod.discount}
        />
      ))}
    </div>
  );
};

export default LatestArrivalsBody;
