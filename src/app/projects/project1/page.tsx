import "../../../components/Montserrat.css";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/main-page/navbar/navbar";
import Footer from "@/components/main-page/footer/footer";
import Link from "next/link";

import { Parallax } from "@/components/random/parallax/parallax";
import { getProjectImages } from "@/components/utils/getProjectImages";

export default function Project1() {
  const images = getProjectImages("/projects/project1");

  return (
    <div>
      <Navbar />
      {/* Прозорий блок зверху */}
      <div className="md:h-[63px] h-[78px]"></div>

      <div>
        {/* Верхня фотографія для десктопу */}
        <div className="hidden lg:block h-[919px] overflow-hidden relative lg:h-[919px]">
          <Parallax speed={-110}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/projects/project1/top-image.jpg"
                alt="Top Image"
                className="min-w-full min-h-full object-cover translate-y-[150px] lg:translate-y-[150px]"
                width={1920}
                height={1080}
                priority // Додано для пріоритетного завантаження
              />
            </div>
          </Parallax>
          {/* Блок з текстом на фотографії */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="bg-white bg-opacity-70 pl-16 pr-16 pt-16 pb-36 text-center max-w-2xl min-w-[1080px] mx-4 lg:pl-16 lg:pr-16 lg:pt-16 lg:pb-36 lg:max-w-2xl lg:min-w-[1080px]">
              <h1
                className="text-3xl font-montserrat pb-16 lg:text-3xl lg:pb-16"
                style={{
                  fontWeight: "400",
                }}
              >
                БУДИНОЧОК ДЛЯ МОЛОДОЇ СІМ&apos;Ї В
                <br />
                ПЕРЕДМІСТІ ТЕРНОПОЛЯ
              </h1>
              <div className="w-[70px] h-[1px] bg-gray-800 my-[5px] mx-auto lg:w-[70px] lg:h-[1px] lg:my-[5px] lg:mx-auto"></div>
              <p className="pl-8 pr-8 pt-8 text-[22.5px] leading-[1.28] lg:pl-8 lg:pr-8 lg:pt-8 lg:text-[22.5px] lg:leading-[1.28]">
                Початково він будувався як одноповерховий будинок з горищем. Нам
                вдалося збільшити корисну житлову площу за рахунок облаштування
                офісної зони під дахом і великої спальні на горищі. Справжньою
                прикрасою вітальні стали камін і сходи.
              </p>
            </div>
          </div>
        </div>

        {/* Верхня фотографія для телефону */}
        <div className="lg:hidden h-[650px] overflow-hidden relative">
          <div className="absolute inset-0">
            <Image
              src="/projects/project1/top-image.jpg"
              alt="Top Image Mobile"
              className="w-full h-full object-cover object-top"
              width={1920}
              height={1080}
            />
          </div>
          {/* Блок з текстом на фотографії для телефону */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="bg-white bg-opacity-80 pl-8 pr-8 pt-8 pb-16 text-center max-w-md mx-4">
              <h1
                className="text-2xl font-montserrat pb-8"
                style={{
                  fontWeight: "400",
                }}
              >
                БУДИНОЧОК ДЛЯ МОЛОДОЇ СІМ&apos;Ї В
                <br />
                ПЕРЕДМІСТІ ТЕРНОПОЛЯ
              </h1>
              <div className="w-[50px] h-[1px] bg-gray-800 my-[5px] mx-auto"></div>
              <p className="pl-4 pr-4 pt-4 text-[18px] leading-[1.28]">
                Початково він будувався як одноповерховий будинок з горищем. Нам
                вдалося збільшити корисну житлову площу за рахунок облаштування
                офісної зони під дахом і великої спальні на горищі. Справжньою
                прикрасою вітальні стали камін і сходи.
              </p>
            </div>
          </div>
        </div>

        {/* Фотографії в колоні */}
        <div className="container mx-auto py-8 mt-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center mb-8 px-4 lg:px-0"
            >
              <div className="w-full max-w-[1200px] overflow-hidden">
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