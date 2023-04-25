import { useCart } from "@/store/CartProvider";

const CartPage = () => {
  const cart = useCart();
  console.log(cart);

  return <div>CartPage</div>;
};

export default CartPage;
