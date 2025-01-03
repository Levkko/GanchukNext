import React from "react";
import Link from "next/link"; // Імпортуємо Link з next/link

export default function MainBlock() {
  return (
    <div className="flex h-[93vh] max-h-[900px] static mt-[62px] flex-wrap">
      {/* Блок для комп'ютерів */}
      <div className="xl:block md:hidden sm:hidden sm:flex absolute top-0 left-0 w-full h-full -z-10 pointer-events-none mt-20">
        <div className="absolute mt-[292px] ml-[35px] left-[75px] w-[100px]">
          <img
            className="w-full h-auto transition-all duration-300 ease-in-out"
            src="/Logo18.svg"
            alt="Logo"
          />
        </div>
        <div className="absolute left-[125px] top-[308px] w-[65px] animate-[spin_0.85s_linear]">
          <img
            className="w-full h-auto transition-all duration-300 ease-in-out"
            src="/Logo19.svg"
            alt="Logo"
          />
        </div>
        <div className="absolute left-[178px] top-[340px] w-[6px] animate-[moveFromHorizontal_0.9s_ease-in-out]">
          <img
            className="w-full h-auto transition-all duration-300 ease-in-out"
            src="/Logo20.svg"
            alt="Logo"
          />
        </div>
        <div className="absolute left-[132px] top-[392px] w-[200px] scale-[1.70]">
          <a href="#">
            <img src="/Logo17.svg" alt="Logo" />
          </a>
        </div>
      </div>

      {/* Основний текстовий блок для мобільних пристроїв */}
      <div className="flex sm:hidden absolute top-0 left-0 w-full h-full flex-col justify-center text-center font-montserrat text-[#303030]">
        <div className="flex flex-col items-center">
          <span className="text-[clamp(24px,4vw,40px)] font-normal tracking-[4px]">
            IНТЕР'ЄР
          </span>
          <br />
          ЩО ВІДОБРАЖАЄ
          <br />
          ВАШ СВІТ
        </div>
        <div className="w-full">
          <img
            className="w-full max-h-[60vh] object-cover mt-4 mb-4"
            src="/012.jpg"
            alt="Main Background"
          />
        </div>
        <div className="text-base font-normal text-[rgb(63,63,63)]">
          <Link href="/consultation">
            <span className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
              Безкоштовна консультація
            </span>
          </Link>
        </div>
      </div>

      {/* Основний текстовий блок для комп'ютерів */}
      <div className="xl:block md:block sm:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 px-[60px] py-[25px] text-center font-montserrat text-[clamp(24px,4vw,40px)] font-normal text-[#303030] leading-normal w-[max(300px,50%)] max-w-[500px] box-border">
        <span className="tracking-[4px]">IНТЕР'ЄР</span>
        <br />
        ЩО ВІДОБРАЖАЄ
        <br />
        ВАШ СВІТ
        <div className="text-base mt-[43px] mb-[10px] font-normal text-[rgb(63,63,63)]">
          <Link href="/consultation">
            <span className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
              Безкоштовна консультація
            </span>
          </Link>
        </div>
      </div>



      {/* Фонова картинка для комп'ютерів */}
      <div className="hidden sm:block absolute top-13 right-0 w-1/2 h-full -z-10 pointer-events-none">
        <img
          className="w-full h-full object-cover"
          src="/012.jpg"
          alt="Half Screen"
        />
      </div>
    </div>
  );
}
