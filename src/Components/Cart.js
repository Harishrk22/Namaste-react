import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import SubCategories from "./SubCategories";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 bg-grey-50 border-none border-4 flex justify-center align-middle items-center m-auto my-10 p-6 shadow-2xl">
      <button className="bg-red-700" onClick={handleClear}>
        clear
      </button>
      <div>
        <SubCategories item={cartItems}></SubCategories>
      </div>
    </div>
  );
};

export default Cart;
