import styles from './Hero.module.scss';
import Button from '../button/Button';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      <p className={styles['title']}>SPRING SALE</p>
      <p className={`${styles['subtitle']} hidden md:block`}>
        Our products have been renewed! Check out our spring collection.
      </p>
      <Button
        isLink={true}
        href="/store"
        isFill={true}
        text={<span>SHOP THE SALE</span>}
      />
    </div>
  );
};

export default Hero;
