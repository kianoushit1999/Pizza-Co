import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="flex flex-col justify-center gap-y-3">
      <ButtonLink to="/menu">
        <span className="inline-block">&rarr;</span> Menu
      </ButtonLink>

      <h2 className="py-2 text-center text-xl font-semibold sm:py-4">
        Your cart, %NAME%
      </h2>

      <ul className="flex flex-col gap-y-3">
        {cart.map((item) => {
          return <CartItem key={item.pizzaId} item={item} />;
        })}
      </ul>

      <div className="flex justify-around gap-x-12">
        <Button to="/order/new">Order pizzas</Button>
        <Button>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
