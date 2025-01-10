"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";

interface RevealElementProps {
  children: ReactNode;
}

const RevealElement: React.FC<RevealElementProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        setIsAnimated(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity duration-1000 ${isAnimated ? 'opacity-100 animate-reveal' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default function Ready() {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="max-w-5xl w-full p-8 flex flex-col md:flex-row">
        {/* Ліва частина: Зображення */}
        <div className="w-full md:w-5/12 flex justify-center items-center mb-6 md:mb-0">
          <Image
            src="/back.jpg"
            alt="Couple sitting back-to-back"
            width={1028}
            height={813}
            className=""
          />
        </div>

        {/* Права частина: Тексти і форма */}
        <div className="w-full md:w-1/2 pl-0 md:pl-6 flex flex-col items-center">
          <h1
            className="text-[30px] font-medium text-gray-800 mb-2 mt-0 text-center w-full"
            style={{
              fontWeight: "400",
            }}
          >
            Готові розпочати?
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            Перша консультація безкоштовна
            <br />
            Залиште свої дані і ми сконтактуємо з вами!
          </p>
          <form 
            action="https://formspree.io/f/mjkkjykv" 
            method="POST"
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Ім'я"
                className="w-[200px] p-3 placeholder-white bg-transparent border-b-2 border-white focus:outline-none focus:border-customOrange"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Номер телефону"
                className="w-[200px] p-3 placeholder-white bg-transparent border-b-2 border-white focus:outline-none focus:border-customOrange"
                pattern="(\+38|38)?[0-9]{10}"
                title="Будь ласка, введіть номер телефону у форматі +38XXXXXXXXXX, 38XXXXXXXXXX або 0XXXXXXXXX"
                required
              />
            </div>
            {/* Кнопка */}
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-white/55 text-gray-700 text-md font-semibold border border-white shadow-[0px_1.3px_2px_2px_rgba(0,0,0,0.15)] hover:text-customOrange transition duration-300"
                style={{
                  fontWeight: "400",
                }}
              >
                НАДСЛАТИ
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Текст внизу з анімацією */}
      <RevealElement>
        <p className="text-gray-700 text-center mt-10 text-[22px] lg:text-[30px]">
          Створюємо інтер&apos;єр, який відображає ваш світ
        </p>
      </RevealElement>
    </div>
  );
}