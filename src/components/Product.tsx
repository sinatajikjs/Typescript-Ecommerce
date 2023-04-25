import { formatCurrency } from "@/utilities/formatCurrency";
import Button from "./Button";

interface IProps {
  product: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  };
}

const Product = ({ product }: IProps) => {
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
        <Button>+ Add To Cart</Button>
      </div>
    </div>
  );
};

export default Product;
