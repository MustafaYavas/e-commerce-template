import products from '../../../../products.json';
import { Product } from '@/helpers/types';
import ProductContainer from '@/containers/ProductContainer';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { createCapitalizeString } from '@/helpers/general';

type ProductNamePageProps = {
  params: { productName: string };
};

export async function generateMetadata({
  params,
}: ProductNamePageProps): Promise<Metadata> {
  return {
    title: createCapitalizeString(params.productName),
  };
}

const page = ({ params }: ProductNamePageProps) => {
  let productName = createCapitalizeString(params.productName);
  let product = {} as Product;
  let similarProducts: Product[] = [];

  products.map((prod) => {
    if (prod.product_name.trim() === productName.trim()) product = prod;
  });

  if (Object.keys(product).length === 0) notFound();

  products.map((prod) => {
    if (product && prod.category === product.category && prod.id !== product.id)
      similarProducts.push(prod);
  });

  let similars =
    similarProducts?.length > 2 ? similarProducts.slice(0, 3) : similarProducts;

  return <ProductContainer product={product} similars={similars} />;
};

export default page;
