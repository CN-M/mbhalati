import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#4570A1",
      secondary: "#D4E0ED",
      tertiary: "#5B9EEF",
      white: "#F5F8FA",
      "black-100": "#0E1620",
      "black-75": "rgba(14, 22, 32, 0.75)",
      "black-50": "rgba(14, 22, 32, 0.50)",
      "black-25": "rgba(14, 22, 32, 0.25)",
      "black-10": "rgba(14, 22, 32, 0.10)",
      "black-5": "rgba(14, 22, 32, 0.5)",
    },
    extend: {
      fontSize: {
        "heading-1": "5rem", // 80px / 16 = 5rem
        "heading-2": "4rem", // 64px / 16 = 4rem
        "heading-3": "3.1875rem", // 51px / 16 = 3.1875rem
        "heading-4": "2.5625rem", // 41px / 16 = 2.5625rem
        "heading-5": "2.0625rem", // 33px / 16 = 2.0625rem
        "heading-6": "1.625rem", // 26px / 16 = 1.625rem
        paragraph: "1.3125rem", // 21px / 16 = 1.3125rem
        "paragraph-sm": "1.0625rem", // 17px / 16 = 1.0625rem
        "paragraph-xs": "0.875rem", // 14px / 16 = 0.875rem
      },
      lineHeight: {
        heading: "1.2",
        paragraph: "1.6",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        extraLight: "100",
        thin: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
export default config;
