import { parsedEnv } from '@/app/lib/env';
import { checkoutFormSchema, productSchema } from '@/app/lib/validations';
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
  // use parsed env instead process.env with type hint.
  console.log('env DATABASE_URL', parsedEnv.DATABASE_URL);

  // validate on reading json data
  /*
  const jsonDirectory = path.join(process.cwd(), './app/lib');
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

  const parsedProduct = productSchema.safeParse(fileContents);
  console.log(parsedProduct);

  if (!parsedProduct.success) {
    return NextResponse.json(parsedProduct.error, { status: 422 });
  }
  */

  const parsedProduct = {
    id: 1,
    name: 'Cool jeans',
    price: 100,
  };

  return NextResponse.json(parsedProduct);
}

// post method, receiving data
export async function POST(request: Request, response: NextResponse) {
  const body: unknown = await request.json();

  const parsedForm = checkoutFormSchema.safeParse(body);
  if (!parsedForm.success) {
    return NextResponse.json(parsedForm.error, { status: 422 });
  }

  return NextResponse.json(parsedForm);
}
