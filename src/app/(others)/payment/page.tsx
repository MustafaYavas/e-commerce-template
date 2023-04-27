'use client';
import PaymentContainer from '@/containers/PaymentContainer';
import { useAppSelector } from '@/helpers/reduxHooks';

const page = () => {
  const { items, total } = useAppSelector((state) => state.cart);

  return (
    <div className="container mx-auto px-5 md:px-10">
      <PaymentContainer items={items} />
    </div>
  );
};

export default page;
