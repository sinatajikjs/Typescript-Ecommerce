import Button from "@/components/Button";
import QTYButtons from "@/components/QTYButtons";
import { useCart } from "@/store/CartProvider";
import { formatCurrency } from "@/utilities/formatCurrency";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, getItemQuantity, addToCart } = useCart();

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
          return (
            <section
              key={cartItem.id}
              className="flex gap-4 items-center w-[520px] justify-between"
            >
              <img
                className="w-40 aspect-video object-cover rounded-lg"
                src={cartItem.imgUrl}
                alt={cartItem.name}
              />
              <div className="grow">
                <h2 className="text-xl">{cartItem.name}</h2>
                <p>{formatCurrency(cartItem.price)}</p>
              </div>
              <QTYButtons product={cartItem} />
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default CartPage;
