import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import { useCart } from "@/store/CartProvider";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="h-cart relative -top-14 flex flex-col items-center gap-2 justify-center">
        <p className="text-lg">Cart is empty</p>
        <Link to="/">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );

  return (
    <main className="min-h-cart">
      <div className="flex flex-col gap-5 bg-white border rounded-md p-5">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
    </main>
  );
};

export default CartPage;
