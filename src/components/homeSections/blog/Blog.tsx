import Title from '@/components/title/Title';
import styles from '../Section.module.scss';
import BlogBody from './BlogBody';
import { CSS_CLASS } from '@/helpers/cssConstant';

interface SectionFiveProps {
  title: string;
}

const Blog = ({ title }: SectionFiveProps) => {
  return (
    <div
      className={`${styles['section-one-container']} ${CSS_CLASS.CONTAINER}`}
    >
      <Title title={title} />
      <BlogBody />
    </div>
  );
};

export default Blog;
