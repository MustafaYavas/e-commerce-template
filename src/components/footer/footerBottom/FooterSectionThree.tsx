import Icon from '@/components/icon/Icon';
import styles from '../Footer.module.scss';
import Link from 'next/link';
import List from './List';

const FooterBottom = () => {
  return (
    <div className={styles['footer-bottom-container']}>
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="col-span-1 md:col-span-3 text-center md:text-start">
            <h4 className="text-2xl md:text-4xl font-bold tracking-widest text-white">
              FURNY
            </h4>
            <p className="w-full md:w-3/4 mt-2 mb-4 text-white tracking-wide">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex justify-center md:justify-start items-center gap-5">
              <Link href="/">
                <Icon
                  name="AiOutlineTwitter"
                  size={28}
                  className="text-slate-400 hover:text-slate-100 cursor-pointer"
                />
              </Link>
              <Link href="/">
                <Icon
                  name="AiFillFacebook"
                  size={28}
                  className="text-slate-400 hover:text-slate-100 cursor-pointer"
                />
              </Link>
              <Link href="/">
                <Icon
                  name="BsPinterest"
                  size={26}
                  className="text-slate-400 hover:text-slate-100 cursor-pointer"
                />
              </Link>
              <Link href="/">
                <Icon
                  name="AiOutlineInstagram"
                  size={28}
                  className="text-slate-400 hover:text-slate-100 cursor-pointer"
                />
              </Link>
            </div>
          </div>

          <List
            title="Shop"
            items={['All', 'Sale', 'Dining', 'Living', 'Bedroom']}
            href={[
              'store',
              'store/sale',
              'store/dining',
              'store/living',
              'store/bedroom',
            ]}
          />

          <List
            title="Company"
            items={['About', 'Blog', 'Contact Us', 'FAQ', 'Terms & Conditions']}
            href={['/', '/', '/', '/', '/']}
          />

          <List
            title="Theme"
            items={['Style Guide', 'Image License', 'Changelog']}
            href={['/', '/', '/']}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
