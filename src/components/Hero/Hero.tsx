import styles from './Hero.module.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      <p className={styles.title}>SPRING SALE</p>
      <p className={`${styles.subtitle} hidden md:block`}>
        Our products have been renewed! Check out our spring collection.
      </p>
      <Link
        href="/store"
        className="block text-center bg-zinc-900 hover:bg-zinc-800 text-white 
        rounded py-1 md:py-2 px-5 text-sm md:text-lg mt-5"
      >
        SHOP THE SALE
      </Link>
    </div>
  );
};

export default Hero;
