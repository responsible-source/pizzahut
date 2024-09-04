import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:"441px",
      md:"760px",
      lg:"991px",
      xl:"1024px"
    },
    extend: {
      colors:{
        Red:'#f13a01',
      }
    },
  },
  plugins: [],
};
export default config;
