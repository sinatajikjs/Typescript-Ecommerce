import { formatCurrency } from "@/utilities/formatCurrency";
import Button from "./Button";
import { useCart } from "@/store/CartProvider";
import { IProduct } from "@/interfaces/Interfaces";
import QTYButtons from "./QTYButtons";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { getItemQuantity, addToCart, removeFromCart } = useCart();

  const itemQuantity = getItemQuantity(product.id);

  return (
    <div className="flex flex-col border rounded-md">
      <img
        className="h-52 aspect-video object-cover rounded-t-md"
        src={product.imgUrl}
        alt={product.name}
      />
      <div className="p-4 flex flex-col gap-6">
        <div className="flex items-center">
          <h2 className="grow text-2xl font-medium">{product.name}</h2>
          <p className="text-xl">{formatCurrency(product.price)}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            disabled={!!itemQuantity}
            className="grow"
            onClick={() => addToCart(product)}
          >
            {itemQuantity ? "In Cart" : "+ Add To Cart"}
          </Button>
          {itemQuantity && <QTYButtons product={product} />}
        </div>
      </div>
    </div>
  );
};

export default Product;
