import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, ingredients, isLoadingingredients}) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex justify-between items-center pt-2 text-sm sm:text-base">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="text-sm text-stone-400">
        {isLoadingingredients === "loading" ? "loading" : ingredients.join(", ")}
      </div>
    </li>
  );
}

export default OrderItem;
