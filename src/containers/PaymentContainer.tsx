'use client';
import Icon from '@/components/icons/Icon';
import PaymentItems from '@/components/payment/PaymentItems';
import Sidebar from '@/components/payment/Sidebar';
import { useAppSelector } from '@/helpers/reduxHooks';
import { CartProduct } from '@/helpers/types';

const PaymentContainer = () => {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <div>
      {items.length > 0 ? (
        <div style={{ minHeight: '60vh' }}>
          <h4 className="text-2xl border-b border-slate-200 mb-5 pb-1">
            My cart{' '}
            <span className="text-xl text-slate-400 font-thin">
              ({items.length} {items.length > 1 ? 'products' : 'product'})
            </span>
          </h4>

          <div className="md:flex gap-0 md:gap-20">
            <div className="w-full md:w-4/5">
              {items.map((item: CartProduct) => (
                <PaymentItems item={item} />
              ))}
            </div>

            <Sidebar />
          </div>
        </div>
      ) : (
        <div
          style={{ minHeight: '60vh' }}
          className="flex flex-col justify-center items-center"
        >
          <Icon
            name="MdShoppingCart"
            size={64}
            className="text-rose-600 mb-5"
          />
          <h4 className="text-xl md:text-3xl font-semibold">
            Your cart is currently empty
          </h4>
          <p className="text-lg md:text-xl text-center">
            Reaching the house of your dreams is just a click away.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentContainer;
