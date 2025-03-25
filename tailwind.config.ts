import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tab: "var(--tab)",
        accent: "#D08A57",
        title: "#9fc0d5",
        paragraph: "#c1c3c5",
      },
    },
  },
  plugins: [],
} satisfies Config;
