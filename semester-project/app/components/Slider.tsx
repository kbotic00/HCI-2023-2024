"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Ladies Collection",
    description: "",
    img: "https://images.pexels.com/photos/3833490/pexels-photo-3833490.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/list?spol=zensko", // Update the URL to include the filter
   
  },
  {
    id: 2,
    title: "Men Collection",
    description: "",
    img: "https://images.pexels.com/photos/15883360/pexels-photo-15883360/free-photo-of-young-man-in-a-trendy-outfit-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/list?spol=musko", // You can add a different filter here for men's collection
   
  },
  {
    id: 3,
    title: "Sale Collection",
    description: " ",
    img: "https://images.pexels.com/photos/26178670/pexels-photo-26178670/free-photo-of-person-wearing-gold-bracelet-tying-white-shoes.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/list?sale=true", // Example filter for sale items
   
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden z-0">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center gap-8 2xl:gap-12 text-center justify-center align-middle">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold w-1/2">
                {slide.title}
              </h1>
              
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt="picture1"
                fill
                className="object-cover w-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
