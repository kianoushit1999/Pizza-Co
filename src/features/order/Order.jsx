// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from "./OrderItem";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData, useFetcher } from "react-router-dom";
import store from "../../../store";
import { clearCart } from "../cart/CartSlice";
import { useEffect } from "react";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state == "idle") {
        fetcher.load("/menu");
      }
    },
    [fetcher],
  );

  const {
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
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

      <div className="flex flex-col gap-3 rounded bg-slate-200 px-4 py-2 text-sm sm:flex-row sm:justify-between">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="space-y-2 divide-y-2 divide-stone-200">
        {cart.map((item) => {
          return (
            <OrderItem
              item={item}
              key={item.pizzaId}
              isLoadingingredients={fetcher.state === "loading"}
              ingredients={
                fetcher.data?.find((pizza) => {
                  return pizza.id === item.pizzaId
                })?.ingredients ?? []
              }
            />
          );
        })}
      </ul>

      <div className="space-y-2 rounded bg-slate-200 px-4 py-2 text-sm">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold text-stone-700">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  store.dispatch(clearCart());
  return order;
}

export default Order;
