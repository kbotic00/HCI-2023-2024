"use client"; // Ensure this runs on the client-side

import { useState, useEffect } from "react";
import Image from "next/image";
import Povrat from "../components/Povrat";
import { fetchProductById } from "@/lib/contentful";

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  mainPhoto?: {
    url: string;
  };
  image2?: {
    url: string;
  };
  image3?: {
    url: string;
  };
  image4?: {
    url: string;
  };
}

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const images = [
    product.mainPhoto?.url,
    product.image2?.url,
    product.image3?.url,
    product.image4?.url,
  ].filter((url): url is string => !!url); // Filter out undefined values

  return (
    <div className="px-[4%] md:px-[4%] lg:px-12 xl:px-16 2xl:px-20 relative flex top-10 pb-5 mb-20 flex-col sm:flex-row gap-8 bg-customGray text-black">
      <div className="max-w-[95%] sm:w-1/2 sm:sticky top-10 h-max justify-center">
        <div className="h-[250px] sm:h-[400px] relative">
          <Image
            src={images[index]}
            alt={`Product image ${index + 1}`}
            fill
            sizes="50vw"
            className="object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between gap-4 cursor-pointer mt-8">
          {images.map((url, i) => (
            <div
              className="w-1/4 h-32 relative gap-4"
              key={i}
              onClick={() => setIndex(i)}
            >
              <Image
                src={url}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-1/2 ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 pb-5">
            <h1 className="text-4xl font-medium pt-4">{product.name}</h1>
            <p className="text-gray-500">{product.shortDescription}</p>
            <h3 className="text-l text-gray-700 ">€ {product.price.toFixed(2)}</h3> 
          </div>
          <button className="h-[45px] w-[178px] px-5 py-2 bg-[#252525] rounded-[70px] justify-center items-center flex-wrap  hover:bg-customRed">
              <div className="text-[#f2f2f2] text-base leading-[24.98px]">Dodaj u košaricu</div>
            </button>
          <div className="text-sm">
            <h4 className="font-bold mb-4">Opis</h4>
            <p>{product.description}</p>
          </div>
          <div className="h-[2px] "></div>
          <div className="text-sm">
            <h4 className="font-medium mb-4 text-gray-500">Detalji:</h4>
            <p className="px-3">
              Regular fit
              <br /> Lace closure
              <br /> Suede upper
              <br /> Gum rubber outsole
              <br /> Enjoy the comfort and performance of OrthoLite® sockliner
              <br /> Soft feel
            </p>
          </div>
          <div className="h-[2px] "></div>
          <div className="text-sm">
            <Povrat />
          </div>
        </div>
      </div>
    </div>
  );
}
