import Image from 'next/image';
import styles from '../Section.module.scss';

const SectionTwoImage = () => {
  return (
    <div className="h-full flex justify-center items-center relative">
      <Image
        src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="two"
        width="0"
        height="0"
        sizes="100vw"
        className={`w-full card-img-radius ${styles['section-two-img']} ${styles.one}`}
      />
      <Image
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
        alt="two"
        width="0"
        height="0"
        sizes="100vw"
        className={`w-full card-img-radius hidden xl:block ${styles['section-two-img']} ${styles.two}`}
      />
      <Image
        src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="two"
        width="0"
        height="0"
        sizes="100vw"
        className={`w-full card-img-radius hidden xl:block ${styles['section-two-img']} ${styles.three}`}
      />
    </div>
  );
};

export default SectionTwoImage;
