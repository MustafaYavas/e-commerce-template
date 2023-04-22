import ProductCard from '@/components/card/product/ProductCard';
import React from 'react';

const SectionOneBody = () => {
  return (
    <>
      <div className="grid-three">
        <ProductCard productName="Tate Armchair" price={899.0} />
        <ProductCard
          productName="Tate Armchair"
          discount={true}
          price={759.0}
        />
        <ProductCard productName="Tate Armchair" price={129.0} />
      </div>
    </>
  );
};

export default SectionOneBody;
