import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-pink-green-cross":
          "linear-gradient(135deg, hsla(326, 52%, 76%, 1) 0%, hsla(177, 43%, 76%, 1) 100%)",
      },
      colors: {
        "english-violet": "#60435f",
        "sky-magenta": "#d67ab1",
        "levander-pink": "#e2a3c7",
        "snow-white": "#fdf7fa",
        "tiffany-blue": "#a8dcd9",
      },
    },
  },
  plugins: [],
};
export default config;
