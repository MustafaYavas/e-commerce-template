import Image from 'next/image';
import Link from 'next/link';

import CardTitle from '../CardTitle';

interface CategoryCardProps {
  categoryName: string;
  left?: boolean;
}

const CategoryCard = ({ categoryName, left }: CategoryCardProps) => {
  return (
    <Link
      href={`/store/${categoryName.toLowerCase()}`}
      className="text-center grid grid-cols-2 md:grid-cols-1 card-over-down"
    >
      <CardTitle
        title={categoryName}
        className={`mb-0 md:mb-2 text-lg md:text-2xl ${
          left ? 'order-1' : 'order-2'
        } md:order-1 
        tracking-widest flex justify-center items-center`}
      />
      <Image
        src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        alt="latest"
        width="0"
        height="0"
        sizes="100vw"
        className={`w-full h-auto card-img card-img-radius ${
          left ? 'order-2' : 'order-1'
        }  md:order-2`}
      />
    </Link>
  );
};

export default CategoryCard;
