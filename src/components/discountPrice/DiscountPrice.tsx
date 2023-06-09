interface DiscountPriceProps {
  discount: boolean;
  price: number;
  className?: string;
}

const DiscountPrice = ({ discount, price, className }: DiscountPriceProps) => {
  return (
    <div className={className}>
      {discount ? (
        <div>
          <span className="line-through text-slate-400 mr-4">
            $ {price} USD
          </span>
          <span className="text-red-600">$ {price} USD</span>
        </div>
      ) : (
        <span className="text-slate-500">$ {price} USD</span>
      )}
    </div>
  );
};

export default DiscountPrice;
