import Icon from '../icon/Icon';

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Icon name="RiEmotionUnhappyLine" size={48} />
      <h4 className="text-lg md:text-2xl my-5 tracking-widest font-semibold">
        Page not found
      </h4>
      <Link
        href="/"
        className="block text-center bg-rose-600 hover:bg-rose-500
        text-white rounded-sm py-1 md:py-2 px-2"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
