import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const cart = useCart();
  console.log(cart);

  return <div>CartPage</div>;
};

export default CartPage;
