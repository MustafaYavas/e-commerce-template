import ProductCard from '@/components/card/product/ProductCard';
import FullWidthSection from '@/components/fullWidthSection/FullWidthSection';
import { CSS_CLASS } from '@/helpers/cssConstant';
import { getCategoryImage } from '@/helpers/general';
import { Product } from '@/helpers/types';
import styles from './StoreContainer.module.scss';

interface StoreContainerProps {
  categoryName?: string;
  products: Product[];
}

const StoreContainer = ({ categoryName, products }: StoreContainerProps) => {
  const categoryHero = (categoryName: string) => {
    return (
      <div className="text-center text-white">
        <h4 className={styles['category-title']}>
          {categoryName.toUpperCase()}
        </h4>
        <p className="mt-5 text-base md:text-2xl tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, at!
        </p>
      </div>
    );
  };

  return (
    <>
      {categoryName && (
        <div className="mb-20">
          <FullWidthSection
            image={getCategoryImage(categoryName)}
            content={categoryHero(categoryName)}
            height="60vh"
            imageOpacity="opacity-50"
          />
        </div>
      )}

      <div className={`grid-three pt-10  ${CSS_CLASS.CONTAINER}`}>
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            productName={prod.product_name}
            image={prod.image}
            price={prod.price}
            discount={prod.discount}
          />
        ))}
      </div>
    </>
  );
};

export default StoreContainer;
