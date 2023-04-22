import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import SectionFiveBody from './SectionFiveBody';

interface SectionFiveProps {
  title: string;
}

const SectionFive = ({ title }: SectionFiveProps) => {
  return (
    <div className={styles['section-one-container']}>
      <Title title={title} />
      <SectionFiveBody />
    </div>
  );
};

export default SectionFive;
