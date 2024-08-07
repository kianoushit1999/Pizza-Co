import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const cart = fakeCart;

  return (
    <div className="flex flex-col items-center gap-y-3 justify-center">
      <ButtonLink to='/menu'> <span className="inline-block">&rarr;</span> Menu</ButtonLink>

      <h2>Your cart, %NAME%</h2>

      <div className="flex justify-around gap-x-12">
        <Button to="/order/new">Order pizzas</Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
