import products from '../../../products.json';
import StoreContainer from '@/containers/StoreContainer';

const page = () => {
  return <StoreContainer products={products} />;
};

export default page;
