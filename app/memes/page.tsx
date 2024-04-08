"use client";

import React from "react";
import Image from "next/image";

const bananaImages = [
  "/images/banana-1.jpg",
  "/images/banana-2.jpg",
  "/images/banana-3.jpg",
  "/images/banana-4.jpg",
  "/images/banana-5.jpg",
  "/images/banana-6.jpg",
  "/images/banana-7.jpg",
  "/images/banana-8.jpg",
  "/images/banana-9.jpg",
  "/images/banana-10.jpg",
  "/images/banana-11.jpg",
  "/images/banana-12.jpg",
  "/images/banana-13.jpg",
  "/images/banana-14.jpg",
  "/images/banana-15.jpg",
  "/images/banana-16.jpg",
  "/images/banana-17.jpg",
  "/images/banana-18.jpg",
  "/images/banana-19.jpg",
  "/images/banana-20.jpg",
  "/images/banana-21.jpg",
  "/images/banana-22.jpg",
  "/images/banana-23.jpg",
  "/images/banana-24.jpg",
];

function Memes() {
  const downloadImage = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full scrollbar w-full mt-20 overflow-y-scroll">
      <div className="px-5 sm:px-24">
        <div className="columns-1 gap-2 w-full sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-2">
          {bananaImages.map((item) => (
            <div key={item} className="relative w-full object-cover h-[300px]">
              <Image
                alt={item}
                src={item}
                className="rounded-md hover:scale-105 transition-transform absolute object-cover"
                fill
              />
              <button
                type="button"
                onClick={() => downloadImage(item)}
                className="absolute text-xs rounded-md hover:opacity-80 transition-opacity px-2 py-1 bg-primary1 text-white right-2 top-2"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Memes;
