/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "el-db": "hsl(var(--element-db) / 1)",

        vdb: "hsl(var(--bg-vdb) / 1)",
        "t-vdb": "hsl(var(--text-vdb) / 1)",
        "input-lg": "hsl(var(--input-lg) / 1)",
        vlg: "hsl(var(--bg-vlg) / 1)",
        white: "hsl(var(--white) / 1)",
      },
      boxShadow: {
        back: "0px 0px 3px 1px rgba(0,0,0,0.3)",
      },
      fontFamily: {
        "nunito-sans": "--font-nunito-sans",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
