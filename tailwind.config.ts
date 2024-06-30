import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gray100: "#E4E7E9",
        gray200: "#C9CFD2",
        gray300: "#ADB7BC",
        gray400: "#929FA5",
        gray500: "#77878F",
        gray600: "#5F6C72",
        gray700: "#475156",
        gray800: "#303639",
        gray900: "#191C1F",

        primary100: "#FFE7D6",
        primary200: "#FFCEAD",
        primary300: "#FFB685",
        primary400: "#FF9D5C",
        primary500: "#FA8232",
        primary600: "#DE732D",
        primary700: "#99501F",
        primary800: "#663514",
        primary900: "#331B0A",

        secondary100: "#D5EDFD",
        secondary200: "#ABDBFA",
        secondary300: "#81C9F8",
        secondary400: "#57B7F5",
        secondary500: "#2DA5F3",
        secondary600: "#2484C2",
        secondary700: "#1B6392",
        secondary800: "#124261",
        secondary900: "#092131",

        success100: "#D5F0D3",
        success200: "#ABE0A7",
        success300: "#81D17C",
        success400: "#57C150",
        success500: "#2DB224",
        success600: "#248E1D",
        success700: "#1B6B16",
        success800: "#12470E",
        success900: "#092407",

        warning100: "#FBF4CE",
        warning200: "#F7E99E",
        warning300: "#F3DE6D",
        warning400: "#EFD33D",
        warning500: "#EBC80C",
        warning600: "#BCA00A",
        warning700: "#8D7807",
        warning800: "#5E5005",
        warning900: "#2F2802",

        danger100: "#FCDEDE",
        danger200: "#F8BCBC",
        danger300: "#F59B9B",
        danger400: "#F17979",
        danger500: "#EE5858",
        danger600: "#BE4646",
        danger700: "#8F3535",
        danger800: "#5F2323",
        danger900: "#301212",

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
