import { formatCurrency } from "@/utilities/formatCurrency";
import QTYButtons from "./QTYButtons";
import { ICartItem } from "@/interfaces/Interfaces";

interface IProps {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: IProps) => {
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
      <QTYButtons product={cartItem} />
    </section>
  );
};

export default CartItem;
