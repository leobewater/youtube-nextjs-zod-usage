'use client';

import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

const searchParamsSchema = z.object({
  id: z.coerce.number(), // convert it to a number
  color: z.enum(['red', 'green', 'blue']),
});

const ProductSearchParams = () => {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams);
  const validatedSearchParams =
    searchParamsSchema.safeParse(searchParamsObject);

  if (!validatedSearchParams.success) {
    console.error(validatedSearchParams.error);
    return;
  }

  console.log(validatedSearchParams.data);
  console.log(validatedSearchParams.data.id.toFixed());

  return <h2>Product Search Params with Zod</h2>;
};

export default ProductSearchParams;
