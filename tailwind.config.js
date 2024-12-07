/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      brandprimary: "var(--color-brandprimary)",
      brandsecondary: "var(--color-brandsecondary)",
      brandtertiary: "var(--color-brandtertiary)",
      brandgeneral: "var(--color-brandgeneral)",
      textprimary  :"var(--color-textprimary)",
      textsecondary : "var(--color-textsecondary)",
      textprimaryinverse:"var(--color-textprimaryinverse)"
      }
    },
  },
  plugins: [],
}