import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Link
      className="absolute text-center bottom-5 text-sm"
      href={"https://twitter.com/TheViralBanana"}
    >
      @TheViralBanana | Community Created
    </Link>
  );
}

export default Footer;
