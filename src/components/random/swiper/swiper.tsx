// components/SwiperClient.tsx
"use client";

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation } from "swiper/modules"; // Підключаємо модуль Navigation
import "swiper/swiper-bundle.css"; // Імпорт базових стилів Swiper
import { ReactNode } from "react";

interface SwiperClientProps {
  slides: ReactNode[];
  swiperProps?: SwiperProps;
}

export const SwiperClient = ({ slides, swiperProps }: SwiperClientProps) => {
  return (
    <Swiper
      modules={[Navigation]} // Підключаємо модуль Navigation
      navigation={{
        nextEl: ".swiper-button-next", // Клас для кнопки "вперед"
        prevEl: ".swiper-button-prev", // Клас для кнопки "назад"
      }}
      {...swiperProps} // Передаємо інші пропси
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}

      {/* Кнопки навігації */}
      <div className="swiper-button-next !text-neutral-800 !w-10 !h-10 !flex !items-center !justify-center hover:!text-black transition-all"></div>
      <div className="swiper-button-prev !text-neutral-900 !w-10 !h-10 !flex !items-center !justify-center hover:!text-black transition-all"></div>
    </Swiper>
  );
};