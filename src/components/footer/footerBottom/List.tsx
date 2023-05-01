import Link from 'next/link';

interface ListProps {
  title: string;
  items: string[];
  href: string[];
}

const List = ({ title, items, href }: ListProps) => {
  return (
    <div className="text-center md:text-start">
      <h4 className="text-lg md:text-xl font-bold tracking-widest text-white">
        {title}
      </h4>
      <div className="flex flex-col text-slate-400 gap-2">
        {items.map((item, index) => (
          <Link
            key={item}
            href={`/${href[index]}`}
            className="mt-4 font-semibold hover:text-slate-100"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
