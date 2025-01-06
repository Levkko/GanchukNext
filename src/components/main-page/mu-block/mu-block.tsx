import React from "react";
import Image from "next/image";

export default function Mu() {
  return (
    <div>
      {/* Full-width colored block top */}
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full bg-white bg-opacity-40 h-[174px] z-[-1]"></div>
      </div>

      {/* Photo */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <Image src="/mu.jpg" alt="Background" width={850} height={500} />

          {/* Top Left Block */}
          <div className="absolute top-0 left-0 bg-white bg-opacity-40 pt-5 pb-[11px] pl-5 pr-5 max-w-[300px] max-h-[200px] overflow-hidden">
            <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
              Більше <span className="text-white">20 років</span> досвіду
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
            <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3]">
              Розробка дизайн проектів в приміщеннях різноманітного призначення
            </p>
          </div>

          {/* Top Right Block */}
          <div className="absolute top-0 right-0 bg-white bg-opacity-40 p-5 max-w-[300px] max-h-[200px] overflow-hidden">
            <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
              Більше <span className="text-white">400 проектів</span> виконаних
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
            <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3] pb-[32px]">
              Проекти в Україні і закордоном
            </p>
          </div>

          {/* Bottom Left Block */}
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-40 p-5 max-w-[300px] max-h-[200px] overflow-hidden">
            <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
              Авторський <span className="text-white">супровід</span>{" "}
              об&apos;єкту
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
            <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3]">
              Підбір оздоблювальних матеріалів Нагляд усіх етапів ремонту
            </p>
          </div>

          {/* Bottom Right Block */}
          <div className="absolute bottom-0 right-0 bg-white bg-opacity-40 p-5 max-w-[300px] max-h-[200px] overflow-hidden">
            <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
              Додатковий <span className="text-white">бонус</span> до дизайн
              проєкту
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
            <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3]">
              Консультація щодо вибору квартири при купівлі нового житла
            </p>
          </div>
        </div>
      </div>

      {/* Full-width colored block bottom */}
      <div className="relative w-full">
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-40 h-[162px] z-[-1]"></div>
      </div>
    </div>
  );
}
