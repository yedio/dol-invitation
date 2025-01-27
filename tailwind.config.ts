import type { Config } from "tailwindcss";
const length = {
  0.25: "0.0625rem", //1px
  0.5: "0.125rem", //2px
  0.75: "0.1875rem", //3px
  1.5: "0.375rem", //6px
  1.75: "0.4375rem", //7px
  3.75: "0.9375rem", //15px
  4.5: "1.125rem", //18px
  5.5: "1.375rem", //22px
  6: "1.5rem", //24px
  7.5: "1.875rem", //30px
  8.5: "2.125rem", //34px
  9.5: "2.375rem", //38px
  10.5: "2.625rem", //42px
  11.5: "2.875rem", // 46px
  12.5: "3.125rem", // 50px
  13: "3.25rem", //52px
  13.5: "3.375rem", //54px
  14.5: "3.625rem", //58px
  15: "3.75rem", //60px
  15.5: "3.875rem", //62px
  16: "4rem", //64px
  17: "4.25rem", //68px
  17.5: "4.375rem", //70px
  18: "4.5rem", //72px
  18.5: "4.625", //74px
  19: "4.75rem", //76px
  19.5: "4.875rem", // 78px
  21: "5.25rem", //84px
  22: "5.5rem", //88px
  23: "5.75rem", //92px
  25: "6.25rem", //100px
  30: "7.5rem", //120px
  31: "7.75rem", //124px
  31.5: "7.875rem", //126px
  32.5: "8.125rem", //130px
  33: "8.25rem", //132px
  34: "8.5rem", // 136px
  34.5: "8.625rem", //138px
  35: "8.75rem", //140px
  35.25: "8.8125rem", //141px
  36.5: "8.75rem", //146px
  37.5: "9.375rem", //150px
  38: "9.5rem", //152px
  40: "10rem", //160px
  41: "10.25rem", //164px
  42.25: "10.5625rem", // 169px
  45.5: "11.375rem", //182px
  46: "11.5rem", //184px
  47: "11.75rem", //188px
  47.75: "11.9375rem", //191px
  49: "12.25rem", //196px
  50: "12.5rem", //200px
  52: "13rem", //208px
  53: "13.25rem", //212px
  54: "13.5rem", //216px
  54.5: "13.625rem", //218px
  57: "14.25rem", //228px
  57.5: "14.375rem", //230px
  64: "16rem", // 256px
  65.5: "16.375rem", //262px
  71: "17.75rem", //284px
  72: "18rem", //288px
  84: "21rem", //336px
  85: "21.25rem", //340px
  88: "22rem", //352px
  90: "22.5rem", //360px
  92: "23rem", //368px
  100: "25rem", //400px
  101: "25.25rem", //404px
  160: "40rem", //640px
  240: "60rem", //960px
};
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gyeonggi_Batang_Regular", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "cover-color": "#fbf4f6",
        "main-color": "#ff4d6d",
      },
      fontSize: {
        8: ["8px", "10px"],
        9: ["9px", "12px"],
        10: ["10px", "14px"],
        11: ["11px", "16px"],
        12: ["12px", "18px"],
        13: ["13px", "18px"],
        14: ["14px", "20px"],
        15: ["15px", "22px"],
        16: ["16px", "24px"],
        17: ["17px", "24px"],
        18: ["18px", "26px"],
        20: ["20px", "30px"],
        22: ["22px", "32px"],
        24: ["24px", "32px"],
        28: ["28px", "36px"],
        30: ["30px", "40px"],
        32: ["32px", "42px"],
        34: ["34px", "46px"],
        36: ["36px", "46px"],
        40: ["40px", "52px"],
        44: ["44px", "54px"],
      },
      width: length,
      height: length,
      spacing: length,
      padding: length,
      margin: length,
    },
    fontWeight: {
      "weight-100": "100",
      "weight-200": "200",
      "weight-300": "300",
      "weight-400": "400",
      "weight-500": "500",
      "weight-600": "600",
      "weight-700": "700",
      "weight-800": "800",
      "weight-900": "900",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
} satisfies Config;
