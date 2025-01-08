import React from "react";
import Image from "next/image";

export default function OurProjects() {
  return (
    <div className="min-h-[600px] pt-[105px] pb-[105px]">
      {/* Texts */}
      <h1
        className="text-[30px] font-medium text-gray-800 mb-2 mt-0 text-center w-full"
        style={{
          fontWeight: "400",
        }}
      >
        НАШІ ПРОЄКТИ
      </h1>
      <div className="flex justify-center items-center md:relative relative w-full md:w-auto mb-8">
        <div className="relative">
          <Image
            src="/009.jpg"
            alt="Background"
            width={1900}
            height={1271}
            className="hidden md:block w-[950px] h-[600px] object-cover"
            quality={100}
          />
          {/* Text block */}
          <div className="absolute top-4 left-4 p-4 bg-white bg-opacity-50 text-black text-center text-[19px] underline">
            <p className="ml-[70px] mr-10 mb-2">
              ПЕНТХАУС У
              <br />
              М.КЕЛЬН,
              <br />
              НІМЕЧЧИНА
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center md:relative relative w-full md:w-auto">
        <div className="relative">
          <Image
            src="/019.jpg"
            alt="Background"
            width={1900}
            height={1271}
            className="hidden md:block w-[950px] h-[600px] object-cover"
            quality={100}
          />
          {/* Text block */}
          <div className="absolute top-4 left-4 p-4 bg-white bg-opacity-50 text-black text-center text-[19px] underline">
            <p className="ml-[70px] mr-10 mb-2">
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
      <div className="flex items-center justify-center mt-10">
        <button
          className="px-8 py-3 bg-white/0 text-gray-700 text-md font-semibold border border-white hover:text-customOrange transition duration-300"
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
