import "../../../components/Montserrat.css";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/main-page/navbar/navbar";
import Footer from "@/components/main-page/footer/footer";
import Link from "next/link";

import { Parallax } from "@/components/random/parallax/parallax";
import { getProjectImages } from "@/components/utils/getProjectImages";

export default function Project2() {
  const images = getProjectImages("/projects/project2");

  return (
    <div>
      <Navbar />
      {/* Прозорий блок зверху */}
      <div className="md:h-[63px] h-[78px]"></div>

      <div>
        {/* Верхня фотографія для десктопу */}
        <div className="hidden lg:block h-[919px] overflow-hidden relative lg:h-[819px]">
          <Parallax speed={-110}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/projects/project2/top-image.jpg"
                alt="Top Image"
                className="min-w-full min-h-full object-cover translate-y-[150px] lg:translate-y-[150px]"
                width={1920}
                height={1080}
                priority
              />
            </div>
          </Parallax>
          {/* Блок з текстом на фотографії */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="bg-white bg-opacity-70 pl-16 pr-16 pt-16 pb-36 text-center max-w-2xl min-w-[1080px] mx-4 lg:pl-16 lg:pr-16 lg:pt-16 lg:pb-36 lg:max-w-2xl lg:min-w-[1080px]">
              <h1
                className="text-2xl font-montserrat pb-16 lg:text-2xl lg:pb-16"
                style={{
                  fontWeight: "400",
                }}
              >
                ПЕНТХАУС В ЦЕНТРІ ІВАНО ФРАНКІВСЬКА
              </h1>
              <div className="w-[70px] h-[1px] bg-gray-800 my-[5px] mx-auto lg:w-[70px] lg:h-[1px] lg:my-[5px] lg:mx-auto"></div>
              <p className="pl-8 pr-8 pt-8 text-[20px] leading-[1.28] lg:pl-8 lg:pr-8 lg:pt-8 lg:text-[20px] lg:leading-[1.28]">
                Дворівнева квартира з терасою в центрі Івано-Франківська
                призначена для великої сім'ї (батьки та 4 старших дітей).
                Замовники придбали дві квартири, щоб перепланувати їх у
                загальний відпочинковий простір для всієї сім'ї, з окремими
                кімнатами для кожного з дітей. Також було побажання облаштувати
                сауну з зоною релаксу. Окрім цього, частину простору відділили
                під смарт-квартиру для оренди. Велика вдячність господарям через
                те що довірились нам повністю!
              </p>
            </div>
          </div>
        </div>

        {/* Верхня фотографія для телефону */}
        <div className="lg:hidden h-[650px] overflow-hidden relative">
          <Parallax speed={-110}>
            <div className="absolute">
              <Image
                src="/projects/project2/top-image.jpg"
                alt="Top Image"
                className="object-cover min-w-[800px] min-h-[800px] translate-y-[-304px]"
                width={1920}
                height={1080}
                priority
              />
            </div>
          </Parallax>
          {/* Блок з текстом на фотографії для телефону */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="bg-white bg-opacity-80 pl-8 pr-8 pt-8 pb-16 text-center md:max-w-xl sm:max-w-md max-w-md mx-4">
              <h1
                className="text-2xl font-montserrat pb-8"
                style={{
                  fontWeight: "400",
                }}
              >
                ПЕНТХАУС В ЦЕНТРІ ІВАНО ФРАНКІВСЬКА
              </h1>
              <div className="w-[50px] h-[1px] bg-gray-800 mx-auto"></div>
              <p className="pl-0 pr-0 pt-4 text-[18px] leading-[1.28]">
                Дворівнева квартира в центрі Івано-Франківська для сім'ї з 6
                осіб. Замовники об'єднали дві квартири, створивши спільний
                простір, індивідуальні кімнати для дітей, сауну з релакс-зоною
                та смарт-квартиру для оренди. Дякуємо господарям за довіру!
              </p>
            </div>
          </div>
        </div>

        {/* Фотографії в колоні */}
        <div className="container mx-auto py-8 mt-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center mb-3 px-4 lg:px-0"
            >
              <div className="w-full max-w-[800px] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover pointer-events-none"
                  width={1200}
                  height={800}
                  style={{ userSelect: "none", pointerEvents: "none" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex items-center justify-center mt-0 mb-16 lg:mt-0">
          <Link
            href="/projects-page"
            className="px-6 py-2 lg:px-8 lg:py-3 bg-white/0 text-gray-700 text-sm lg:text-md font-semibold border border-white hover:text-customOrange transition duration-300"
            style={{
              fontWeight: "400",
            }}
          >
            УСІ ПРОЄКТИ
          </Link>
        </div>

        {/* Texts */}
        <h1
          className="text-[30px] font-medium text-white mb-0 mt-0 text-center w-full leading-[1.2]"
          style={{
            fontWeight: "400",
          }}
        >
          Готові розпочати?
        </h1>
        <h1
          className="text-[30px] font-medium text-customOrange mb-6 mt-0 text-center w-full leading-[1.2]"
          style={{
            fontWeight: "400",
          }}
        >
          Запишіться на консультацію
        </h1>
        <div className="flex items-center justify-center mt-4">
          <Link
            href="/contacts-page"
            className="mb-24 px-8 py-3 bg-white/55 text-gray-700 text-md font-semibold border border-white shadow-[0px_1.3px_2px_2px_rgba(0,0,0,0.15)] hover:text-customOrange transition duration-300"
            style={{
              fontWeight: "400",
            }}
          >
            КОНТАКТИ
          </Link>
        </div>
      </div>
      <div className="mb-10">
        <Footer />
      </div>
    </div>
  );
}
