'use client';

import { z } from 'zod';

// array with a bunch of objects
const cartSchema = z.array(
  z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
  })
);

const Cart = () => {
  const cart: unknown = JSON.parse(localStorage.getItem('cart') || '[]');

  const validatedCart = cartSchema.safeParse(cart);

  if (!validatedCart.success) {
    // outdated cart
    localStorage.removeItem('cart');
    return;
  }

  console.log(validatedCart.data.map((item) => item.id));

  return <div>Cart</div>;
};

export default Cart;
