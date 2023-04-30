import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import LatestArrivalsBody from './LatestArrivalsBody';
import { CSS_CLASS } from '@/helpers/cssConstant';

interface SectionOneProps {
  title: string;
}

const LatestArrivals = ({ title }: SectionOneProps) => {
  return (
    <div
      className={`${styles['latest-arrivals-container']} ${CSS_CLASS.CONTAINER}`}
    >
      <Title title={title} />
      <LatestArrivalsBody />
    </div>
  );
};

export default LatestArrivals;
