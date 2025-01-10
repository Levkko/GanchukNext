"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth > 768) {
        setIsScrolled(currentScrollY > lastScrollY);
      }

      if (window.innerWidth <= 768) {
        setIsVisible(currentScrollY <= lastScrollY);
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Отримуємо всі блоки, які потрібно відстежувати
    sections.current = {
      main: document.getElementById("main"),
      services: document.getElementById("services"),
      pricing: document.getElementById("pricing"),
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Налаштуйте цей параметр, щоб визначити, коли блок вважається видимим
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let activeSectionFound = false;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          activeSectionFound = true;
        }
      });

      // Якщо жоден блок не видимий (користувач прокрутив нижче останнього блоку)
      if (!activeSectionFound) {
        setActiveSection(null);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Додаємо спостерігач для кожного блоку
    Object.values(sections.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sections.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleScroll = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Якщо секція не знайдена, перенаправляємо на головну сторінку з хешем
      router.push(`/#${id}`);
    }
  };

  const scrollToTop = (e: React.MouseEvent): void => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => router.push("/"), 1000);
  };

  return (
    <div
      className={`fixed top-0 w-full bg-white bg-opacity-55 text-black flex items-center justify-between px-5 md:justify-end z-50 ${
        isScrolled ? "py-3" : "py-5"
      } transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Соціальні мережі для мобільних пристроїв */}
      <div className="flex space-x-4 md:hidden">
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

      {/* Логотип для мобільних пристроїв */}
      <div className="flex-shrink-0 md:hidden absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" onClick={scrollToTop}>
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

      {/* Кнопка мобільного меню */}
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

      {/* Десктопне меню */}
      <nav className="hidden md:flex space-x-10 mr-10 text-black font-medium text-[0.95rem] transition-colors duration-300 desktop-nav">
        <Link
          href="/"
          className={`hover:text-customOrange transition-colors duration-300 ${
            activeSection === "main" ? "text-customOrange" : ""
          }`}
          onClick={scrollToTop}
          style={{
            fontWeight: "400",
          }}
        >
          ГОЛОВНА
        </Link>
        <Link
          href="#services"
          className={`hover:text-customOrange transition-colors duration-300 ${
            activeSection === "services" ? "text-customOrange" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("services");
          }}
          style={{
            fontWeight: "400",
          }}
        >
          ПОСЛУГИ
        </Link>
        <Link
          href="#pricing"
          className={`hover:text-customOrange transition-colors duration-300 ${
            activeSection === "pricing" ? "text-customOrange" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("pricing");
          }}
          style={{
            fontWeight: "400",
          }}
        >
          ЦІНИ
        </Link>
        <Link
          href="/projects-page"
          className="hover:text-customOrange transition-colors duration-300"
          style={{
            fontWeight: "400",
          }}
        >
          ПРОЕКТИ
        </Link>
        <Link
          href="/contacts-page"
          className="hover:text-customOrange transition-colors duration-300"
          style={{
            fontWeight: "400",
          }}
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
            alt="Telegram logo"
            width={18}
            height={18}
          />
        </Link>
      </nav>

      {/* Мобільне меню */}
      <div
        className={`absolute top-[4.9rem] left-0 w-full bg-white shadow-md md:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-5 py-5 text-black font-medium text-[0.95rem] transition-colors duration-300">
          <Link
            href="/"
            className={`hover:text-customOrange transition-colors duration-300 ${
              activeSection === "main" ? "text-customOrange" : ""
            }`}
            onClick={(e) => {
              scrollToTop(e);
              setIsOpen(false);
            }}
            style={{
              fontWeight: "400",
            }}
          >
            ГОЛОВНА
          </Link>
          <Link
            href="#services"
            className={`hover:text-customOrange transition-colors duration-300 ${
              activeSection === "services" ? "text-customOrange" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("services");
              setIsOpen(false);
            }}
            style={{
              fontWeight: "400",
            }}
          >
            ПОСЛУГИ
          </Link>
          <Link
            href="#pricing"
            className={`hover:text-customOrange transition-colors duration-300 ${
              activeSection === "pricing" ? "text-customOrange" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("pricing");
              setIsOpen(false);
            }}
            style={{
              fontWeight: "400",
            }}
          >
            ЦІНИ
          </Link>
          <Link
            href="/projects-page"
            className="hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
            style={{
              fontWeight: "400",
            }}
          >
            ПРОЕКТИ
          </Link>
          <Link
            href="/contacts-page"
            className="hover:text-customOrange transition-colors duration-300"
            onClick={() => setIsOpen(false)}
            style={{
              fontWeight: "400",
            }}
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