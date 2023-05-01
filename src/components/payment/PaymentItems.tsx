import Image from 'next/image';

import { CartProduct } from '@/helpers/types';
import styles from './Payment.module.scss';
import Link from 'next/link';
import { createLinkFromName } from '@/helpers/general';
import Icon from '../icons/Icon';
import { deleteItemFromLocalStorage } from '@/helpers/productFunctions';
import { useAppDispatch } from '@/helpers/reduxHooks';
import { removeItem } from '@/store/cartSlice';

interface PaymentItemsProps {
  item: CartProduct;
}

const PaymentItems = ({ item }: PaymentItemsProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem({ id: itemId }));
    deleteItemFromLocalStorage(itemId, 'furnyCart');
  };

  return (
    <div className="flex justify-between mb-10 bg-slate-50 rounded px-2 py-4">
      <div className="flex justify-start items-start gap-5">
        <Link href={`/product/${createLinkFromName(item.product_name)}`}>
          <Image
            src={item.image}
            alt="cart-img"
            height={150}
            width={150}
            className={`card-img-radius ${styles['payment-item-img']}`}
          />
        </Link>
        <Link
          href={`/product/${createLinkFromName(item.product_name)}`}
          className="font-medium"
        >
          {item.product_name}{' '}
          <span className="text-slate-400 font-thin">({item.quantity})</span>
        </Link>
      </div>

      <div className="flex flex-col justify-between items-end md:text-lg font-medium">
        <span
          title="Remove from Cart"
          onClick={() => handleRemoveItem(item.id)}
        >
          <Icon name="GrClose" size={16} className="cursor-pointer" />
        </span>
        <p>{item.price * item.quantity} $</p>
      </div>
    </div>
  );
};

export default PaymentItems;
