"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define a type for the image objects
type ImageType = {
  src: string;
  alt: string;
  link: string;
  hoverText: string;
  category: "житлові" | "громадські";
};

// Масив з 30 зображень
const images: ImageType[] = [
  { src: "/001.png", alt: "Background 1", link: "/project1", hoverText: "БУДИНОЧОК ДЛЯ МОЛОДОЇ СІМ'Ї В ПЕРЕДМІСТІ ТЕРНОПОЛЯ", category: "житлові" },
  { src: "/002.png", alt: "Background 2", link: "/project2", hoverText: "ПЕНТХАУС В ЦЕНТРІ ІВАНО ФРАНКІВСЬКА", category: "житлові" },
  { src: "/003.png", alt: "Background 3", link: "/project3", hoverText: "ПЕНТХАУС У М.КЕЛЬН, НІМЕЧЧИНА", category: "житлові" },
  { src: "/004.png", alt: "Background 4", link: "/project4", hoverText: "КАФЕ ПРИ ЦЕРКВІ 'ДЖЕРЕЛО ЖИТТЯ', М.ЛЬВІВ", category: "громадські" },
  { src: "/005.png", alt: "Background 5", link: "/project5", hoverText: "КВАРТИРА З ВИГЛЯДОМ НА ДОМІНІКАНСЬКИЙ СОБОР У М.ЛЬВОВІ", category: "житлові" },
  { src: "/006.png", alt: "Background 6", link: "/project6", hoverText: "КВАРТИРА З ВИГЛЯДОМ НА ВИСОКИЙ ЗАМОК, М.ЛЬВІВ", category: "житлові" },
  { src: "/007.png", alt: "Background 7", link: "/project7", hoverText: "ОДНОКІМНАТНА КВАРТИРА З ФОРТЕПІАНО в М.КИЇВ", category: "житлові" },
  { src: "/008.png", alt: "Background 8", link: "/project8", hoverText: "ЗАМІСЬКИЙ БУДИНОК У С. МАЛЕХІВ", category: "житлові" },
  { src: "/009.png", alt: "Background 9", link: "/project9", hoverText: "КВАРТИРА ЗІ СПАЛЬНЕЮ-ПОДІУМОМ", category: "житлові" },
  { src: "/010.png", alt: "Background 10", link: "/project10", hoverText: "КВАРТИРА МОЛОДОЇ ДІВЧИНИ МУЗИКАНТКИ", category: "житлові" },
  { src: "/011.png", alt: "Background 11", link: "/project11", hoverText: "КВАРТИРА З ПРОЕКТОРОМ", category: "житлові" },
  { src: "/012.png", alt: "Background 12", link: "/project12", hoverText: "КВАРТИРА З ВИГЛЯДОМ НА СТАВОК", category: "житлові" },
  { src: "/013.png", alt: "Background 13", link: "/project13", hoverText: "Дерево з чорним. м.Львів, ЖК Авалон", category: "житлові" },
  { src: "/014.png", alt: "Background 14", link: "/project14", hoverText: "КВАРТИРА З РОЖЕВИМИ АКЦЕНТАМИ на вул. Тернопільській у Львові.", category: "житлові" },
  { src: "/015.png", alt: "Background 15", link: "/project15", hoverText: "ПАРСЕЛЬ ПАРК НА КУЛЬПАРКІВСЬКІЙ", category: "громадські" },
  { src: "/016.png", alt: "Background 16", link: "/project16", hoverText: "ОДНОКІМНАТНА КВАРТИРА У М.ЛЬВОВІ", category: "житлові" },
  { src: "/017.png", alt: "Background 17", link: "/project17", hoverText: "САЛОН 'ГЗИМС'", category: "громадські" },
  { src: "/018.png", alt: "Background 18", link: "/project18", hoverText: "БУДИНОК З БАРАБАМИ", category: "житлові" },
  { src: "/019.png", alt: "Background 19", link: "/project19", hoverText: "ДВОРІВНЕВА КВАРТИРА м.ЛЬВІВ", category: "житлові" },
  { src: "/020.png", alt: "Background 20", link: "/project20", hoverText: "СМАРАГДОВИЙ ДИВАН", category: "житлові" },
  { src: "/021.png", alt: "Background 21", link: "/project21", hoverText: "ENGLISH HOUSE", category: "житлові" },
  { src: "/022.png", alt: "Background 22", link: "/project22", hoverText: "ТЕМНИЙ АКЦЕНТ", category: "житлові" },
  { src: "/023.png", alt: "Background 23", link: "/project23", hoverText: "ОФІС 'ОРТОТОП'", category: "громадські" },
  { src: "/024.png", alt: "Background 24", link: "/project24", hoverText: "РЕСТОРАН 'САПСАН' ВІП ЗАЛА", category: "громадські" },
  { src: "/025.png", alt: "Background 25", link: "/project25", hoverText: "РЕСТОРАН 'ПАРМА' М. ТЕРНОПІЛЬ", category: "громадські" },
  { src: "/026.png", alt: "Background 26", link: "/project26", hoverText: "КВАРТИРА З ВЕЛОСИПЕДОМ", category: "житлові" },
  { src: "/027.png", alt: "Background 27", link: "/project27", hoverText: "ВАННА З САУНОЮ", category: "житлові" },
  { src: "/028.png", alt: "Background 28", link: "/project28", hoverText: "КАВА З МОЛОКОМ", category: "житлові" },
  { src: "/029.png", alt: "Background 29", link: "/project29", hoverText: "КВАРТИРА ДЛЯ ВЕЛИКОЇ СІМ'Ї", category: "житлові" },
  { src: "/030.png", alt: "Background 30", link: "/project30", hoverText: "AESTHETIC HOUSE", category: "житлові" },
];

