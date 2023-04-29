import Link from 'next/link';

import styles from '../Section.module.scss';
import SectionTwoImage from './SectionTwoImage';
import Title from '@/components/title/Title';

interface SectionTwoProps {
  title: string;
}

const SectionTwo = ({ title }: SectionTwoProps) => {
  return (
    <div className={`grid-two ${styles['section-two-container']}`}>
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

      <SectionTwoImage />
    </div>
  );
};

export default SectionTwo;
