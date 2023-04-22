import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import SectionOneBody from './SectionOneBody';

interface SectionOneProps {
  title: string;
}

const SectionOne = ({ title }: SectionOneProps) => {
  return (
    <div className={styles['section-one-container']}>
      <Title title={title} />
      <SectionOneBody />
    </div>
  );
};

export default SectionOne;
