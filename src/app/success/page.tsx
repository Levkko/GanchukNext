import React from "react";

export default function SuccessPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Дякуємо!</h1>
        <p className="text-gray-700 text-center mb-8">
          Ваші дані успішно надіслані. Ми зв'яжемося з вами найближчим часом.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-customOrange text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Повернутись на головну сторінку
        </a>
      </div>
    );
  }