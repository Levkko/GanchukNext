import React from "react";

export default function HowWeWork() {
  return (
    <div className="h-[700px] flex flex-col items-center py-10 mt-8">
      {/* Заголовок */}
      <h1
        className="text-[24px] font-medium text-gray-800 mb-7 mt-8 text-center w-full pr-[600px]"
        style={{
          fontWeight: "400",
        }}
      >
        Як ми працюємо:
      </h1>

      <div className="flex justify-center w-full gap-12">
        {/* Ліва колонка */}
        <div className="flex flex-col gap-8 items-center">
          <div className="min-w-[400px] h-39 bg-white/55 pt-3 pb-4 pl-7 pr-4">
            <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
              1 етап
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
            <p
              style={{
                fontWeight: "400",
                // fontFamily: "Montserrat",
                lineHeight: "1.2",
              }}
            >
              Знайомство
              <br />
              Презентація послуг
              <br />
              Показ прикладу готового проекту
            </p>
          </div>

          <div className="min-w-[400px] h-39 bg-white/55 pt-3 pb-4 pl-7 pr-4">
            <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
              3 етап
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
            <p
              style={{
                fontWeight: "400",
                // fontFamily: "Montserrat",
                lineHeight: "1.2",
              }}
            >
              Розробка кількох варіантів планувального
              <br />
              рішення
              <br />
              Вибір найкращого варіанту із
              <br />
              запропонованих нами
            </p>
          </div>

          <div className="min-w-[400px] h-39 bg-white/55 pt-3 pb-4 pl-7 pr-4">
            <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
              5 етап
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
            <p
              style={{
                fontWeight: "400",
                // fontFamily: "Montserrat",
                lineHeight: "1.2",
              }}
            >
              Розробка усіх необхідних креслень
              <br />
              для реалізації проєкту
              <br />
              Розробка специфікацій
            </p>
          </div>
        </div>

        {/* Права колонка */}
        <div className="flex flex-col gap-8 items-center mt-9">
          <div className="min-w-[400px] h-39 bg-white/55 pt-3 pb-4 pl-5 pr-2">
            <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
              2 етап
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3"></div>
            <p
              style={{
                fontWeight: "400",
                fontFamily: "Montserrat", // не працює шрифт
                lineHeight: "1.2",
              }}
            >
              Заміри об'єкту, фото та відеофіксація
              <br />
              Обговорення вимог та побажань замовника
              <br />
              Обговорення аналогів та кольорової гами
              <br />
              проєкту
            </p>
          </div>

          <div className="min-w-[400px] h-39 bg-white/55 pt-3 pb-4 pl-7 pr-4">
            <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
              4 етап
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
            <p
              style={{
                fontWeight: "400",
                // fontFamily: "Montserrat",
                lineHeight: "1.2",
              }}
            >
              Поетапна розробка та затвердження
              <br />
              всіх візуалізацій
            </p>
          </div>

          <div className="min-w-[400px] h-39 bg-white/55 pt-3 pb-4 pl-7 pr-4">
            <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
              6 етап
            </h2>
            <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
            <p
              style={{
                fontWeight: "400",
                // fontFamily: "Montserrat",
                lineHeight: "1.2",
              }}
            >
              Авторський супровід
              <br />
              під час реалізації проєкту
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
