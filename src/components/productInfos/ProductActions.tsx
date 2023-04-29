'use client';
import { useState } from 'react';

import styles from './ProductInfos.module.scss';
import { getProductById, setLocalStorage } from '@/helpers/productFunctions';
import { useAppDispatch } from '@/helpers/reduxHooks';
import { addItemToCart } from '@/store/cartSlice';

interface ProductActionsProps {
  pId: number;
}

const ProductActions = ({ pId }: ProductActionsProps) => {
  const [value, setValue] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
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
      setIsLoading(false);
    }, 500);
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

      <button
        className="w-full block text-center bg-zinc-900 hover:bg-zinc-800 text-white 
        rounded-sm py-1 md:py-2 text-sm md:text-lg"
        onClick={handleAddToCart}
      >
        {isLoading ? 'ADDING...' : 'ADD TO CART'}
      </button>
    </div>
  );
};

export default ProductActions;
