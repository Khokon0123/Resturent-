import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: ["var(--font-hind)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      colors: {
        "brand-red": "#DC2626",
        "brand-red-dark": "#B91C1C",
        "brand-amber": "#F59E0B",
        "brand-amber-dark": "#D97706",
        halal: "#16A34A",
        fresh: "#0891B2",
        surface: "#FFF8F0",
        "surface-2": "#FEF3C7",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
