import Image from 'next/image';

import styles from './ProductCard.module.scss';
import Link from 'next/link';

interface CardProps {
  productName: string;
  discount?: boolean;
}

const ProductCard = ({ productName, discount }: CardProps) => {
  const createLink = (name: string) => {
    return name.replace(' ', '-').toLowerCase();
  };

  return (
    <Link
      href={`/product/${createLink(productName)}`}
      className={`card ${styles['product-card-container']} mb-5 md:mb-0`}
    >
      <Image
        src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
        alt="latest"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="card-body">
        <h2 className="card-title text-lg">{productName}</h2>
        <div className="card-actions justify-start text-lg  font-semibold">
          {discount ? (
            <div>
              <span className="line-through text-slate-400 mr-2">
                $ 899.00 USD
              </span>
              <span className="text-red-600">$ 899.00 USD</span>
            </div>
          ) : (
            <span className="text-slate-500">$ 899.00 USD</span>
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
