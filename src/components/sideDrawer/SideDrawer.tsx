'use client';
import Icon from '../Icon/Icon';
import styles from './SideDrawer.module.scss';
import { useEffect, useState } from 'react';
import Button from '../button/Button';

interface SideDrawerProps {
  isOpen: boolean;
  closeDrawer?: () => void;
}

const SideDrawer = ({ isOpen, closeDrawer }: SideDrawerProps) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsContentVisible(true);
    }, 125);
  }, []);

  return (
    <>
      <div
        className={`absolute ${styles['drawer-overlay']}`}
        onClick={closeDrawer}
      />

      <div
        id="mySidenav"
        style={{ width: isOpen ? '35%' : '0' }}
        className={`absolute ${styles['drawer-container']}`}
      >
        {isContentVisible && (
          <>
            <div className={styles.header}>
              <div className="flex items-center gap-5">
                <h4 className="text-xl font-semibold">Your Cart</h4>
                <span className="rounded bg-rose-600 text-white font-semibold text-sm px-2">
                  0
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

            <div className={styles.body}>
              <p className="text-xl font-semibold">Your cart is empty.</p>
              <Button
                isLink={true}
                href="/store"
                isFill={true}
                text={<span>VISIT STORE</span>}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SideDrawer;
