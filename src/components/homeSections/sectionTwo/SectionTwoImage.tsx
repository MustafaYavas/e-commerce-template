import Image from 'next/image';
import styles from '../Section.module.scss';

const SectionTwoImage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Image
        src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="two"
        width="0"
        height="0"
        sizes="100vw"
        className={`w-full card-img-radius ${styles['section-two-img']}`}
      />
    </div>
  );
};

export default SectionTwoImage;
