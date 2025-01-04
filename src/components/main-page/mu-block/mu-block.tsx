import React from "react";
import Image from "next/image";

export default function Mu() {
  return (
    <div className="relative w-full h-[700px] flex items-center justify-center mb-[150px]">
      {/* Background Image with Responsive Padding */}
      <div className="absolute inset-0 flex items-center justify-center px-[10%] md:px-[5%]">
        <div className="w-full h-full relative">
          <Image
            src="/mu.jpg"
            alt="Background"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            priority
          />
        </div>
      </div>
      {/* Top Left Block */}
      <div
        className="absolute pt-[0.7%] pl-[33rem] flex-col pr-[1%] top-0 left-0 w-5/12 h-1/4 bg-white bg-opacity-50 flex"
        style={{
          paddingLeft: `calc(33rem * ((100vw - 990px) / (1920px - 990px)))`,
          border: "2px solid red", // Test border
        }}
      >
        <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
          Більше <span className="text-white">20 років</span> досвіду
        </h2>
        <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
        <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3]">
          Розробка дизайн проектів в приміщеннях різноманітного призначення
        </p>
      </div>
      {/* Top Right Block */}
      <div className="absolute pt-[0.7%] flex-col pl-[1%] pr-[24%] top-0 right-0 w-5/12 h-1/4 bg-white bg-opacity-50 flex">
        <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
          Більше <span className="text-white">400 проектів</span> виконаних
        </h2>
        <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
        <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3]">
          Проекти в Україні і закордоном
        </p>
      </div>
      {/* Bottom Left Block */}
      <div className="absolute pt-[0.7%] flex-col pr-[0.3%] pl-[26%] bottom-0 left-0 w-5/12 h-1/4 bg-white bg-opacity-50 flex">
        <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
          Авторський <span className="text-white">супровід</span> об'єкту
        </h2>
        <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
        <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3]">
          Підбір оздоблювальних матеріалів Нагляд усіх етапів ремонту
        </p>
      </div>
      {/* Bottom Right Block */}
      <div className="absolute pt-[0.7%] flex-col pl-[1%] pr-[26%] bottom-0 right-0 w-5/12 h-1/4 bg-white bg-opacity-50 flex">
        <h2 className="pt-0 font-montserrat mb-2 text-[26px] font-normal text-[#303030] leading-[1.2]">
          Додатковий <span className="text-white">бонус</span> до дизайн проєкту
        </h2>
        <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px]"></div>
        <p className="pt-1 font-roboto text-base text-[#555] leading-[1.3]">
          Консультація щодо вибору квартири при купівлі нового житла
        </p>
      </div>
    </div>
  );
}
