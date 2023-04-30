import products from '../../../../products.json';
import { Product } from '@/helpers/types';
import StoreContainer from '@/containers/StoreContainer';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type CategoryPageProps = {
  params: { category: string };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  };
}

const page = ({ params }: CategoryPageProps) => {
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
