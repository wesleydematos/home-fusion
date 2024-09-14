import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "txt-blue": "#016FED",
        "txt-grey": "#71717A",
        "txt-black ": "#1C1C1E",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #E6F1FE 0%, #CCE3FD 100%)",
      },
      boxShadow: {
        "custom-light": "0px 4px 24px 0px #0000000F",
        "custom-dark": "0px 4px 16px 0px #0000000A",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
};
export default config;
