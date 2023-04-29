import products from '../../../../products.json';
import { Product } from '@/helpers/types';
import StoreContainer from '@/containers/StoreContainer';
import { notFound } from 'next/navigation';

const page = ({ params }: any) => {
  let allProducts: Product[] = [];

  if (Object.keys(params).length > 0) {
    if (params.category === 'sale')
      allProducts = products.filter((prod) => prod.discount === true);
    else if (
      params.category === 'dining' ||
      params.category === 'living' ||
      params.category === 'bedroom'
    )
      allProducts = products.filter(
        (prod) => prod.category.toLowerCase() === params.category
      );
    else notFound();
  } else allProducts = products;

  return <StoreContainer products={allProducts} />;
};

export default page;
