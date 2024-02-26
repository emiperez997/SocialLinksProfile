/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      grey: "hsl(0, 0%, 20%)",
      darkGrey: "hsl(0, 0%, 12%)",
      offBlack: "hsl(0, 0%, 8%)",
      green: "hsl(75, 94%, 57%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
