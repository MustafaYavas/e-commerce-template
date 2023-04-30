import PaymentContainer from '@/containers/PaymentContainer';
import { CSS_CLASS } from '@/helpers/cssConstant';

export const metadata = {
  title: 'Payment',
};

const page = () => {
  return (
    <div className={CSS_CLASS.CONTAINER}>
      <PaymentContainer />
    </div>
  );
};

export default page;
