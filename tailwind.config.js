/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-90%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-90%)" },
        },
        marqueeInternal1: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeInternal2: {
          "0%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-20%)" },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(50%)' }
        },
      },
      colors: {
        "custom-black": "#0f090f",
        pinkish: "#f0b4e3",
        whitish: "#ABABAD",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 60s linear infinite",
        marqueeInternal1: "marqueeInternal1 60s linear infinite",
        marqueeInternal2: "marqueeInternal2 60s linear infinite",
        'scroll-up': 'scrollUp 25s linear infinite',
        'scroll-down': 'scrollDown 25s linear infinite'
      },
    },
  },
  plugins: [],
};