export default function LazyProjects() {
  const [category, setCategory] = useState<"усі" | "житлові" | "громадські">("усі");

  // Функція для фільтрації зображень за категорією
  const filteredImages = category === "усі" ? images : images.filter((image) => image.category === category);

  return (
    <div className="min-h-[600px] pt-[85px] pb-[30px]">
      {/* Кнопки для фільтрації на телефонах */}
      <div className="flex flex-col sm:hidden justify-center items-center mb-2 relative w-full">
        <button
          onClick={() => setCategory("усі")}
          className="text-[25px] font-medium text-gray-800 mb-2 mt-0 text-center py-2 hover:text-customOrange focus:outline-none focus:text-customOrange transition duration-300"
          style={{ fontWeight: "400" }}
        >
          УСІ
        </button>
        <button
          onClick={() => setCategory("житлові")}
          className="text-[25px] font-medium text-gray-800 mb-2 mt-0 text-center py-2 hover:text-customOrange focus:outline-none focus:text-customOrange transition duration-300"
          style={{ fontWeight: "400" }}
        >
          ЖИТЛОВІ
        </button>
        <button
          onClick={() => setCategory("громадські")}
          className="text-[25px] font-medium text-gray-800 mb-2 mt-0 text-center py-2 hover:text-customOrange focus:outline-none focus:text-customOrange transition duration-300"
          style={{ fontWeight: "400" }}
        >
          ГРОМАДСЬКІ
        </button>
      </div>

      {/* Кнопки для фільтрації на комп'ютерах */}
      <div className="hidden sm:flex justify-center items-center mb-2 relative w-full">
        <button
          onClick={() => setCategory("усі")}
          className="text-[25px] font-medium text-gray-800 mb-2 mt-0 text-center pr-10 py-2 hover:text-customOrange focus:outline-none focus:text-customOrange transition duration-300 absolute right-[50%] transform translate-x-[-120%]"
          style={{ fontWeight: "400" }}
        >
          УСІ
        </button>
        <button
          onClick={() => setCategory("житлові")}
          className="text-[25px] font-medium text-gray-800 mb-2 mt-0 text-center px-4 py-2 hover:text-customOrange focus:outline-none focus:text-customOrange transition duration-300"
          style={{ fontWeight: "400" }}
        >
          ЖИТЛОВІ
        </button>
        <button
          onClick={() => setCategory("громадські")}
          className="text-[25px] font-medium text-gray-800 mb-2 mt-0 text-center pl-16 py-2 hover:text-customOrange focus:outline-none focus:text-customOrange transition duration-300 absolute left-[50%] transform translate-x-[20%]"
          style={{ fontWeight: "400" }}
        >
          ГРОМАДСЬКІ
        </button>
      </div>

      {/* Lazy Loading Projects */}
      <div className="flex flex-col justify-center items-center">
        {/* Для екранів менше 500px: 1 колона */}
        <div className="flex flex-col gap-3 w-full px-4 sm:hidden">
          {filteredImages.map((image, index) => (
            <div key={index} className="w-full h-[300px] relative">
              <a href={image.link} className="group block w-full h-full">
                <div className="w-full h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                  {/* Ефект при наведенні */}
                  <div className="absolute inset-0 bg-neutral-400 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center">
                    <span className="p-4 text-white text-center text-[15px] font-bold opacity-0 group-hover:opacity-100">
                      {image.hoverText}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Для екранів 500px - 1000px: 2 колони */}
        <div className="hidden sm:flex sm:flex-col sm:gap-4 lg:hidden w-full px-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredImages.map((image, index) => (
              <div key={index} className="w-full h-[300px] relative">
                <a href={image.link} className="group block w-full h-full">
                  <div className="w-full h-full relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                    {/* Ефект при наведенні */}
                    <div className="absolute inset-0 bg-neutral-400 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center">
                      <span className="p-4 text-white text-center text-[15px] font-bold opacity-0 group-hover:opacity-100">
                        {image.hoverText}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Для екранів 1000px і більше: 3 колони */}
        <div className="hidden lg:flex lg:flex-col lg:gap-2">
          {chunkArray(filteredImages, 3).map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {row.map((image, imageIndex) => (
                <div key={imageIndex} className="w-[300px] h-[300px] relative">
                  <a href={image.link} className="group block w-full h-full">
                    <div className="w-full h-full relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                        quality={100}
                      />
                      {/* Ефект при наведенні */}
                      <div className="absolute inset-0 bg-neutral-400 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center">
                        <span className="p-4 text-white text-center text-[15px] font-bold opacity-0 group-hover:opacity-100">
                          {image.hoverText}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Функція для розбиття масиву на групи по 3 зображення (для ПК)
const chunkArray = (arr: ImageType[], size: number): ImageType[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};