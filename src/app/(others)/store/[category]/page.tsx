import products from '../../../../products.json';
import { Product } from '@/helpers/types';
import StoreContainer from '@/containers/StoreContainer';

const page = ({ params }: any) => {
  let allProducts: Product[] = [];

  if (Object.keys(params).length > 0) {
    if (params.category === 'sale')
      allProducts = products.filter((prod) => prod.discount === true);
    else
      allProducts = products.filter(
        (prod) => prod.category.toLowerCase() === params.category
      );
  } else allProducts = products;

  return <StoreContainer products={allProducts} />;
};

export default page;
