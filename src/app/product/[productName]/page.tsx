import Steps from '@/components/steps/Steps';
import products from '../../../products.json';
import { Product } from '@/helpers/types';
import Image from 'next/image';
import DiscountPrice from '@/components/discountPrice/DiscountPrice';
import SecondaryInfos from '@/components/productInfos/SecondaryInfos';
import ProductActions from '@/components/productInfos/ProductActions';
import ProductCard from '@/components/card/product/ProductCard';
import Title from '@/components/title/Title';

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

  products.map((prod) => {
    if (product && prod.category === product.category && prod.id !== product.id)
      similarProducts.push(prod);
  });

  const {
    id,
    image,
    product_name,
    discount,
    category,
    price,
    weight,
    dimensions,
    materials,
    info,
    madeIn,
  } = product;

  let similars =
    similarProducts?.length > 2 ? similarProducts.slice(0, 3) : similarProducts;

  return (
    <div className="container mx-auto px-5 md:px-10 mt-10 min-h-screen border-b">
      <Steps product={product} />
      <div className="grid-two mt-10">
        <Image
          src={product.image}
          alt="product"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto card-img-radius"
        />

        <div className="md:pl-10">
          <h2 className="text-2xl md:text-4xl tracking-wider mb-3 text-center md:text-start">
            {product.product_name}
          </h2>

          <DiscountPrice
            discount={discount}
            price={price}
            className="text-2xl md:text-4xl text-center md:text-start font-light"
          />

          <p className="py-10 text-sm md:text-xl text-zinc-800 tracking-wide border-b-2 border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            cupiditate vel corrupti odio nesciunt incidunt non excepturi
            assumenda consectetur.
          </p>

          <SecondaryInfos
            id={id}
            materials={materials}
            info={info}
            weight={weight}
            dimensions={dimensions}
            madeIn={madeIn}
          />

          <ProductActions />
        </div>
      </div>

      <div className="pt-20 pb-10">
        <Title title="You may also consider" />
        <div className="grid-three">
          {similars.map((prod) => (
            <ProductCard
              key={prod.id}
              productName={prod.product_name}
              price={prod.price}
              image={prod.image}
              discount={prod.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
