import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  useGSAP(() => {
    gsap.from("#header", {
      opacity: 0,
      y: -200,
      duration: 1.2,
      ease: "power3.in",
    });
  });
  return (
    <header
      className="flex h-20 w-full items-center px-20 max-md:px-4"
      id="header"
    >
      <div className="flex">
        {/* <h1 className="text-2xl font-bold text-secondary"> */}
          <Image src="/logo.png" width={60} height={60} alt="InspiredCoder"/>
        {/* </h1> */}
      </div>
      <Navbar />
      <a
        href="#"
        className="ml-auto w-fit border px-6 py-3 transition-colors hover:border-secondary hover:text-secondary"
      >
        <span>Get in Touch</span>
      </a>
    </header>
  );
};

export default Header;
