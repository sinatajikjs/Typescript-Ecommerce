import { IProduct } from "@/interfaces/Interfaces";
import { ReactNode, createContext, useContext, useReducer } from "react";

interface IProps {
  children: ReactNode;
}

interface CartItemType extends IProduct {
  qty: number;
}

type CartStateType = {
  cartItems: CartItemType[];
};

const initialState: CartStateType = {
  cartItems: [],
};

enum ACTION_TYPES {
  ADD_TO_CART,
}

type ActionType = {
  type: ACTION_TYPES;
  payload: IProduct;
};

interface CartContextType {
  cartItems: CartItemType[];
  addToCart: (payload: IProduct) => void;
}
const initCartContextState: CartContextType = {
  cartItems: [],
  addToCart: () => {},
};

const reducer = (state: CartStateType, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    }
  }
};

const CartContext = createContext<CartContextType>(initCartContextState);
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: IProps) => {
  const [{ cartItems }, dispatch] = useReducer(reducer, initialState);

  const addToCart = (payload: IProduct) => {
    dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
