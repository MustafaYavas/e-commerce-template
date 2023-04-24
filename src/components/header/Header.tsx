'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import styles from './Header.module.scss';
import Dropwdown from '../dropdown/Dropdown';
import Icon from '../Icon/Icon';
import SideDrawer from '../sideDrawer/SideDrawer';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data } = useSession();

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={` ${styles['header-container']}`}>
      <div className="container mx-auto px-5 md:px-10 flex justify-between items-center ">
        <Dropwdown
          toggle="GiHamburgerMenu"
          className={`cursor-pointer mt-1 md:mt-0 ${styles['header-icons']}`}
          tab={0}
          items={['Blog', 'About', 'Contact', 'FAQ', 'Terms & Conditions']}
          href={['blog', 'about', 'contact', 'faq', 'legal']}
        />
        <h1 className="text-2xl md:text-3xl ml-2 md:ml-5 font-bold tracking-widest">
          FURNY
        </h1>
        <div className="flex justify-between items-center gap-2 md:gap-5 mt-1 md:mt-0">
          <Icon
            name="AiOutlineSearch"
            className={`cursor-pointer ${styles['header-icons']}`}
            color="black"
          />
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setOpenDrawer(true)}
          >
            <Icon
              name="MdShoppingCart"
              className={styles['header-icons']}
              color="black"
            />
            <span className="rounded bg-rose-600 text-white font-semibold text-sm px-2">
              0
            </span>
          </div>

          {data?.user && (
            <span onClick={() => signOut()} title="Signout">
              <Icon
                name="AiOutlineLogout"
                className={`cursor-pointer ${styles['header-icons']}`}
                color="black"
              />
            </span>
          )}
        </div>
      </div>

      {openDrawer && (
        <SideDrawer isOpen={openDrawer} closeDrawer={closeDrawer} />
      )}
      <div
        className="flex justify-center items-center gap-4 md:gap-10 mt-3 
        text-gray-400 text-sm md:text-lg font-semibold py-4"
      >
        <Link href="/store" className="hover:text-black">
          All
        </Link>
        <Link href="/store/sale" className="hover:text-black ml-0 md:ml-5">
          Sale
        </Link>
        <Link href="/store/dining" className="hover:text-black ml-0 md:ml-5">
          Dining
        </Link>
        <Link href="/store/living" className="hover:text-black ml-0 md:ml-5">
          Living
        </Link>
        <Link href="/store/bedroom" className="hover:text-black ml-0 md:ml-5">
          Bedroom
        </Link>
      </div>
    </div>
  );
};

export default Header;
