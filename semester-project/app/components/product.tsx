"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export interface Product {
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

interface ProductProps {
  product: Product;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className="w-[210px] bg-white rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden">
      <Link href={`../${product.id}`} className="flex flex-col text-left">
        {/* Image */}
        <div className="relative w-full h-[140px] rounded-2xl overflow-hidden">
          <Image
            src={product.mainPhoto?.url || "/placeholder.png"}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="p-4 flex flex-col gap-1 w-full">
          <div className="text-[#212121] text-sm font-semibold">
            {product.name}
          </div>
          <div className="text-[#7a7981] text-xs font-medium">
            {product.shortDescription}
          </div>
          <div className="flex flex-col items-start mt-2">
            <div className="text-[#212121] text-sm font-semibold">
              € {product.price.toFixed(2)}
            </div>
            <div className="text-[#7a7981] text-xs font-medium">
              ({(product.price * 7.53).toFixed(2)} kn)
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
