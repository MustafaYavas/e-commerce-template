import Link from 'next/link';

import styles from '../Section.module.scss';
import BeautifySpaceImage from './BeautifySpaceImage';
import Title from '@/components/title/Title';
import { CSS_CLASS } from '@/helpers/cssConstant';

interface SectionTwoProps {
  title: string;
}

const BeautifySpace = ({ title }: SectionTwoProps) => {
  const imageInfos = [
    {
      image: 'beautify1.avif',
      className: `w-full card-img-radius ${styles['beautify-space-img']} ${styles.one}`,
    },
    {
      image: 'beautify2.avif',
      className: `w-full card-img-radius hidden xl:block ${styles['beautify-space-img']} ${styles.two}`,
    },
    {
      image: 'beautify3.avif',
      className: `w-full card-img-radius hidden xl:block ${styles['beautify-space-img']} ${styles.three}`,
    },
  ];

  return (
    <div
      className={`grid-two ${styles['beautify-space-container']} ${CSS_CLASS.CONTAINER}`}
    >
      <div className="flex flex-col justify-center items-center md:items-start gap-5 w-full md:w-3/4">
        <Title title={title} />
        <p className="text-lg md:text-xl text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          <span className="hidden md:inline">
            Laborum mollitia vel pariatur sint incidunt sit voluptatum facere
            perferendis fugiat?
          </span>
        </p>
        <Link href="/" className="text-lg md:text-xl font-medium">
          Learn more
        </Link>
      </div>

      <div className="h-full flex justify-center items-center relative">
        {imageInfos.map((img, i) => (
          <BeautifySpaceImage
            key={img.image}
            image={`/images/${img.image}`}
            className={img.className}
          />
        ))}
      </div>
    </div>
  );
};

export default BeautifySpace;
