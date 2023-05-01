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
  let categoryName = params.category;

  if (Object.keys(params).length > 0) {
    if (categoryName === 'sale')
      allProducts = products.filter((prod) => prod.discount === true);
    else if (
      categoryName === 'dining' ||
      categoryName === 'living' ||
      categoryName === 'bedroom'
    )
      allProducts = products.filter(
        (prod) => prod.category.toLowerCase() === categoryName
      );
    else notFound();
  } else allProducts = products;

  return <StoreContainer products={allProducts} categoryName={categoryName} />;
};

export default page;
