import Image from 'next/image';
import React from 'react';

import ProductCard from '@/components/card/product/ProductCard';
import DiscountPrice from '@/components/discountPrice/DiscountPrice';
import ProductActions from '@/components/productInfos/ProductActions';
import SecondaryInfos from '@/components/productInfos/SecondaryInfos';
import Steps from '@/components/steps/Steps';
import Title from '@/components/title/Title';
import { Product } from '@/helpers/types';
import styles from './ProductContainer.module.scss';

interface ProductContainer {
  product: Product;
  similars: Product[];
}

const ProductContainer = ({ product, similars }: ProductContainer) => {
  const {
    id,
    image,
    product_name,
    discount,
    category,
    price,
    weight,
    dimensions,
    materials,
    info,
    madeIn,
  } = product;

  return (
    <div className="container mx-auto px-5 md:px-10 mt-10 min-h-screen border-b">
      <Steps product={product} />
      <div className="grid-two mt-10">
        <Image
          src={image}
          alt="product"
          height={0}
          width={0}
          sizes="100vw"
          className={`w-full h-auto card-img-radius ${styles['product-image']}`}
        />

        <div className="md:pl-10">
          <h2 className="text-2xl md:text-4xl tracking-wider mb-3 text-center md:text-start">
            {product_name}
          </h2>

          <DiscountPrice
            discount={discount}
            price={price}
            className="text-2xl md:text-4xl text-center md:text-start font-light"
          />

          <p className="py-10 text-sm md:text-xl text-zinc-800 tracking-wide border-b-2 border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            cupiditate vel corrupti odio nesciunt incidunt non excepturi
            assumenda consectetur.
          </p>

          <SecondaryInfos
            id={id}
            materials={materials}
            info={info}
            weight={weight}
            dimensions={dimensions}
            madeIn={madeIn}
          />

          <ProductActions pId={id} />
        </div>
      </div>

      <div className="pt-20 pb-10">
        <Title title="You may also consider" />
        <div className="grid-three">
          {similars.map((prod) => (
            <ProductCard
              key={prod.id}
              productName={prod.product_name}
              price={prod.price}
              image={prod.image}
              discount={prod.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
