import Image from 'next/image';

import styles from './HomeContainer.module.scss';
import Hero from '@/components/Hero/Hero';
import SectionOne from '@/components/homeSections/sectionOne/SectionOne';
import SectionTwo from '@/components/homeSections/sectionTwo/SectionTwo';
import SectionThree from '@/components/homeSections/sectionThree/SectionThree';
import SectionFour from '@/components/homeSections/sectionFour/SectionFour';
import SectionFive from '@/components/homeSections/sectionFive/SectionFive';

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
        <SectionOne title="Latest Arrivals" />
        <SectionTwo title="Beautify your space" />
        <SectionThree title="Browse the range" />
        <SectionFour title="How it works" />
        <SectionFive title="From our blog" />
      </div>
    </>
  );
};

export default HomeContainer;
