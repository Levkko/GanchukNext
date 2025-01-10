import React from "react";
import Link from "next/link";

export default function Question() {
  return (
    <div className="min-h-[180px] mt-10">
      {/* Texts */}
      <h1
        className="text-[30px] font-medium text-gray-800 mb-2 mt-0 text-center w-full"
        style={{
          fontWeight: "400",
        }}
      >
        Маєте запитання?
      </h1>
      <h1
        className="text-[30px] font-medium text-customOrange mb-0 mt-0 text-center w-full"
        style={{
          fontWeight: "400",
        }}
      >
        Зв&apos;яжіться з нами
      </h1>

      <div className="flex items-center justify-center mt-4">
      <Link
        href="/contacts-page" // Вкажіть шлях, на який має вести посилання
        className="px-8 py-3 bg-white/55 text-gray-700 text-md font-semibold border border-white shadow-[0px_1.3px_2px_2px_rgba(0,0,0,0.15)] hover:text-customOrange transition duration-300"
        style={{
          fontWeight: "400",
        }}
      >
        КОНТАКТИ
      </Link>
    </div>
    </div>
  );
}
