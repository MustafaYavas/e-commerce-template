import styles from '../Section.module.scss';
import SectionFiveBody from './SectionFiveBody';

interface SectionFiveProps {
  title: string;
}

const SectionFive = ({ title }: SectionFiveProps) => {
  return (
    <div className={styles['section-one-container']}>
      <h2 className="mt-20 md:mt-10 mb-10 text-2xl md:text-4xl text-center md:text-start">
        {title}
      </h2>
      <SectionFiveBody />
    </div>
  );
};

export default SectionFive;
