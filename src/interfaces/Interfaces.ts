export interface IProduct {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

interface ICartItem extends IProduct {
  qty: number;
}

export interface ICartState {
  cartItems: ICartItem[];
}

export interface ICartContext {
  cartItems: ICartItem[];
  addToCart: (payload: IProduct) => void;
}

