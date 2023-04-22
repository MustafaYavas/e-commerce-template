import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import SectionThreeBody from './SectionThreeBody';

interface SectionThreeProps {
  title: string;
}

const SectionThree = ({ title }: SectionThreeProps) => {
  return (
    <div className={styles['section-one-container']}>
      <Title title={title} />
      <SectionThreeBody />
    </div>
  );
};

export default SectionThree;
