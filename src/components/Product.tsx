import { formatCurrency } from "@/utilities/formatCurrency";
import Button from "./Button";
import { useCart } from "@/store/CartProvider";
import { IProduct } from "@/interfaces/Interfaces";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { cartItems,addToCart } = useCart();

  return (
    <div className="flex flex-col border rounded-md">
      <img
        className="h-52 aspect-video object-cover rounded-t-md"
        src={product.imgUrl}
        alt={product.name}
      />
      <div className="p-4 flex flex-col gap-6">
        <div className="flex items-center">
          <h2 className="grow text-3xl font-semibold">{product.name}</h2>
          <p className="text-xl">{formatCurrency(product.price)}</p>
        </div>
        <Button onClick={() => addToCart(product)}>{'+ Add To Cart'}</Button>
      </div>
    </div>
  );
};

export default Product;
