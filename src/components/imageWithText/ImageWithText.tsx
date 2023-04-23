import Image from 'next/image';

import styles from './imageWithText.module.scss';

interface ImageWithTextProps {
  image: string;
  textComp: React.ReactElement;
  isFill: boolean;
  className: string;
}

const ImageWithText = ({
  image,
  textComp,
  isFill,
  className,
}: ImageWithTextProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        {isFill ? (
          <Image src={image} alt="image-with-text" fill className={className} />
        ) : (
          <Image
            src={image}
            alt="image-with-text"
            width={300}
            height={500}
            className={`w-full h-auto ${className}`}
          />
        )}
      </div>
      {textComp}
    </div>
  );
};

export default ImageWithText;
