import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Link
      className="absolute text-center bottom-5 text-sm"
      href={"https://twitter.com/TheViralBanana"}
    >
      @TheViralBanana
    </Link>
  );
}

export default Footer;
