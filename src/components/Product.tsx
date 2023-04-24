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
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center">
          <h2 className="grow text-3xl font-semibold">{product.name}</h2>
          <p>{product.price}</p>
        </div>
        <button>+ Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
