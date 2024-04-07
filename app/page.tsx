"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = async (event: any) => {
    const file = event?.target.files[0];
    const imageUrl: any = file && URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  return (
    <div className="grid place-items-center gap-5">
      <div className="absolute z-10 top-0 transition-all left-0 blob-wrap x h-[100px] w-[200px]">
        <Image
          id="banana"
          src={"/banana.png"}
          fill
          alt={`Bouncing Image`}
          className="absolute blob y transition-all"
        />
      </div>

      <section className="z-20 p-5 grid w-full place-items-center gap-5">
        <h1 className="font-bold text-center text-2xl lg:text-4xl">
          BANANA FRAME
        </h1>
        {uploadedImage ? (
          <div className="relative w-full box h-[200px] md:size-64 overflow-hidden p-2">
            <Image
              className="rounded-md absolute object-cover p-2"
              src={uploadedImage}
              alt="Uploaded"
              fill
            />
          </div>
        ) : (
          <div className="box sm:size-64 w-full h-[200px]" />
        )}

        <label
          htmlFor="imageUpload"
          className="group relative overflow-hidden border cursor-pointer text-sm hover:bg-primary1 hover:text-white transition-all font-semibold border-primary1 rounded-3xl px-6 py-2 bg-transparent"
        >
          <p className="absolute group-hover:-translate-y-9 transition-transform duration-500 ease-in-out">
            Choose File
          </p>
          <p className="translate-y-9 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            Choose File
          </p>
          <input
            type="file"
            name="imageUpload"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </section>
    </div>
  );
}
