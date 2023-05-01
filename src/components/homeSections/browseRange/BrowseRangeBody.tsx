import CategoryCard from '@/components/card/category/CategoryCard';
import products from '../../../products.json';

const BrowseRangeBody = () => {
  const itemInfos = [
    {
      categoryName: products[1].category,
      image: products[1].image,
    },
    {
      categoryName: products[7].category,
      image: products[7].image,
    },
    {
      categoryName: products[19].category,
      image: products[19].image,
    },
  ];

  return (
    <div className="grid-three mb-20 md:mb-10 ">
      {itemInfos.map((item, i) => (
        <CategoryCard
          key={item.image}
          categoryName={item.categoryName}
          image={item.image}
          left={i % 2 === 1 ? true : false}
          count={i}
        />
      ))}
    </div>
  );
};

export default BrowseRangeBody;
