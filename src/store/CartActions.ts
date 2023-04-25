import { IProduct } from "@/interfaces/Interfaces";
import { ACTION_TYPES } from "./ActionTypes";
import React from "react";
import { IAction } from "./CartReducer";

export const addToCart = (dispatch:React.Dispatch<IAction>) => {
  return (payload: IProduct) => {
    dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload });
  };
};
