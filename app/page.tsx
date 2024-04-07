"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(
    "/placeholder-profile.jpg"
  );

  const handleImageUpload = async (event: any) => {
    const file = event?.target.files[0];
    const imageUrl: any = file && URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  return (
    <div className="grid place-items-center gap-5">
      <section className="z-20 mt-10 p-5 grid w-full place-items-center gap-5">
        {uploadedImage ? (
          <div className="relative box size-52 sm:size-64 overflow-hidden p-2">
            <Image
              className="rounded-md absolute object-cover p-2"
              src={uploadedImage}
              alt="Uploaded"
              fill
            />
          </div>
        ) : (
          <div className="box size-52 sm:size-64" />
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
