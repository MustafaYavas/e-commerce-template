'use client';
import Image from 'next/image';
import Aos from 'aos';

import CardText from '../CardText';
import { useEffect } from 'react';

interface BlogCardProps {
  date: string;
  text: string;
  className: string;
  count?: number;
}

const BlogCard = ({ date, text, className, count }: BlogCardProps) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className={`text-start grid-two-reverse cursor-pointer ${className}`}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={count ? `${300 * count}` : ''}
    >
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="blog"
          height="0"
          width="0"
          sizes="100vw"
          className="card-img card-img-radius"
        />
      </div>

      <div>
        <p className="text-sm md:text-base tracking-normal md:tracking-wide mb-2 text-slate-400">
          {date}
        </p>
        <CardText text={text} large={true} />
      </div>
    </div>
  );
};

export default BlogCard;
