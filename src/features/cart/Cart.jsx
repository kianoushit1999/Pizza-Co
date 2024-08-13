import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";
import CartItem from "./CartItem";
import { clearCart } from "./CartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()

  if(cart.length === 0)
    return <EmptyCart />

  return (
    <div className="flex flex-col justify-center gap-y-3 text-center">
      <ButtonLink to="/menu">
        <span className="inline-block">&rarr;</span> Menu
      </ButtonLink>

      <h2 className="py-2 text-center text-xl font-semibold sm:py-4">
        Your cart, {username}
      </h2>

      <ul className="flex flex-col gap-y-3">
        {cart.map((item) => {
          return <CartItem key={item.pizzaId} item={item} />;
        })}
      </ul>

      <div className="flex justify-around gap-x-12">
        <Button to="/order/new">Order pizzas</Button>
        <Button onClick={()=>dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
