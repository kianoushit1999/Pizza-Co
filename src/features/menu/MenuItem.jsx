import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import {useDispatch} from "react-redux";
import { addItem } from "../cart/CartSlice";

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const addItemHandler = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity:1,
      unitPrice,
      totalPrice: unitPrice
    }

    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-3">
      <img
        className={`h-24 ${soldOut && "opacity-75 grayscale"}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between py-2 text-sm">
          {!soldOut ? (
            <p className="">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}

          {!soldOut && <Button type="sm" onClick={addItemHandler}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
