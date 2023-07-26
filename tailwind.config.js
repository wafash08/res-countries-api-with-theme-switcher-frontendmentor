/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "el-db": "hsl(var(--element-db) / 1)",

      vdb: "hsl(var(--bg-vdb) / 1)",
      "t-vdb": "hsl(var(--text-vdb) / 1)",
      "input-lg": "hsl(var(--input-lg) / 1)",
      vlg: "hsl(var(--bg-vlg) / 1)",
      white: "hsl(var(--white) / 1)",
    },
  },
  plugins: [],
};
