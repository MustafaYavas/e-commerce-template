import Image from 'next/image';

import styles from './ProductCard.module.scss';
import Link from 'next/link';

interface CardProps {
  productName: string;
  image: string;
  price: string;
  discount?: boolean;
}

const ProductCard = ({ productName, image, price, discount }: CardProps) => {
  const createLink = (name: string) => {
    return name.replace(' ', '-').toLowerCase();
  };

  return (
    <Link
      href={`/product/${createLink(productName)}`}
      className={`card ${styles['product-card-container']} mb-5 md:mb-0`}
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
        <h2 className="card-title text-lg">{productName}</h2>
        <div className="card-actions justify-start text-lg  font-semibold">
          {discount ? (
            <div>
              <span className="line-through text-slate-400 mr-2">
                $ {price} USD
              </span>
              <span className="text-red-600">$ {price} USD</span>
            </div>
          ) : (
            <span className="text-slate-500">$ {price} USD</span>
          )}
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
