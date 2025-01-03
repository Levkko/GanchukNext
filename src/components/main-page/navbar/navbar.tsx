"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 w-full bg-white bg-opacity-55 text-black flex items-center py-5 justify-between px-5 md:justify-end">
      {/* Logo visible only on mobile */}
      <div className="flex-shrink-0 md:hidden absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <img src="/Logo17.svg" alt="Logo" className="h-12 scale-150" />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-orange-500 hover:border-orange-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-12 mr-10 text-black font-medium text-[0.95rem] transition-colors duration-300 font-montserrat">
        <Link
          href="/"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          ГОЛОВНА
        </Link>
        <Link
          href="/products"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          ПОСЛУГИ
        </Link>
        <Link
          href="/price"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          ЦІНИ
        </Link>
        <Link
          href="/projects"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          ПРОЕКТИ
        </Link>
        <Link
          href="/contact"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          КОНТАКТИ
        </Link>
        <Link
          href="https://www.facebook.com/ganchukinteriordesign"
          target="_blank"
          className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300"
        >
          <img
            src="/facebook.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/ganchuk_interior_design/"
          target="_blank"
          className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300"
        >
          <img
            src="/instagram.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
        </Link>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`absolute top-[4.9rem] left-0 w-full bg-white bg-opacity-55 shadow-md md:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-5 py-5 text-black font-medium text-[0.95rem] transition-colors duration-300 font-montserrat">
          <Link
            href="/"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ГОЛОВНА
          </Link>
          <Link
            href="/products"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ПОСЛУГИ
          </Link>
          <Link
            href="/price"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ЦІНИ
          </Link>
          <Link
            href="/projects"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ПРОЕКТИ
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            КОНТАКТИ
          </Link>
          <Link
            href="https://www.facebook.com/ganchukinteriordesign"
            target="_blank"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/facebook.png"
              alt=""
              style={{ width: "15px", height: "15px" }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/ganchuk_interior_design/"
            target="_blank"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/instagram.png"
              alt=""
              style={{ width: "15px", height: "15px" }}
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}
