import Image from 'next/image';

import styles from './FullWidthSection.module.scss';
import Link from 'next/link';

interface FullWidthSectionProps {
  image: string;
  mainText: string;
  buttonText: string;
}

const FullWidthSection = ({
  image,
  mainText,
  buttonText,
}: FullWidthSectionProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className={styles['full-width-container']}>
        <Image src={image} alt="full-img" fill className={styles['full-img']} />
        <div className={`md:w-2/3 pl-5 md:px-0 ${styles.content}`}>
          <h4 className="text-white text-xl md:text-2xl font-medium mb-10">
            {mainText}
          </h4>
          <Link
            href="/store"
            className=" text-black bg-white hover:bg-slate-100 px-5 py-2 rounded text-base md:text-lg font-medium"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullWidthSection;
