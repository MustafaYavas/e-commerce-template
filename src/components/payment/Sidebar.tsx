'use client';
import { useAppDispatch, useAppSelector } from '@/helpers/reduxHooks';
import { useState } from 'react';
import PaymentModal from './PaymentModal';
import Loading from '../loading/Loading';

const Sidebar = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowModal(true);
    }, 1500);
  };

  return (
    <>
      <div className="h-full w-full md:w-1/5 border border-slate-200 rounded sticky top-0 py-5 px-3">
        <h4 className="text-rose-600 text-sm">
          SELECTED PRODUCTS ({items.length})
        </h4>

        <p className="text-xl font-medium mt-2">{total + 9.99} $</p>

        <button
          onClick={handlePayment}
          className="w-full bg-rose-600 hover:bg-rose-500 text-white rounded mt-5 py-2 text-lg"
        >
          Order
        </button>
        <p className="flex justify-between items-center mt-5 text-sm">
          <span>Shipping Cost</span>
          <span>9,99 $</span>
        </p>

        <p className="flex justify-between items-center mt-2 text-sm">
          <span>Products</span>
          <span>{total} $</span>
        </p>
      </div>
      {isLoading && <Loading />}
      <PaymentModal showModal={showModal} onClose={closeModal} />
    </>
  );
};

export default Sidebar;
