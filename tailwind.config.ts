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
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
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
      },
      animation: {
        moveFromHorizontal: 'moveFromHorizontal 0.75s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
