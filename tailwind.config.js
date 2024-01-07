/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xxs: "300px",
        // => @media (min-width: 400px) { ... }
        s: "350px",
        xs: "490px",
        // => @media (min-width: 400px) { ... }
        sm: "641px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        xd: "960px",
        // => @media (min-width: 960px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        slg: "1023px",
        // => @media (min-width: 1280px) { ... }
        xlg: "1110px",
        // => @media (min-width: 1280px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [

  ],
}
