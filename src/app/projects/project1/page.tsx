import "../../../components/Montserrat.css";
import React from "react";
import Image from "next/image"; // Import the Image component
import Navbar from "@/components/main-page/navbar/navbar";
import Footer from "@/components/main-page/footer/footer";
import Link from "next/link";

export default function Project1() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        {/* Верхня фотографія */}
        <div className="relative w-screen h-[882px] overflow-hidden pt-[63px]">
          <Image
            src="/001.png"
            alt="Top Image"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
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

        {/* Нижні 5 фотографій */}
        <div className="container mx-auto py-8 mt-8">
          <div className="flex flex-col items-center space-y-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="w-[950px] h-[700px] flex justify-center items-center border border-gray-300 shadow-[0px_1.3px_2px_2px_rgba(0,0,0,0.15)]"
              >
                <div className="w-[700px] h-[700px]">
                  <Image
                    src={`/00${index}.png`}
                    alt={`Image ${index}`}
                    className="w-full h-full object-cover"
                    width={1900}
                    height={1900}
                  />
                </div>
              </div>
            ))}
          </div>
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
