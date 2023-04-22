import Link from 'next/link';

import styles from '../Section.module.scss';
import SectionTwoImage from './SectionTwoImage';

interface SectionTwoProps {
  title: string;
}

const SectionTwo = ({ title }: SectionTwoProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${styles['section-two-container']}`}
    >
      <div className="flex flex-col justify-center items-center md:items-start gap-5 w-full md:w-3/4">
        <h2 className="text-2xl md:text-3xl font-medium">{title}</h2>
        <p className="text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          <span className="hidden md:inline">
            Laborum mollitia vel pariatur sint incidunt sit voluptatum facere
            perferendis fugiat?
          </span>
        </p>
        <Link href="/about" className="text-lg md:text-xl font-medium">
          Learn more
        </Link>
      </div>

      <SectionTwoImage />
    </div>
  );
};

export default SectionTwo;
