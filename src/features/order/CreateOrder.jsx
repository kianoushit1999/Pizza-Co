import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;
  const formErrors = useActionData();

  return (
    <div className="flex flex-col gap-y-4">
      <h2>Ready to order? lets go!</h2>

      <Form method="POST" className="flex flex-col gap-y-3">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required className="input"/>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
            {formErrors?.phone && formErrors.phone}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="input"/>
          </div>
        </div>

        <div className="flex">
          <input
            className="mx-2 h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 border-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="inline-block">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="my-3">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="text-sm duration-400 inline-block rounded-full bg-yellow-400 px-4 py-2 font-medium uppercase transition-all hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed">
            {isSubmitting ? "submitting" : "order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {};
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";
    return errors;
  }

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
