import styles from '../Section.module.scss';
import SectionOneBody from './SectionOneBody';

interface SectionOneProps {
  title: string;
}

const SectionOne = ({ title }: SectionOneProps) => {
  return (
    <div className={styles['section-one-container']}>
      <h2 className="mt-20 md:mt-10 mb-10 text-2xl md:text-4xl">{title}</h2>
      <SectionOneBody />
    </div>
  );
};

export default SectionOne;
