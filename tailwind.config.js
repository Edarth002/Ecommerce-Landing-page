/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Grayishblue: "hsl(237, 18%, 59%)",
        Softred: "hsl(345, 95%, 68%)",
        Darkdesaturatedblue: "hsl(236, 21%, 26%)",
        darkblue: "hsl(235, 16%, 14%)",
        Verydarkblue: "hsl(234, 17%, 12%)",
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
