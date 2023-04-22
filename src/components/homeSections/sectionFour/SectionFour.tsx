import styles from '../Section.module.scss';
import SectionFourBody from './SectionFourBody';

interface SectionFourProps {
  title: string;
}

const SectionFour = ({ title }: SectionFourProps) => {
  return (
    <div className={styles['section-one-container']}>
      <h2 className="mt-20 md:mt-10 mb-10 text-2xl md:text-4xl text-center">
        {title}
      </h2>
      <SectionFourBody />
    </div>
  );
};

export default SectionFour;
