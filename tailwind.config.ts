import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: '#fa9805',
      },
      spacing: {
        'dynamic-padding': 'calc(33rem * (100vw / 1920))',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        'custom': '780px',
      },
      keyframes: {
        moveFromHorizontal: {
          'from': {
            transform: 'translateX(700px)',
          },
          'to': {
            transform: 'translateX(0px)', // Змінити значення на потрібне вам
          },
        },
        reveal: {
          '0%': { opacity: '0', clipPath: 'inset(0 100% 0 0)' },
          '20%': { opacity: '1', clipPath: 'inset(0 80% 0 0)' },
          '40%': { clipPath: 'inset(0 60% 0 0)' },
          '60%': { clipPath: 'inset(0 40% 0 0)' },
          '80%': { clipPath: 'inset(0 20% 0 0)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
        },
        moveFade: {
          '0%': { marginLeft: '30px', opacity: '0' },
          '100%': { marginLeft: '0', opacity: '1' },
        },
      },
      animation: {
        moveFromHorizontal: 'moveFromHorizontal 0.75s ease-in-out',
        reveal: 'reveal 1.1s linear forwards',
        moveFade: 'moveFade 1s ease-in-out forwards',
      },
      animationDelay: {
        '1s': '1s',
        '2s': '2s', // якщо потрібно більше варіантів
      },
    },
  },
  plugins: [],
} satisfies Config;
