import styles from '../Section.module.scss';
import SectionThreeBody from './SectionThreeBody';

interface SectionThreeProps {
  title: string;
}

const SectionThree = ({ title }: SectionThreeProps) => {
  return (
    <div className={styles['section-one-container']}>
      <h2 className="mt-20 md:mt-10 mb-10 text-2xl md:text-4xl text-center md:text-start">
        {title}
      </h2>
      <SectionThreeBody />
    </div>
  );
};

export default SectionThree;
