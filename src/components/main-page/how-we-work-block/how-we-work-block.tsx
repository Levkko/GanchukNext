import React from "react";

export default function HowWeWork() {
  return (
    <div className="h-auto flex flex-col items-center py-10 mt-8">
      {/* Заголовок для мобільної версії */}
      <div className="font-montserrat text-[23px] font-medium text-[#303030] leading-[1.2] mt-5 mb-2 bg-white bg-opacity-40 w-screen py-1 mb-8">
        <h1
          className="text-[24px] font-medium text-gray-800 text-center"
          style={{
            fontWeight: "400",
          }}
        >
          Як ми працюємо:
        </h1>
      </div>

      {/* Заголовок для десктопної версії */}
      <h1
        className="hidden lg:block text-[24px] font-medium text-gray-800 mb-7 mt-8 text-center w-full pr-[600px]"
        style={{
          fontWeight: "400",
        }}
      >
        Як ми працюємо:
      </h1>

      {/* Блоки для комп'ютера */}
      <div className="hidden lg:flex justify-center w-full gap-12">
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
                fontFamily: "Montserrat",
                lineHeight: "1.2",
              }}
            >
              Заміри об&apos;єкту, фото та відеофіксація
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

      {/* Блоки для телефона */}
      <div className="flex lg:hidden flex-col gap-8 items-center w-full px-4">
        {/* 1 етап - текст зліва */}
        <div className="w-full h-39 pt-3 pb-4 pl-7 pr-4 text-left">
          <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
            1 етап
          </h2>
          <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
          <p
            style={{
              fontWeight: "400",
              lineHeight: "1.2",
            }}
          >
            Знайомство
            <br />
            Презентація послуг
            <br />
            Показ прикладу
            <br />
            готового проекту
          </p>
        </div>

        {/* 2 етап - текст справа */}
        <div className="w-full h-39 pl-7 pr-4 text-right">
          <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
            2 етап
          </h2>
          <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 ml-auto"></div>
          <p
            style={{
              fontWeight: "400",
              fontFamily: "Montserrat",
              lineHeight: "1.2",
            }}
          >
            Заміри об&apos;єкту, фото та 
            <br />
            відеофіксація
            <br />
            Обговорення вимог та 
            <br />
            побажань замовника
            <br />
            Обговорення аналогів та 
            <br />
            кольорової гами
            <br />
            проєкту
          </p>
        </div>

        {/* 3 етап - текст зліва */}
        <div className="w-full h-39 pl-7 pr-4 text-left">
          <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
            3 етап
          </h2>
          <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
          <p
            style={{
              fontWeight: "400",
              lineHeight: "1.2",
            }}
          >
            Розробка кількох варіантів 
            <br />
            планувального рішення
            <br />
            Вибір найкращого варіанту із
            <br />
            запропонованих нами
          </p>
        </div>

        {/* 4 етап - текст справа */}
        <div className="w-full h-39 pl-7 pr-4 text-right">
          <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
            4 етап
          </h2>
          <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat ml-auto"></div>
          <p
            style={{
              fontWeight: "400",
              lineHeight: "1.2",
            }}
          >
            Поетапна розробка та 
            <br />
            затвердження
            <br />
            всіх візуалізацій
          </p>
        </div>

        {/* 5 етап - текст зліва */}
        <div className="w-full h-39 pl-7 pr-4 text-left">
          <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
            5 етап
          </h2>
          <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat"></div>
          <p
            style={{
              fontWeight: "400",
              lineHeight: "1.2",
            }}
          >
            Розробка усіх 
            <br />
            необхідних креслень
            <br />
            для реалізації проєкту
            <br />
            Розробка специфікацій
          </p>
        </div>

        {/* 6 етап - текст справа */}
        <div className="w-full h-39 pl-7 pr-4 text-right">
          <h2 className="font-montserrat text-[30px] font-normal text-[#303030] leading-[1.2]">
            6 етап
          </h2>
          <div className="w-[70px] h-[2px] bg-[#f79e1b] my-[5px] mb-3 font-montserrat ml-auto"></div>
          <p
            style={{
              fontWeight: "400",
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
  );
}