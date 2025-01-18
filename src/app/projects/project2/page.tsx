import "../../../components/Montserrat.css";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/main-page/navbar/navbar";
import Footer from "@/components/main-page/footer/footer";
import Link from "next/link";

import { Parallax } from "@/components/random/parallax/parallax";

export default function Project2() {
  return (
    <div>
      <Navbar />
      {/* Верхня фотографія */}
      <div className="mt-[63px] h-[919px] overflow-hidden relative">
        <Parallax speed={-110}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/001.png"
              alt="Top Image"
              className="min-w-full min-h-full object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </Parallax>

        {/* Блок з текстом на фотографії */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="bg-white bg-opacity-70 pl-16 pr-16 pt-16 pb-48 text-center max-w-2xl min-w-[1080px] mx-4">
              <h1
                className="text-3xl font-montserrat pb-16"
                style={{
                  fontWeight: '400',
                }}
              >
                БУДИНОЧОК ДЛЯ МОЛОДОЇ СІМ&apos;Ї В
                <br />
                ПЕРЕДМІСТІ ТЕРНОПОЛЯ
              </h1>
              <div className="w-[70px] h-[1px] bg-gray-800 my-[5px] mx-auto"></div>
              <p className="pl-8 pr-8 pt-8 text-[22.5px] leading-[1.28]">
                Початково він будувався як одноповерховий будинок з горищем. Нам
                вдалося збільшити корисну житлову площу за рахунок облаштування
                офісної зони під дахом і великої спальні на горищі. Справжньою
                прикрасою вітальні стали камін і сходи.
              </p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
