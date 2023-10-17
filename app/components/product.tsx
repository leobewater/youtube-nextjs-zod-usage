'use client';

import { useEffect } from 'react';
import { z } from 'zod';

// type script not enough to validate the api response, what happen if the api removed one of the key such as name???
// TS doesn't check the type at runtime
// type Product = {
//   name: string;
//   price: number;
// };

// This run in runtime
const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});

// use z.infer to get the type for Product instead of re-creating it separately and make the z.object source of truth
type Product = z.infer<typeof productSchema>;

// should we re-create the Product type (duplication)
const getPriceFromProduct = (product: Product) => {
  return product.price;
};

const Product = () => {
  useEffect(() => {
    // typescript return api as "any" type
    fetch('/api/product')
      .then((res) => res.json())
      .then((product: unknown) => {
        // use Zod to validate the product

        // use safeParse without throwing errors and check with the .success property
        const validatedProduct = productSchema.safeParse(product);
        if (!validatedProduct.success) {
          console.error(validatedProduct.error);
          return;
        }

        // use the product and type hinting is working
        console.log(validatedProduct.data.name);
        console.log(validatedProduct.data.price);
      });
  }, []);
  return <div>product</div>;
};

export default Product;
