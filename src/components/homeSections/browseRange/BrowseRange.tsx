import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import BrowseRangeBody from './BrowseRangeBody';
import { CSS_CLASS } from '@/helpers/cssConstant';

interface SectionThreeProps {
  title: string;
}

const BrowseRange = ({ title }: SectionThreeProps) => {
  return (
    <div
      className={`${styles['latest-arrivals-container']} ${CSS_CLASS.CONTAINER}`}
    >
      <Title title={title} />
      <BrowseRangeBody />
    </div>
  );
};

export default BrowseRange;
