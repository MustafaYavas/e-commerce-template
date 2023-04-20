import Image from 'next/image';

import styles from './HomeContainer.module.scss';
import Hero from '@/components/Hero/Hero';
import SectionOne from '@/components/homeSections/SectionOne';

const HomeContainer = () => {
  return (
    <>
      <div className={styles['home-container']}>
        <div className={styles['home-img']}>
          <Image src="/images/home2.jpg" alt="home-img" fill />
        </div>
        <Hero />
      </div>
      <div className="container mx-auto px-5 md:px-10">
        <SectionOne />
      </div>
    </>
  );
};

export default HomeContainer;
