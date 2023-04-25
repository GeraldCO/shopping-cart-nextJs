import DefaultLayout from "@/layouts/DefaulLayout";
import { CartProvider } from "@/components/Cart/CartProvider";

export default function Home() {
  return (
    <DefaultLayout>
      <h1>Welcome to my site!</h1>
      <p>this is my home page</p>
    </DefaultLayout>
  );
}
