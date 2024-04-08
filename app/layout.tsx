import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Image from "next/image";
import Header from "./component/header";
import Image from "next/image";
import Footer from "./component/footer";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banana Generator",
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
        className={`${inter.className} flex flex-col justify-center text-primary1 items-center relative bg-primary2 font-sans h-screen`}
      >
        <GoogleAnalytics />
        <div className="absolute select-none pointer-events-none -z-[1] top-0 transition-all left-0 blob-wrap x h-[100px] w-[200px]">
          <Image
            id="banana"
            src={"/banana.png"}
            fill
            alt={`Bouncing Image`}
            className="absolute blob y transition-all"
          />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
