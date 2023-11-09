import Link from "next/link";

export interface Product {
  id: number;
  title: string;
  price:number;
  description:string;
  images:string;
}

const BASE_API_URL = "https://fakestoreapi.com";


const getProducts = async (): Promise<Product[]> => {
  const data = await fetch(`${BASE_API_URL}/products?limit=10`);
  return data.json();
};


export default async function Products() {
  const products = await getProducts();
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold p-4 sm:p-10">Products:</h1>
      <ul className="flex flex-col gap-8">
        {products.map((product) => (
          <li key={product.id} className="border border-solid border-stone-900 rounded-xl p-4">
            <Link href={`/products/${product.id}`}>
              <span className="text-lg sm:text-xl">
                {product.title}
              </span>
              <span className="text-center">
                <p>{product.price}&euro;</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}