'use client';
import Image from 'next/image';

import styles from './ProductCard.module.scss';
import Link from 'next/link';
import DiscountPrice from '@/components/discountPrice/DiscountPrice';
import { createLinkFromName } from '@/helpers/general';
import { useEffect } from 'react';
import Aos from 'aos';

interface CardProps {
  productName: string;
  image: string;
  price: number;
  discount?: boolean;
  count?: number;
}

const ProductCard = ({
  productName,
  image,
  price,
  discount,
  count,
}: CardProps) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Link
      href={`/product/${createLinkFromName(productName)}`}
      className={`${styles['product-card-container']} mb-5 md:mb-10`}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={count ? `${100 * count}` : '0'}
    >
      <Image
        src={image}
        alt="latest"
        width="0"
        height="0"
        sizes="100vw"
        className="card-img"
      />
      <div className={styles['card-body']}>
        <h2 className="text-lg md:text-xl font-medium">{productName}</h2>
        <div className="justify-start text-lg font-semibold">
          <DiscountPrice discount={discount!} price={price} />
        </div>
        {discount && (
          <span
            className={`${styles['sale-badge']} bg-red-600 text-sm font-semibold`}
          >
            SALE
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
