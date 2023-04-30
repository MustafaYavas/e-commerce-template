import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import HowWorksBody from './HowWorksBody';
import { CSS_CLASS } from '@/helpers/cssConstant';

interface SectionFourProps {
  title: string;
}

const HowWorks = ({ title }: SectionFourProps) => {
  return (
    <div
      className={`${styles['latest-arrivals-container']} ${CSS_CLASS.CONTAINER}`}
    >
      <Title title={title} />
      <HowWorksBody />
    </div>
  );
};

export default HowWorks;
