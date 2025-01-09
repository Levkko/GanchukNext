"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainBlock() {
  const handleAnimationEnd: React.AnimationEventHandler<HTMLDivElement> = (
    event
  ) => {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove("animate-moveFade");
  };

  const [opacity, setOpacity] = useState(1);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!blockRef.current) return;

      const scrollTop = window.scrollY;
      const blockHeight = blockRef.current.offsetHeight;
      const blockTop = blockRef.current.offsetTop;

      // Зміщення: 20% висоти блоку
      const offset = blockHeight * 0.2;

      // Нова формула: прозорість стає 0 на 20% раніше
      const newOpacity = 1 - (scrollTop - blockTop) / (blockHeight - offset);
      setOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={blockRef}
      className="flex min-h-[93.2vh] max-h-[900px] static mt-[62px] flex-wrap overflow-hidden relative w-full" // Змінено h-[93.2vh] на min-h-[93.2vh]
    >
      {/* Desktop Block */}
      <div className="xl:block md:hidden sm:hidden sm:flex absolute top-[-30px] left-[-10px] w-full h-full -z-10 pointer-events-none mt-20">
        <div className="absolute mt-[292px] ml-[35px] left-[75px] w-[100px]">
          <Image
            className="w-full h-auto transition-all duration-300 ease-in-out"
            src="/Logo18.svg"
            alt="Logo"
            width={900}
            height={900}
          />
        </div>
        <div className="absolute left-[125px] top-[308px] w-[65px] animate-[spin_0.85s_linear]">
          <Image
            className="w-full h-auto transition-all duration-300 ease-in-out"
            src="/Logo19.svg"
            alt="Logo"
            width={65}
            height={65}
          />
        </div>
        <div className="absolute left-[178px] top-[340px] w-[6px] animate-[moveFromHorizontal_0.9s_ease-in-out]">
          <Image
            className="w-full h-auto transition-all duration-300 ease-in-out"
            src="/Logo20.svg"
            alt="Logo"
            width={6}
            height={6}
          />
        </div>
        <div className="absolute left-[65px] top-[372px] w-[200px] scale-[1.0]">
          <Link href="#">
            <Image src="/Logo17.svg" alt="Logo" width={200} height={200} />
          </Link>
        </div>
      </div>

      {/* Mobile Text Block */}
      <div className="flex sm:hidden absolute top-[-60px] left-0 w-full h-full flex-col justify-center text-center font-montserrat text-[#303030] z-30">
        <div className="flex flex-col items-center text-[clamp(24px,4vw,40px)] font-normal tracking-[0px] animate-reveal pb-5">
          <span className="tracking-[4px]">
            IНТЕР&apos;ЄР
          </span>
          ЩО ВІДОБРАЖАЄ
          <br />
          ВАШ СВІТ
        </div>
        <div className="w-full">
          <Image
            className="w-full max-h-[60vh] object-cover mt-4 mb-4"
            src="/012+.jpg"
            alt="Main Background"
            width={1200}
            height={800}
            priority
          />
        </div>
        <div className="text-base pt-4 font-normal text-[rgb(63,63,63)]">
          <Link href="/consultation">
            <span className="text-gray-500 transition-colors duration-300 hover:text-customOrange">
              Безкоштовна консультація
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop Text Block */}
      <div>
        <div
          className="animate-moveFade xl:block md:block sm:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 px-[60px] py-[25px] text-center text-[#303030] leading-normal w-[max(300px,50%)] max-w-[500px] box-border z-10"
          onAnimationEnd={handleAnimationEnd}
        >
          <div
            className="opacity-0 animate-reveal" // Початкова прозорість 0
            style={{
              animationDelay: "1s",
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 400,
              lineHeight: "1.5",
              fontFamily: "'Montserrat'",
            }}
          >
            <span className="tracking-[4px]">IНТЕР&apos;ЄР</span>
            <br />
            ЩО ВІДОБРАЖАЄ
            <br />
            ВАШ СВІТ
          </div>
          <div className="text-base mt-[43px] mb-[10px] font-normal text-[rgb(63,63,63)]">
            <Link href="/consultation">
              <span className="text-gray-500 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                Безкоштовна консультація
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Background Image */}
      <div className="relative w-full min-h-[852px]">
        {" "}
        {/* Змінено h-[852px] на min-h-[852px] */}
        <div
          className="hidden sm:block absolute top-0 right-0 w-1/2 h-full overflow-hidden -z-10"
          style={{ opacity }}
        >
          <Image
            className="w-full h-full object-cover"
            src="/012+.jpg"
            alt="Half Screen"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  );
}
