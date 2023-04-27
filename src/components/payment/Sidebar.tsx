import { useAppSelector } from '@/helpers/reduxHooks';

const Sidebar = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  return (
    <div className="h-full w-full md:w-1/5 border border-slate-200 rounded sticky top-0 py-5 px-3">
      <h4 className="text-rose-600 text-sm">
        SELECTED PRODUCTS ({items.length})
      </h4>

      <p className="text-xl font-medium mt-2">{total + 9.99} $</p>

      <button className="w-full bg-rose-600 hover:bg-rose-500 text-white rounded mt-5 py-2 text-lg">
        Order
      </button>

      <p className="flex justify-between items-center mt-5 text-sm">
        <span>Shipping Cost</span>
        <span>9,99 $</span>
      </p>

      <p className="flex justify-between items-center mt-2 text-sm">
        <span>Products</span>
        <span>{total} $</span>
      </p>
    </div>
  );
};

export default Sidebar;
