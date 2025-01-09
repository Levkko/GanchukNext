'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Збереження позиції прокрутки перед перезавантаженням сторінки
    const saveScrollPosition = () => {
      localStorage.setItem('scrollPosition', window.scrollY.toString());
      console.log('Позиція прокрутки збережена:', window.scrollY);
    };

    // Відновлення позиції прокрутки після завантаження сторінки
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition));
        console.log('Позиція прокрутки відновлена:', scrollPosition);
        localStorage.removeItem('scrollPosition');
      }, 100); // Затримка 100 мс
    }

    // Підписка на подію beforeunload
    window.addEventListener('beforeunload', saveScrollPosition);

    // Відписка при демонтажі компонента
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [pathname, searchParams]);

  return null; // Компонент нічого не рендерить
}