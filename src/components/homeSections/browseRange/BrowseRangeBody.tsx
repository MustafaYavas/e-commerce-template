import CategoryCard from '@/components/card/category/CategoryCard';
import products from '../../../products.json';

const BrowseRangeBody = () => {
  return (
    <>
      <div className="grid-three">
        <CategoryCard
          categoryName={products[1].category}
          image={products[1].image}
        />
        <CategoryCard
          categoryName={products[7].category}
          left={true}
          image={products[7].image}
        />
        <CategoryCard
          categoryName={products[19].category}
          image={products[19].image}
        />
      </div>
    </>
  );
};

export default BrowseRangeBody;
