'use client';
import { useState } from 'react';

import Button from '../button/Button';
import styles from './ProductInfos.module.scss';
import { getProductById, setLocalStorage } from '@/helpers/productFunctions';
import { useAppDispatch } from '@/helpers/reduxHooks';
import { addItemToCart } from '@/store/cartSlice';

interface ProductActionsProps {
  pId: number;
}

const ProductActions = ({ pId }: ProductActionsProps) => {
  const [value, setValue] = useState('1');
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const product = getProductById({ id: pId, quantity: parseInt(value) });
    const { id, product_name, image, price, discount } = product;
    setLocalStorage({ id: pId, quantity: parseInt(value) });
    dispatch(
      addItemToCart({
        product: {
          id,
          product_name,
          image,
          price,
          discount,
          quantity: parseInt(value),
        },
      })
    );
  };

  return (
    <div
      className={`flex justify-center items-center mt-5 gap-3 md:gap-1 ${styles['product-actions']}`}
    >
      <input
        type="number"
        min={1}
        value={value}
        className="rounded"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        isLink={false}
        isFill={true}
        className="w-full rounded md:text-xl tracking-wider"
        text={<span>ADD TO CART</span>}
        onClick={handleAddToCart}
      />
    </div>
  );
};

export default ProductActions;
