import "../../../components/Montserrat.css";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/main-page/navbar/navbar";
import Footer from "@/components/main-page/footer/footer";
import Link from "next/link";

import { Parallax } from "@/components/random/parallax/parallax";
import { SwiperClient } from "@/components/random/swiper/swiper";

export default function Project1() {
  const images = [
    { src: "/001.png", alt: "Image 1" },
    { src: "/002.png", alt: "Image 2" },
    { src: "/003.png", alt: "Image 3" },
    { src: "/004.png", alt: "Image 4" },
    { src: "/005.png", alt: "Image 5" },
  ];

  return (
    <div>
      <Navbar />
      <div>
        {/* Верхня фотографія */}
        <div className="relative w-screen h-[820px] h-[calc(100vh-62px)] top-[62px] overflow-hidden ">
          <Parallax speed={-110}>
            <Image
              src="/001.png"
              alt="Top Image"
              className="w-full h-full object-cover translate-y-[-120px]"
              width={1920}
              height={1080}
            />
          </Parallax>
          {/* Блок з текстом на фотографії */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="bg-white bg-opacity-70 pl-16 pr-16 pt-16 pb-36 text-center max-w-2xl min-w-[980px] mx-4">
              <h1
                className="text-2xl font-montserrat pb-16"
                style={{
                  fontWeight: "400",
                }}
              >
                БУДИНОЧОК ДЛЯ МОЛОДОЇ СІМ&apos;Ї В
                <br />
                ПЕРЕДМІСТІ ТЕРНОПОЛЯ
              </h1>
              <div className="w-[70px] h-[1px] bg-gray-800 my-[5px] mx-auto"></div>
              <p className="pl-10 pr-10 pt-8 text-[19.5px] leading-[1.28]">
                Початково він будувався як одноповерховий будинок з горищем. Нам
                вдалося збільшити корисну житлову площу за рахунок облаштування
                офісної зони під дахом і великої спальні на горищі. Справжньою
                прикрасою вітальні стали камін і сходи.
              </p>
            </div>
          </div>
        </div>

        {/* Swiper замість "Нижні 5 фотографій" */}
        <div className="container mx-auto py-8 mt-24">
          <SwiperClient
            slides={images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="w-[750px] h-[750px] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover pointer-events-none"
                    width={1900}
                    height={1900}
                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                  />
                </div>
              </div>
            ))}
            swiperProps={{
              spaceBetween: 50,
              slidesPerView: 1,
            }}
          />
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
