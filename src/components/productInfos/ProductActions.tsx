'use client';
import { useState } from 'react';

import Button from '../button/Button';
import styles from './ProductInfos.module.scss';

const ProductActions = () => {
  const [value, setValue] = useState('1');

  return (
    <div
      className={`flex justify-center items-center mt-5 gap-3 md:gap-1 ${styles['product-actions']}`}
    >
      <input
        type="number"
        min={1}
        max={10}
        value={value}
        className="rounded"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        isLink={false}
        isFill={true}
        className="w-full rounded md:text-xl tracking-wider"
        text={<span>ADD TO CART</span>}
        onClick={() => {}}
      />
    </div>
  );
};

export default ProductActions;
