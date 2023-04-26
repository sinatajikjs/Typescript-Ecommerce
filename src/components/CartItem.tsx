import { formatCurrency } from "@/utilities/formatCurrency";
import QTYButtons from "./QTYButtons";
import { ICartItem } from "@/interfaces/Interfaces";

interface IProps {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: IProps) => {
  return (
    <section className="flex sm:flex-row flex-col sm:gap-20 px-5 xs:gap-4 gap-2 sm:items-center items-start border-b border-gray-300 pb-4">
      <div className="flex xs:flex-row flex-col xs:items-center items-start xs:gap-4 gap-2 w-full">
        <img
          className="xs:w-40 w-64 aspect-video object-cover rounded-lg"
          src={cartItem.imgUrl}
          alt={cartItem.name}
        />
        <div>
          <h2 className="text-xl font-medium">{cartItem.name}</h2>
          <p className="font-light">{formatCurrency(cartItem.price)}</p>
        </div>
      </div>
      <div className="w-40">
        <QTYButtons product={cartItem} />
      </div>
    </section>
  );
};

export default CartItem;
