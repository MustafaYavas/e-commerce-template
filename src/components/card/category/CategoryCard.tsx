'use client';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';

import CardTitle from '../CardTitle';
import { useEffect } from 'react';

interface CategoryCardProps {
  categoryName: string;
  image: string;
  left?: boolean;
}

const CategoryCard = ({ categoryName, image, left }: CategoryCardProps) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Link
      href={`/store/${categoryName.toLowerCase()}`}
      className="text-center grid grid-cols-2 md:grid-cols-1 card-over-down"
      data-aos="flip-up"
      data-aos-once="true"
    >
      <CardTitle
        title={categoryName}
        className={`mb-0 md:mb-2 text-lg md:text-2xl ${
          left ? 'order-1' : 'order-2'
        } md:order-1 
        tracking-widest flex justify-center items-center`}
      />
      <Image
        src={image}
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
