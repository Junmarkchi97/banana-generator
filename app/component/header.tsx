"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <header className="hidden md:flex font-semibold w-full z-10 text-lg absolute justify-center top-10 items-center gap-10">
      <ul>
        <Link href={"/"}>Frame Generator</Link>
      </ul>
      <ul>
        <Link href={"/memes"}>Memes</Link>
      </ul>
      <ul>
        <Link href={"/leaderboard"}>Banana Gang</Link>
      </ul>
      <audio ref={audioRef} id="myAudio" src="ilovebanana.mp3" loop></audio>
      <button
        type="button"
        className="absolute right-40"
        onClick={togglePlayPause}
      >
        <Image
          src={isPlaying ? "/volume-max.svg" : "/volume-mute.svg"}
          alt="volume"
          width={25}
          height={25}
        />
      </button>
    </header>
  );
}

export default Header;
