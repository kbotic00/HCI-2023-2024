"use client";  // Make sure this is at the top of your file

import { useEffect, useState } from "react";
import Brandbox from "./components/Brandbox";
import Slider from "./components/Slider";
import { fetchProducts } from "../lib/contentful";
import Link from "next/link";
import Image from "next/image";  // Import Image from next/image

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  color: string;
  price: number;
  brand: string;
  description: string;
  gender: string;
  mainPhoto?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

const defaultImage = "/path/to/default-image.png";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        const mappedProducts = fetchedProducts.map((product: any) => ({
          id: product.sys.id,
          name: product.name || "Unnamed Product",
          shortDescription: product.shortDescription || "No description available",
          color: product.color || "No color available",
          price: product.price ? parseFloat(product.price) : 0, // Ensure price is a number
          brand: product.brand || "No brand available",
          description: product.description || "No description available",
          gender: product.gender,
          mainPhoto: product.mainPhoto?.url || defaultImage,
          image2: product.image2?.url,
          image3: product.image3?.url,
          image4: product.image4?.url,
        }));
        setProducts(mappedProducts);  // Set products to state
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Function to render product cards
  const renderProductCards = (productSlice: Product[]) => {
    return productSlice.map((product) => (
      <div key={product.id} className="w-[150px] sm:w-[130px] lg:w-[170px] flex gap-x-8 gap-y-16 justify-between flex-wrap relative rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Link href={`/${product.id}`} className="full flex flex-col sm:w-[45%] lg:w-[22%]">
          <div className="mb-6">
            <div className="relative w-[150px] sm:w-[130px] lg:w-[170px] h-[140px]">
              <Image
                src={product.mainPhoto || defaultImage}
                alt={product.name || "Product Image"}
                fill  // Use the 'fill' prop instead of layout="fill"
                style={{ objectFit: 'cover' }}  // Directly set the objectFit style
                className="rounded-3xl z-10 hover:opacity-60 transition-opacity ease duration-500"
              />
            </div>
            <div className="h-15 flex-col justify-start items-start gap-2 inline-flex bg-slate- w-[209px] px-2 py-1">
              <div className="flex-col justify-start items-start flex">
                <div className="text-center text-[#212121] text-sm font-semibold font-['Montserrat']">{product.name}</div>
                <div className="text-center text-[#7a7981] text-xs font-medium font-['Montserrat']">{product.gender} tenisice</div>
              </div>
              <div className="relative w-[209px] flex flex-row">
                <div className="left-1 absolute text-center text-[#212121] text-xs font-semibold font-['Montserrat']">€ {product.price}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="text-black max-w-[100%]">
      <Slider />
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-customGray">
        <h1 className="text-2xl font-bold mb-4">Dropping soon</h1>
        <div className=" hidden md:flex  md:grid-cols-5 md:mt-10 md:pb-9 md:pl-4 md:justify-center md:gap-5 md:gap-y-8">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(0, 5))}
        </div>
        <div className="hidden sm:flex sm:mt-5 sm:pb-7 sm:pl-[9%] sm:justify-center sm:gap-5 sm:gap-y-5 md:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(0, 3))}
        </div>
        <div className="grid grid-cols-2 justify-center items-center py-5 pl-[9%] gap-3 sm:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(0, 4))}
        </div>

        <h1 className="text-2xl font-bold mb-4">Najnovije</h1>
        <div className=" hidden md:flex  md:grid-cols-5 md:mt-10 md:pb-9 md:pl-4 md:justify-center md:gap-5 md:gap-y-8">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(5, 10))}
        </div>
        <div className="hidden sm:flex sm:mt-5 sm:pb-7 sm:pl-[9%] sm:justify-center sm:gap-5 sm:gap-y-5 md:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(5, 8))}
        </div>
        <div className="grid grid-cols-2 justify-center items-center py-5 pl-[9%] gap-3 sm:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(5, 9))}
        </div>
      </div>
      
      <Brandbox />
      
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-customGray">
        <h1 className="text-2xl font-bold mb-4">Najprodavanije</h1>
        <div className=" hidden md:flex  md:grid-cols-5 md:mt-10 md:pb-9 md:pl-4 md:justify-center md:gap-5 md:gap-y-8">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(10, 15))}
        </div>
        <div className="hidden sm:flex sm:mt-5 sm:pb-7 sm:pl-[9%] sm:justify-center sm:gap-5 sm:gap-y-5 md:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(10, 13))}
        </div>
        <div className="grid grid-cols-2 justify-center items-center py-5 pl-[9%] gap-3 sm:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(10, 14))}
        </div>

        <h1 className="text-2xl font-bold mb-4">Featured Product</h1>
        <div className=" hidden md:flex  md:grid-cols-5 md:mt-10 md:pb-9 md:pl-4 md:justify-center md:gap-5 md:gap-y-8">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(15, 20))}
        </div>
        <div className="hidden sm:flex sm:mt-5 sm:pb-7 sm:pl-[9%] sm:justify-center sm:gap-5 sm:gap-y-5 md:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(15, 18))}
        </div>
        <div className="grid grid-cols-2 justify-center items-center py-5 pl-[9%] gap-3 sm:hidden ">
          {/* Display first 5 products */}
          {renderProductCards(products.slice(15, 19))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
