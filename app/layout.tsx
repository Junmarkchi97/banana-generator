import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banana Meme Generator",
  description: "An app for generating banana meme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-primary2 font-sans h-screen grid place-items-center`}
      >
        <div className="absolute h-7 w-10 top-0">
          <Image alt="banana small" fill src={"/banana-small.png"} />
        </div>
        <header className="hidden md:flex font-semibold z-10 text-lg absolute top-10 items-center gap-10">
          <ul>
            <Link href={"/"}>Frame Generator</Link>
          </ul>
          <ul>
            <Link href={"/meme-list"}>Meme List</Link>
          </ul>
          <ul>
            <Link href={"/leaderboard"}>Who holds the most $BANANA?</Link>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
