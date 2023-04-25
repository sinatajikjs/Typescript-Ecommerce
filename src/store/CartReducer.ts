import { ICartState, IProduct } from "@/interfaces/Interfaces";
import { ACTION_TYPES } from "./ActionTypes";

export interface IAction {
  type: ACTION_TYPES;
  payload: IProduct;
}

export default (state: ICartState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    }
  }
};
