import BlogCard from '@/components/card/blog/BlogCard';
import { getDayAndNumber } from '@/helpers/date';

const BlogBody = () => {
  const blogInfos = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Maiores fuga non mollitia nam eligendi ab neque rem ?',
    },
    {
      title:
        'Suscipit dolore culpa laborum, doloribus dicta temporibus quod natus!',
    },
  ];

  return (
    <div className="grid-three">
      {blogInfos.map((blog, i) => (
        <BlogCard
          key={i}
          date={getDayAndNumber()}
          text={blog.title}
          className="card-over-up"
          count={i}
        />
      ))}
    </div>
  );
};

export default BlogBody;
