import Image from 'next/image';

import styles from './ProductCard.module.scss';
import Link from 'next/link';
import DiscountPrice from '@/components/discountPrice/DiscountPrice';
import { createLinkFromName } from '@/helpers/general';

interface CardProps {
  productName: string;
  image: string;
  price: string;
  discount?: boolean;
}

const ProductCard = ({ productName, image, price, discount }: CardProps) => {
  return (
    <Link
      href={`/product/${createLinkFromName(productName)}`}
      className={`${styles['product-card-container']} mb-5 md:mb-10`}
    >
      <Image
        src={image}
        alt="latest"
        width="0"
        height="0"
        sizes="100vw"
        className="card-img"
      />
      <div className="card-body">
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
