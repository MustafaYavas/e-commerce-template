import CategoryCard from '@/components/card/category/CategoryCard';
import React from 'react';

const SectionThreeBody = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <CategoryCard categoryName="Dining" />
        <CategoryCard categoryName="Living" left={true} />
        <CategoryCard categoryName="Bedroom" />
      </div>
    </>
  );
};

export default SectionThreeBody;
