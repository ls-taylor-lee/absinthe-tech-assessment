import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "18": "4.5rem",
      },
      colors: {
        el: {
          DEFAULT: "#F9F9F9",
          dark: "#080A0B",
          1: {
            DEFAULT: "#F1F1F1",
            dark: "#0C0E10",
          },
          2: {
            DEFAULT: "#E8E8E8",
            dark: "#111315",
          },
          3: {
            DEFAULT: "#DFDFDF",
            dark: "#16181A",
          },
        },
        primary: {
          DEFAULT: "#0C0F0E",
          dark: "#F7F7F8",
        },
        secondary: {
          DEFAULT: "#3B3B3B",
          dark: "#ABAFB4",
        },
        disabled: {
          DEFAULT: "#ABAFB4",
          dark: "#ABAFB4",
        },
        button: {
          DEFAULT: "#FFFFFF",
          dark: "#FFFFFF",
        },
        main: {
          DEFAULT: "#006258",
          dark: "#006258",
          hover: {
            DEFAULT: "#3E8F77",
            dark: "#8AB7B2",
          },
          alt: {
            DEFAULT: "#CFE900",
            dark: "#CFE900",
          },
        },
        success: {
          DEFAULT: "#28A745",
          dark: "#27D17F",
        },
      },
      screens: {
        lg: "1048px",
      },
      opacity: {
        "13": ".13",
        "8": ".08",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        highlight: {
          "0%": { backgroundColor: "#8AB7B2" },
          "100%": { backgroundColor: "transparent" },
        },
      },
      animation: {
        highlight: "highlight 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
