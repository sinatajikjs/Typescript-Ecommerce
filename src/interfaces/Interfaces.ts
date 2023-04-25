export interface IProduct {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export interface ICartItem extends IProduct {
  qty: number;
}

export interface ICartState {
  cartItems: ICartItem[];
}

export interface ICartContext {
  cartItems: ICartItem[];
  addToCart: (payload: IProduct) => void;
  removeFromCart: (payload: IProduct) => void;
  getItemQuantity: (payload: number) => number | null;
}
