'use client';

import Link from 'next/link';
import Icon from '../icons/Icon';
import { useAppDispatch } from '@/helpers/reduxHooks';
import { clearCart } from '@/store/cartSlice';
import { clearLocalStorage } from '@/helpers/productFunctions';

interface PaymentModalProps {
  showModal: boolean;
  onClose: () => void;
}

const PaymentModal = ({ showModal, onClose }: PaymentModalProps) => {
  const dispatch = useAppDispatch();

  const handleModalActions = () => {
    clearLocalStorage('furnyCart');
    dispatch(clearCart());
  };

  return (
    <>
      {showModal && (
        <div
          className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed 
        inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
        >
          <div
            className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full 
          lg:h-auto md:h-auto"
          >
            {/* CONTENT */}
            <div
              className={`translate duration-300 h-full 
            ${
              showModal
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }
            `}
            >
              <div
                className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg 
                relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                {/* HEADER */}
                <div
                  className="flex items-center p-6 rounded-t justify-center relative 
                  border-b-[1px]"
                >
                  <div className="text-xl font-semibold">Payment Info</div>

                  <button
                    onClick={() => {
                      onClose();
                      handleModalActions();
                    }}
                    className="p-1 border-0 hover:opacity-70 transition absolute right-1"
                  >
                    <Icon name="GrClose" size={20} />
                  </button>
                </div>

                {/* BODY */}
                <div className="relative p-6 flex flex-col justify-center items-center border-b-[1px]">
                  <Icon name="AiOutlineCheck" color="green" size={60} />
                  <span className="mt-2 text-lg">Successfull</span>
                </div>

                <div className="flex flex-col gap-2 p-6">
                  <div className="flex flex-row justify-end items-center gap-4 w-full">
                    <Link
                      href="/"
                      className="text-center text-rose-600 hover:text-rose-500 text-base font-medium"
                      onClick={handleModalActions}
                    >
                      Home
                    </Link>
                    <Link
                      href="/store"
                      className="text-center bg-rose-600 hover:bg-rose-500 text-white 
                      py-1 px-2 ml-2 rounded text-base font-medium"
                      onClick={handleModalActions}
                    >
                      Keep shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
