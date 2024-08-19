import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "../cart/CartSlice";

function ItemQuantity({ children, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center space-x-2">
      <Button type="circle" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
      <p>{children}</p>
      <Button type="circle" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default ItemQuantity;
