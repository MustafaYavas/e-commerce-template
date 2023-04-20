import Image from 'next/image';

import styles from './HomeContainer.module.scss';
import Header from '@/components/header/Header';
import Hero from '@/components/Hero/Hero';

const HomeContainer = () => {
  return (
    <div className={styles['home-container']}>
      <Header />

      <div className={styles['home-img']}>
        <Image src="/images/home2.jpg" alt="home-img" fill />
      </div>
      <Hero />
    </div>
  );
};

export default HomeContainer;
