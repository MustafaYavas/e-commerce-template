import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      <p className={styles['title']}>SPRING SALE</p>
      <p className={`${styles['subtitle']} hidden md:block`}>
        Our products have been renewed! Check out our spring collection.
      </p>
      <Link href="/store/sale">SHOP THE SALE</Link>
    </div>
  );
};

export default Hero;
