import Image from 'next/image';

interface BeautifySpaceImageProps {
  image: string;
  className: string;
}

const BeautifySpaceImage = ({ image, className }: BeautifySpaceImageProps) => {
  return (
    <Image
      src={image}
      alt="beautify-img"
      width="0"
      height="0"
      sizes="100vw"
      className={className}
    />
  );
};

export default BeautifySpaceImage;
