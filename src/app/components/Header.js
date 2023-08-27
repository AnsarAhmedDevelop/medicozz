import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/NewLogoOne.png"

const Header = () => {
  return (
    <>
      <header>
        <div className="flex  justify-between items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="pic"
              width={120}
              height={120}
              placeholder="blur"
              // Loading="lazy"
              className="py-1 "
            />
          </Link>
          <div className="mr-5">
            <ul className="flex items-center justify-between gap-x-10 text-[#eff3f0]">
                <Link href="/">
                <li className="link-underline pb-3">
                    Home
                </li>
                </Link>
                <Link href="/about">
                <li className="link-underline pb-3">
                    About Us
                </li>
                </Link>
                <Link href="/blogs">
                <li className="link-underline pb-3">
                    Blogs
                </li>
                </Link>
                <Link href="/gallery">
                <li className="link-underline pb-3">
                    Gallery
                </li>
                </Link>
                <Link href="/contact">
                <li className="link-underline pb-3">
                    Contact Us
                </li>
                </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
