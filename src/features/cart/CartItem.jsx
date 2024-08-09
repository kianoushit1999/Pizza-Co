import {formatCurrency} from "../../utils/helpers";
import Button from "../../ui/Button";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="flex justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-x-5">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="sm">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
