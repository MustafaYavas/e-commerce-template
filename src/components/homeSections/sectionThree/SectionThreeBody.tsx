import CategoryCard from '@/components/card/category/CategoryCard';
import React from 'react';

const SectionThreeBody = () => {
  return (
    <>
      <div className="grid-three">
        <CategoryCard categoryName="Dining" />
        <CategoryCard categoryName="Living" left={true} />
        <CategoryCard categoryName="Bedroom" />
      </div>
    </>
  );
};

export default SectionThreeBody;
