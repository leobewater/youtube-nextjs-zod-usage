import { checkoutFormSchema } from '@/app/lib/validations';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const product = {
    name: 'Cool jeans',
    //id: '1',
    price: 100,
  };

  return NextResponse.json(product);
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
