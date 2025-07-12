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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-100':'#E81D0E',
        'primary-200':'#4B70F5',
        'secondary-100':'#D9D9D9'
      },
      fontFamily:{
        mona:['Mona Sans',"sans-serif"]
      }
    },
  },
  plugins: [],
};
