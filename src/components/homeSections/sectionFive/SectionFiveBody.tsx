import BlogCard from '@/components/card/blog/BlogCard';

const SectionFiveBody = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default SectionFiveBody;
