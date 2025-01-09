'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function ScrollRestorationContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem('scrollPosition', window.scrollY.toString());
      console.log('Позиція прокрутки збережена:', window.scrollY);
    };

    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition));
        console.log('Позиція прокрутки відновлена:', scrollPosition);
        localStorage.removeItem('scrollPosition');
      }, 100); // Затримка 100 мс
    }

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [pathname, searchParams]);

  return null; // Компонент нічого не рендерить
}

export default function ScrollRestoration() {
  return (
    <Suspense fallback={null}>
      <ScrollRestorationContent />
    </Suspense>
  );
}