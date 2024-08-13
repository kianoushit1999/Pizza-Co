import {formatCurrency} from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";

function CartItem({ item }) {
  const {   name, quantity, totalPrice } = item;
  const dispatch = useDispatch()

  return (
    <li className="flex justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-x-5">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="sm" onClick={()=>dispatch(deleteItem(item.pizzaId))}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
