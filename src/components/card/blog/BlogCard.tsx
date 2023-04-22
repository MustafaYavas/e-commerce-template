import Image from 'next/image';
import styles from './BlogCard.module.scss';

const BlogCard = () => {
  return (
    <div className="text-start grid grid-cols-2 md:grid-cols-1 gap-5">
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="blog"
          height="0"
          width="0"
          sizes="100vw"
          className={styles['card-img']}
        />
      </div>

      <div>
        <p className="text-base tracking-normal md:tracking-wide mb-2 text-slate-400">
          October 12
        </p>
        <p className="tracking-normal md:tracking-wide text-xl">
          Maiores fuga non mollitia nam eligendi ab neque rem ?
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
