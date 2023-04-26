import Button from "@/components/Button";
import { useCart } from "@/store/CartProvider";
import { formatCurrency } from "@/utilities/formatCurrency";
import { TrashIcon } from "@heroicons/react/20/solid";
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
            <section className="flex gap-4 items-center w-[520px] justify-between">
              <img
                className="w-40 aspect-video object-cover rounded-lg"
                src={cartItem.imgUrl}
                alt={cartItem.name}
              />
              <div className="grow">
                <h2 className="text-xl">{cartItem.name}</h2>
                <p>{formatCurrency(cartItem.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className="w-16 flex justify-center"
                  onClick={() => removeFromCart(cartItem)}
                >
                  {getItemQuantity(cartItem.id)! <= 1 ? (
                    <TrashIcon className="w-6" />
                  ) : (
                    "-"
                  )}
                </Button>
                <p className="text-xl w-4 text-center">
                  {getItemQuantity(cartItem.id)}
                </p>
                <Button className="w-16" onClick={() => addToCart(cartItem)}>
                  +
                </Button>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default CartPage;
