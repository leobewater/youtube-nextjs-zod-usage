'use client';

import { useEffect } from 'react';

const Product = () => {
  useEffect(() => {
    fetch('/api/product');
  }, []);
  return <div>product</div>;
};

export default Product;
