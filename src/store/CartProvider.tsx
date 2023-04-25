import { ReactNode, createContext, useContext, useReducer } from "react";
import { ICartState, ICartContext } from "@/interfaces/Interfaces";
import { addToCart, getItemQuantity } from "@/store/CartActions";
import CartReducer from "@/store/CartReducer";

interface IProps {
  children: ReactNode;
}

const initCartContext: ICartContext = {
  cartItems: [],
  addToCart: () => {},
  getItemQuantity: () => null,
};

const CartContext = createContext<ICartContext>(initCartContext);
export const useCart = () => useContext(CartContext);

const initialState: ICartState = {
  cartItems: [],
};

const CartProvider = ({ children }: IProps) => {
  const [{ cartItems }, dispatch] = useReducer(CartReducer, initialState);

  const ContextValue: ICartContext = {
    cartItems,
    addToCart: addToCart(dispatch),
    getItemQuantity: getItemQuantity(cartItems),
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
