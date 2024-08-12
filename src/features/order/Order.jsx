// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

// const order = {
// http://localhost:5173/order/IQMM3G
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(id)
  return (
    <div className="space-y-8 px-3">
      <div className="flex flex-col items-center justify-start gap-3 sm:flex-row sm:justify-between sm:gap-0">
        <h2 className="">Status</h2>

        <div className="space-x-4 text-xs">
          {priority && (
            <span className="rounded-full bg-green-600 px-2 py-1 text-slate-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-red-600 px-2 py-1 text-slate-100">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between text-sm rounded bg-slate-200 px-4 py-2">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500 text-xs">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="space-y-2 divide-stone-200 divide-y-2">
          {cart.map((item) => {
            return <OrderItem item={item} key={item.id} />
          })}
      </ul>

      <div className="text-sm rounded bg-slate-200 px-4 py-2 space-y-2">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-stone-700 font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
