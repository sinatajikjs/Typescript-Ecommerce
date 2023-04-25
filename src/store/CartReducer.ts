import { ICartState, IProduct } from "@/interfaces/Interfaces";
import { ACTION_TYPES } from "./ActionTypes";

export interface IAction {
  type: ACTION_TYPES;
  payload: IProduct;
}

export default (state: ICartState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      const id = action.payload.id;
      let cartItems;
      if (state.cartItems.find((item) => item.id === id)) {
        cartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === id) return { ...cartItem, qty: cartItem.qty + 1 };
          return cartItem;
        });
      } else cartItems = [...state.cartItems, { ...action.payload, qty: 1 }];
      return {
        ...state,
        cartItems,
      };
    }
    case ACTION_TYPES.REMOVE_FROM_CART: {
      const id = action.payload.id;
      let cartItems;
      if (state.cartItems.find((item) => item.id === id)!.qty > 1) {
        cartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === id) return { ...cartItem, qty: cartItem.qty - 1 };
          return cartItem;
        });
      } else cartItems = state.cartItems.filter((item) => item.id !== id);
      return {
        ...state,
        cartItems,
      };
    }
  }
};
