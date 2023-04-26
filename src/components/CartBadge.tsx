import { useCart } from "@/store/CartProvider";

const CartBadge = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, num) => total + num.qty, 0);

  if (!totalItems) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xl w-7 h-7 rounded-full flex items-center justify-center">
      {totalItems}
    </span>
  );
};

export default CartBadge;
