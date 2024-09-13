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
        "txt-blue": "#016FED",
        "txt-grey": "#71717A",
        "txt-black ": "#1C1C1E",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #E6F1FE 0%, #CCE3FD 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
