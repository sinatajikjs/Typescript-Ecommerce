import Button from "./Button";
import { useCart } from "@/store/CartProvider";
import { TrashIcon } from "@heroicons/react/20/solid";
import { IProduct } from "@/interfaces/Interfaces";

interface IProps {
  product: IProduct
}

const QTYButtons = ({product}:IProps) => {
  const { getItemQuantity, addToCart, removeFromCart } = useCart();

  const itemQuantity = getItemQuantity(product.id)

  return (
    <div className="flex items-center gap-2">
      <Button
        className="w-16 flex justify-center"
        onClick={() => removeFromCart(product)}
      >
        {itemQuantity! <= 1 ? (
          <TrashIcon className="w-6" />
        ) : (
          "-"
        )}
      </Button>
      <p className="text-xl w-4 text-center">{itemQuantity}</p>
      <Button className="w-16" onClick={() => addToCart(product)}>
        +
      </Button>
    </div>
  );
};

export default QTYButtons;
