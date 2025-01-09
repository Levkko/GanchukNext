"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Логіка для зменшення хедера на десктопах
      setIsScrolled(currentScrollY > 100);

      // Логіка для зникнення/появлення хедера на мобільних пристроях
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY) {
          // Скрол вниз — хедер зникає
          setIsVisible(false);
        } else {
          // Скрол вгору — хедер з'являється
          setIsVisible(true);
          // Скидаємо стан isScrolled, щоб хедер був великим
          setIsScrolled(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 right-0 w-full bg-white bg-opacity-55 text-black flex items-center justify-between px-5 md:justify-end z-50 ${
        isScrolled ? "py-3" : "py-5"
      } transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex space-x-4 flex md:hidden">
        <Link
          href="https://www.facebook.com/ganchukinteriordesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={20.5}
            height={20.5}
            className="w-[20.5px] h-[20.5px]"
          />
        </Link>
        <Link
          href="https://www.instagram.com/ganchuk_interior_design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={20.5}
            height={20.5}
            className="w-[20.5px] h-[20.5px]"
          />
        </Link>
      </div>

      {/* Logo visible only on mobile */}
      <div className="flex-shrink-0 md:hidden absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="/Logo17.svg"
            alt="Logo"
            className={`h-12 scale-150 ${
              isScrolled ? "h-10 scale-125" : "h-12 scale-150"
            } transition-all duration-300`}
            width={120}
            height={50}
          />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-customOrange hover:border-orange-500"
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
      <nav
        className="hidden md:flex space-x-10 mr-10 text-black font-medium text-[0.95rem] transition-colors duration-300"
        style={{
          animationDelay: "1s",
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "1.5",
          fontFamily: "'Montserrat'",
        }}
      >
        <Link
          href="/"
          className="hover:text-customOrange transition-colors duration-300"
        >
          ГОЛОВНА
        </Link>
        <Link
          href="/products"
          className="hover:text-customOrange transition-colors duration-300"
        >
          ПОСЛУГИ
        </Link>
        <Link
          href="/price"
          className="hover:text-customOrange transition-colors duration-300"
        >
          ЦІНИ
        </Link>
        <Link
          href="/projects-page"
          className="hover:text-customOrange transition-colors duration-300"
        >
          ПРОЕКТИ
        </Link>
        <Link
          href="/contacts-page"
          className="hover:text-customOrange transition-colors duration-300"
        >
          КОНТАКТИ
        </Link>
        <Link
          href="https://www.facebook.com/ganchukinteriordesign"
          target="_blank"
          className="flex items-center space-x-2 hover:text-customOrange transition-colors duration-300"
        >
          <Image
            src="/facebook.png"
            alt="Facebook logo"
            width={15}
            height={15}
          />
        </Link>
        <Link
          href="https://www.instagram.com/ganchuk_interior_design/"
          target="_blank"
          className="flex items-center space-x-2 hover:text-customOrange transition-colors duration-300"
        >
          <Image
            src="/instagram.png"
            alt="Instagram logo"
            width={15}
            height={15}
          />
        </Link>

        <Link
          href="https://t.me/ganchukihor/"
          target="_blank"
          className="flex items-center space-x-2 hover:text-customOrange transition-colors duration-300"
        >
          <Image
            src="/telegram.png"
            alt="Instagram logo"
            width={18}
            height={18}
          />
        </Link>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`absolute top-[4.9rem] left-0 w-full bg-white bg-opacity-100 shadow-md md:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex flex-col items-center space-y-5 py-5 text-black font-medium text-[0.95rem] transition-colors duration-300 "
          style={{
            animationDelay: "1s",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "1.5",
            fontFamily: "'Montserrat'",
          }}
        >
          <Link
            href="/"
            className="hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ГОЛОВНА
          </Link>
          <Link
            href="/products-page"
            className="hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ПОСЛУГИ
          </Link>
          <Link
            href="/price-page"
            className="hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ЦІНИ
          </Link>
          <Link
            href="/projects-page"
            className="hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            ПРОЕКТИ
          </Link>
          <Link
            href="/contacts-page"
            className="hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            КОНТАКТИ
          </Link>
          <Link
            href="https://www.facebook.com/ganchukinteriordesign"
            target="_blank"
            className="flex items-center space-x-2 hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/facebook.png"
              alt="Facebook logo"
              width={15}
              height={15}
            />
          </Link>
          <Link
            href="https://www.instagram.com/ganchuk_interior_design/"
            target="_blank"
            className="flex items-center space-x-2 hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/instagram.png"
              alt="Instagram logo"
              width={15}
              height={15}
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}