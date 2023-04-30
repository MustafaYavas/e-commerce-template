import Icon from '../Icon/Icon';
import { Product } from '@/helpers/types';
import Link from 'next/link';

interface StepsProps {
  product: Product;
}

const Steps = ({ product }: StepsProps) => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-1">
      <Link href="/" className="text-base md:text-lg">
        Home
      </Link>
      <Icon name="AiFillCaretRight" size={12} />
      <Link
        href={`/store/${product?.category.toLowerCase()}`}
        className="text-base md:text-lg"
      >
        {product?.category}
      </Link>
      <Icon name="AiFillCaretRight" size={12} />
      <span className="text-slate-400 text-base md:text-lg">
        {product?.product_name}
      </span>
    </div>
  );
};

export default Steps;
