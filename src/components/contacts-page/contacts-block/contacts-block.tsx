import React from "react";
import Image from "next/image";

export default function Contacts() {
  return (
    <div className="flex flex-col items-center pt-24 lg:pt-16 px-4">
      <div className="max-w-5xl w-full p-4 lg:p-8 flex flex-col">
        {/* Форма з контактами зверху */}
        <div className="w-full flex flex-col items-center mb-4 lg:mb-6">
          <h1
            className="text-[24px] lg:text-[30px] font-medium text-gray-800 mb-4 lg:mb-6 mt-0 text-center w-full"
            style={{
              fontWeight: "400",
            }}
          >
            Залиште свої дані
            <br />і ми сконтактуємо з вами
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            Перша консультація безкоштовна
          </p>
          <form
            action="https://formspree.io/f/mjkkjykv"
            method="POST"
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
              <div className="mb-4 w-full lg:w-auto">
                <input
                  type="text"
                  name="name"
                  placeholder="Ім'я"
                  className="w-full lg:w-[200px] p-3 placeholder-white bg-transparent border-b-2 border-white focus:outline-none focus:border-customOrange"
                  required
                />
              </div>
              <div className="mb-4 w-full lg:w-auto">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефону"
                  className="w-full lg:w-[200px] p-3 placeholder-white bg-transparent border-b-2 border-white focus:outline-none focus:border-customOrange"
                  pattern="(\+38|38)?[0-9]{10}"
                  title="Будь ласка, введіть номер телефону у форматі +38XXXXXXXXXX, 38XXXXXXXXXX або 0XXXXXXXXX"
                  required
                />
              </div>
            </div>
            {/* Button */}
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-6 lg:px-8 py-2 lg:py-3 bg-white/0 text-gray-700 text-md font-semibold border border-white hover:text-customOrange transition duration-300"
                style={{
                  fontWeight: "400",
                }}
              >
                НАДСЛАТИ
              </button>
            </div>
          </form>
        </div>

        {/* Зображення знизу */}
        <div className="w-full flex justify-center items-center mb-4 lg:mb-6 mt-4 lg:mt-6">
          <div className="w-full max-w-[200px] lg:max-w-[270px]">
            <Image
              src="/backFull.jpg" // замініть на ваш шлях до зображення
              alt="Couple sitting back-to-back"
              width={1028}
              height={813}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}