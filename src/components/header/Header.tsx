'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import styles from './Header.module.scss';
import Dropwdown from '../dropdown/Dropdown';
import Icon from '../Icon/Icon';
import SideDrawer from '../sideDrawer/SideDrawer';
import { useAppDispatch, useAppSelector } from '@/helpers/reduxHooks';
import { getProductById } from '@/helpers/productFunctions';
import { CartProduct } from '@/helpers/types';
import { setAllItemsToCart } from '@/store/cartSlice';
import { openDrawer, closeDrawer } from '@/store/sideDrawerSlice';

const Header = () => {
  const { data } = useSession();
  const { itemTypeCount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.drawer);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem('furnyCart')!);
    const allItems: CartProduct[] = [];

    if (cartItems && cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        const product = getProductById({ id: cartItems[i].id });
        allItems.push({
          id: product.id,
          product_name: product.product_name,
          image: product.image,
          price: product.price,
          discount: product.discount,
          quantity: cartItems[i].quantity,
        });
      }
      dispatch(
        setAllItemsToCart({ products: allItems, count: cartItems.length })
      );
    }
  }, []);

  useEffect(() => {
    console.log(isOpen);
    if (isOpen) document.body.classList.add('stop-scrolling');
    else document.body.classList.remove('stop-scrolling');
  }, [isOpen]);

  const handleToggleDrawer = () => {
    if (isOpen) dispatch(closeDrawer());
    else dispatch(openDrawer());
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
          <Link href="/">FURNY</Link>
        </h1>
        <div className="flex justify-between items-center gap-2 md:gap-5 mt-1 md:mt-0">
          <Icon
            name="AiOutlineSearch"
            className={`cursor-pointer ${styles['header-icons']}`}
            color="black"
          />
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleToggleDrawer}
          >
            <Icon
              name="MdShoppingCart"
              className={styles['header-icons']}
              color="black"
            />
            <span className="rounded bg-rose-600 text-white font-semibold text-sm px-2">
              {itemTypeCount}
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

      {isOpen && <SideDrawer isOpen={isOpen} />}
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
