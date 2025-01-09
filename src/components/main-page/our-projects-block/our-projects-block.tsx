import React from "react";
import Image from "next/image";

export default function OurProjects() {
  return (
    <div className="min-h-[600px] pt-[90px] pb-[50px] lg:pt-[105px] lg:pb-[105px]">
      {/* Texts */}
      <h1
        className="text-[24px] lg:text-[30px] font-medium text-gray-800 mb-4 lg:mb-2 mt-0 text-center w-full"
        style={{
          fontWeight: "400",
        }}
      >
        НАШІ ПРОЄКТИ
      </h1>

      {/* First Project */}
      <div className="flex justify-center items-center relative w-full mb-3 md:mb-6 px-6 lg:px-0">
        <div className="relative w-full lg:w-auto">
          <Image
            src="/009+.jpg"
            alt="Background"
            width={1900}
            height={1271}
            className="w-full h-auto lg:w-[950px] lg:h-[600px] object-cover"
            quality={100}
          />
          {/* Text block */}
          <div className="absolute top-2 left-2 lg:top-4 lg:left-4 p-2 lg:p-4 bg-white bg-opacity-50 text-black text-center text-[14px] lg:text-[19px] underline">
            <p className="ml-[20px] lg:ml-[70px] mr-2 lg:mr-10 mb-1 lg:mb-2">
              ПЕНТХАУС У
              <br />
              М.КЕЛЬН,
              <br />
              НІМЕЧЧИНА
            </p>
          </div>
        </div>
      </div>

      {/* Second Project */}
      <div className="flex justify-center items-center relative w-full mb-3 md:mb-6 px-6 lg:px-0">
        <div className="relative w-full lg:w-auto">
          <Image
            src="/019+.jpg"
            alt="Background"
            width={1900}
            height={1271}
            className="w-full h-auto lg:w-[950px] lg:h-[600px] object-cover"
            quality={100}
          />
          {/* Text block */}
          <div className="absolute top-2 left-2 lg:top-4 lg:left-4 p-2 lg:p-4 bg-white bg-opacity-50 text-black text-center text-[14px] lg:text-[19px] underline">
            <p className="ml-[20px] lg:ml-[70px] mr-2 lg:mr-10 mb-1 lg:mb-2">
              ПЕНТХАУС В
              <br />
              ЦЕНТРІ ІВАНО
              <br />
              ФРАНКІВСЬКА
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-6 lg:mt-10">
        <button
          className="px-6 py-2 lg:px-8 lg:py-3 bg-white/0 text-gray-700 text-sm lg:text-md font-semibold border border-white hover:text-customOrange transition duration-300"
          style={{
            fontWeight: "400",
          }}
        >
          УСІ ПРОЄКТИ
        </button>
      </div>
    </div>
  );
}