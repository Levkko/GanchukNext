import React from "react";

export default function Price() {
  return (
    <div className="h-[600px] flex flex-col items-center pt-10 pb-10 mt-8">
      {/* Заголовок */}
      <h1
        className="text-[24px] font-medium text-gray-800 mb-7 mt-8 text-center w-full pr-[600px]"
        style={{
          fontWeight: "400",
        }}
      >
        Ми пропонуємо:
      </h1>

      <div className="flex justify-center w-full gap-10">
        {/* Перша колонка */}
        <div className="flex flex-col gap-8 items-center">
          <div className="min-w-[200px] min-h-[370px] bg-white/55 pt-4 pb-4 pl-5 pr-5">
            <div className="text-center">
              <h2 className="font-montserrat text-[20px] font-normal text-[#303030] leading-[1.2]">
                ПАКЕТ
                <br />
                <span className="text-customOrange">ПЛАНУВАЛЬНИЙ</span>
              </h2>
              <span>
                $
                <span
                  className="text-[42px]"
                  style={{
                    fontWeight: "300",
                  }}
                >
                  {"\u2009"}5
                </span>
                <br />
                <span>м. кв.</span>
              </span>
            </div>

            <div className="font-montserrat text-center"></div>

            <ul className="list-disc pl-5 pt-4">
              <li>планувальне рішення</li>
              <li>
                креслення демонтажу і <br />
                монтажу стін
              </li>
              <li>креслення електрики</li>
            </ul>
          </div>
        </div>

        {/* Друга колонка */}
        <div className="flex flex-col gap-8 items-center">
          <div className="min-w-[200px] min-h-[370px] bg-white/55 pt-4 pb-4 pl-5 pr-5">
            <div className="text-center">
              <h2 className="font-montserrat text-[20px] font-normal text-[#303030] leading-[1.2]">
                ПАКЕТ
                <br />
                <span className="text-customOrange">ЕКСПРЕС</span>
              </h2>
              <span>
                $
                <span
                  className="text-[42px]"
                  style={{
                    fontWeight: "300",
                  }}
                >
                  {"\u2009"}15
                </span>
                <br />
                <span>м. кв.</span>
              </span>
            </div>

            <div className="font-montserrat text-center"></div>

            <ul className="list-disc pl-5 pt-4">
              <li>планувальне рішення</li>
              <li>
                повний пакет робочих <br />
                креслень
              </li>
            </ul>
          </div>
        </div>

        {/* Третя колонка */}
        <div className="flex flex-col gap-8 items-center">
          <div className="min-w-[200px] min-h-[370px] bg-white/55 pt-4 pb-4 pl-5 pr-5">
            <div className="text-center">
              <h2 className="font-montserrat text-[20px] font-normal text-[#303030] leading-[1.2]">
                ПАКЕТ
                <br />
                <span className="text-customOrange">АВТОРСЬКИЙ</span>
              </h2>
              <span>
                $
                <span
                  className="text-[42px]"
                  style={{
                    fontWeight: "300",
                  }}
                >
                  {"\u2009"}25
                </span>
                <br />
                <span>м. кв.</span>
              </span>
            </div>

            <div className="font-montserrat text-center"></div>

            <ul className="list-disc pl-5 pt-4">
              <li>планувальне рішення</li>
              <li>
              повний пакет робочих<br />
              креслень
              </li>
              <li>
              фотореалістична 3Д<br />
              візуалізація
              </li>
              <li>
              повний авторський<br />
              супровід проєкту
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
