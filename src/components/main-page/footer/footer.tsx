import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex custom:flex-row flex-col justify-center items-center pb-10 px-[10vw] gap-2 custom:gap-40">
      <h1
        className="text-[25px] lg:text-[30px] font-medium text-gray-800 mb-2 mt-0 text-center sm:text-left"
        style={{
          fontWeight: "400",
        }}
      >
        +38 (067) 783 16 08
      </h1>
      <div className="flex space-x-4">
        <Link href="https://www.facebook.com/ganchukinteriordesign" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" className="w-[23.5px] h-[23.5px]" />
        </Link>
        <Link href="https://www.instagram.com/ganchuk_interior_design/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Twitter" className="w-[23.5px] h-[23.5px]" />
        </Link>
        <Link href="https://t.me/ganchukihor/" target="_blank" rel="noopener noreferrer">
          <img src="/telegram.png" alt="Instagram" className="w-[23.5px] h-[23.5px]" />
        </Link>
      </div>
    </div>
  );
}