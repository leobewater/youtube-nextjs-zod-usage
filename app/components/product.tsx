'use client';

import { useEffect } from 'react';

// type script not enough to validate the api response, what happen if the api removed one of the key such as name???
// TS doesn't check the type at runtime
type Product = {
  name: string;
  price: number;
};

const Product = () => {
  useEffect(() => {
    // typescript return api as "any" type
    fetch('/api/product')
      .then((res) => res.json())
      .then((product: Product) => {
        console.log(product.name?.toUpperCase());
      });
  }, []);
  return <div>product</div>;
};

export default Product;
