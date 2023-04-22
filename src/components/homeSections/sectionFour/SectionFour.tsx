import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import SectionFourBody from './SectionFourBody';

interface SectionFourProps {
  title: string;
}

const SectionFour = ({ title }: SectionFourProps) => {
  return (
    <div className={styles['section-one-container']}>
      <Title title={title} />
      <SectionFourBody />
    </div>
  );
};

export default SectionFour;
