import ProductCard from '@/components/card/product/ProductCard';
import React from 'react';

const SectionOneBody = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ProductCard productName="Tate Armchair" />
        <ProductCard productName="Tate Armchair" discount={true} />
        <ProductCard productName="Tate Armchair" />
      </div>
    </>
  );
};

export default SectionOneBody;
