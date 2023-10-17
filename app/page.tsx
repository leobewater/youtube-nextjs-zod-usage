import CheckoutForm from './components/CheckoutForm';
import Product from './components/Product';
import ProductSearchParams from './components/ProductSearchParams';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Product />
      {/* <CheckoutForm /> */}
      
      <div>
        Try:
        <br />
        http://localhost:3000/?id=123&color=red
        <br />
        http://localhost:3000/?id=123&color=grey (see error in console)
        <br />
        http://localhost:3000/ (see error in console)
      </div>
      
      <ProductSearchParams />
    </main>
  );
}
