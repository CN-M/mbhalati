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
        "heading-1": "3.8333rem", // 69px
        "heading-2": "3.0556rem", // 55px
        "heading-3": "2.4444rem", // 44px
        "heading-4": "1.9444rem", // 35px
        "heading-5": "1.5556rem", // 28px
        "heading-6": "1.2778rem", // 23px
        paragraph: "1rem", // 18px
        "paragraph-sm": "0.8333rem", // 15px
        "paragraph-xs": "0.6667rem", // 12px
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
