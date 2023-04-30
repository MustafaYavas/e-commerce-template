import products from '../../../products.json';
import StoreContainer from '@/containers/StoreContainer';

export const metadata = {
  title: 'Store',
};

const page = () => {
  return <StoreContainer products={products} />;
};

export default page;
