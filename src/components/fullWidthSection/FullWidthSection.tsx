import Image from 'next/image';

import styles from './FullWidthSection.module.scss';
import Link from 'next/link';

interface FullWidthSectionProps {
  image: string;
  content: React.ReactElement;
  height: string;
  imageOpacity: string;
}

const FullWidthSection = ({
  image,
  content,
  height,
  imageOpacity,
}: FullWidthSectionProps) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={styles['full-width-container']}
        style={{ height: height }}
      >
        <Image
          src={image}
          alt="full-img"
          fill
          className={`${styles['full-img']} ${imageOpacity}`}
        />
        <div className={`md:w-2/3 pl-5 md:px-0 ${styles.content}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default FullWidthSection;
