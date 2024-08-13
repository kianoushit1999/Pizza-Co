import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cart = useSelector(state => state.cart.cart)

  const total = cart.reduce((prevSum, curItem) => {
    return prevSum + curItem.totalPrice
  }, 0)
  
  return (
    <div className="bg-stone-700 px-4 py-4 sm:px-6 text-sm md:text-base text-stone-200 flex justify-between">
      <p className="text-stone-300 uppercase font-semibold space-x-5 sm:space-x-6">
        <span>{cart.length} pizzas</span>
        <span>${total}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
