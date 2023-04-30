import BlogCard from '@/components/card/blog/BlogCard';
import { getDayAndNumber } from '@/helpers/date';

const BlogBody = () => {
  return (
    <div className="grid-three">
      <BlogCard
        date={getDayAndNumber()}
        text="Maiores fuga non mollitia nam eligendi ab neque rem ?"
        className="card-over-up"
      />
      <BlogCard
        date={getDayAndNumber()}
        text="Maiores fuga non mollitia nam eligendi ab neque rem ?"
        className="card-over-up"
      />
      <BlogCard
        date={getDayAndNumber()}
        text="Maiores fuga non mollitia nam eligendi ab neque rem ?"
        className="card-over-up"
      />
    </div>
  );
};

export default BlogBody;
