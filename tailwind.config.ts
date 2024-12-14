import { Opacity } from "@mui/icons-material";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        moveLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        moveRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(-0%)" },
        },
        typewriter: {
          "0%, 25%": { content: "' '" }, // No dots
          "25%, 50%": { content: "'.'" }, // One dot
          "50%, 75%": { content: "'..'" }, // Two dots
          "75%, 85%": { content: "'...'" }, // Three dots
          "86%, 100%": { content: "'...'" }, // Pause at three dots
        },
        glow: {
          "0%, 69%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 0px #10b981)",
          },
          "70%, 87%": {
            transform: "scale(1.05)", // Scale up on the 3rd dot
            filter: "drop-shadow(0 0 12px #10b981)",
          },
          "88%, 100%": {
            transform: "scale(1)", // Shrink down during reset
            filter: "drop-shadow(0 0 0px #10b981)",
          },
        },
      },
      animation: {
        typewriter: "typewriter 5.5s steps(1) infinite ",
        glow: "glow 5.5s steps(1) infinite", // Glow syncs with typewriter
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "moveLeft 1s linear infinite",
        "move-right": "moveRight 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
