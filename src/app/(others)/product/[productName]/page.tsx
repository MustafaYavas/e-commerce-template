import products from '../../../../products.json';
import { Product } from '@/helpers/types';
import ProductContainer from '@/containers/ProductContainer';
import { notFound } from 'next/navigation';

const page = ({ params }: any) => {
  let newArr = params.productName.split('-');
  let productName = '';
  let product = {} as Product;
  let similarProducts: Product[] = [];

  for (let i = 0; i < newArr.length; i++) {
    productName += newArr[i][0].toUpperCase() + newArr[i].substring(1) + ' ';
  }

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
