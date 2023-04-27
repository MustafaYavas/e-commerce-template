'use client';
import Icon from '../Icon/Icon';
import styles from './SideDrawer.module.scss';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import { CartProduct } from '@/helpers/types';
import Image from 'next/image';
import Link from 'next/link';
import {
  deleteItemFromLocalStorage,
  getQuantity,
  setLocalStorage,
} from '@/helpers/productFunctions';
import { useAppDispatch, useAppSelector } from '@/helpers/reduxHooks';
import { removeItem, updateItem } from '@/store/cartSlice';

interface SideDrawerProps {
  isOpen: boolean;
  closeDrawer?: () => void;
}

const SideDrawer = ({ isOpen, closeDrawer }: SideDrawerProps) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { items, itemTypeCount, total } = useAppSelector((state) => state.cart);

  useEffect(() => {
    setTimeout(() => {
      setIsContentVisible(true);
    }, 500);
  }, []);

  const handleQuantity = (item: CartProduct, e: any) => {
    setLocalStorage({
      id: item.id,
      quantity: parseInt(e.target.value),
      fromCart: true,
    });
    // dispatch(setCart({ product: item, value: e.target.value }));
    dispatch(updateItem({ product: item, quantity: e.target.value }));
  };

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem({ id: itemId }));
    deleteItemFromLocalStorage(itemId, 'furnyCart');
  };

  return (
    <>
      <div
        className={`absolute ${styles['drawer-overlay']}`}
        onClick={closeDrawer}
      />

      <div
        style={{ width: isOpen ? '40%' : '0' }}
        className={`absolute ${styles['drawer-container']}`}
      >
        {isContentVisible && (
          <>
            <div className={styles.header}>
              <div className="flex items-center gap-5">
                <h4 className="text-xl font-semibold">Your Cart</h4>
                <span className="rounded bg-rose-600 text-white font-semibold text-sm px-2">
                  {itemTypeCount}
                </span>
              </div>
              <span onClick={closeDrawer}>
                <Icon
                  name="GrClose"
                  color="black"
                  size={18}
                  className="cursor-pointer"
                />
              </span>
            </div>

            <div
              className={`${styles.body} flex flex-col ${
                items.length > 0
                  ? 'justify-start items-between'
                  : 'justify-center items-center'
              }`}
            >
              {items.length > 0 ? (
                items.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full flex justify-between items-center pr-2 md:my-5 ${styles['drawer-cart-item']}`}
                  >
                    <div
                      className={`flex items-start md:items-center justify-between md:justify-start h-full gap-5 
                      ${styles.left} w-full`}
                    >
                      <Image
                        src={item.image}
                        alt="cart-img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-auto w-full card-img-radius ${styles['drawer-cart-item-img']}`}
                      />
                      <div className="flex flex-col justify-start md:justify-between items-start gap-2 h-full">
                        <div>
                          <h4 className="text-sm md:text-lg font-medium">
                            {item.product_name}
                          </h4>
                          <p>$ {item.price} USD</p>
                        </div>

                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            handleRemoveItem(item.id);
                          }}
                        >
                          Remove
                        </span>
                      </div>
                    </div>

                    <div className="h-full justify-end items-start hidden md:flex">
                      <input
                        type="number"
                        defaultValue={getQuantity(item.id)}
                        min={1}
                        onChange={(e) => {
                          handleQuantity(item, e);
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-xl font-semibold">Your cart is empty.</p>
                  <Button
                    isLink={true}
                    href="/store"
                    isFill={true}
                    text={<span>VISIT STORE</span>}
                  />
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="pr-6 mt-5 border-t border-slate-200 w-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-lg font-medium">
                    Subtotal
                  </span>
                  <span className="text-sm md:text-lg text-slate-700">
                    $ {total} USD
                  </span>
                </div>

                <Link
                  href="/payment"
                  className="w-100 block text-center bg-zinc-900 hover:bg-zinc-800 text-white 
                rounded-sm md:mt-2 py-1 md:py-2 text-sm md:text-lg"
                  style={{ width: '100%' }}
                  onClick={() => {}}
                >
                  CONTINUE TO CHECKOUT
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SideDrawer;
