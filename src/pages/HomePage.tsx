import Product from "@/components/Product";
import storeItems from "@/data/items.json";

const HomePage = () => {


  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-4xl font-semibold">Store</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {storeItems.map((product) => {
          return (
            <Product key={product.id} product={product}/>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
