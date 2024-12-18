import type { Config } from "tailwindcss";

export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: "class",
   theme: {
      extend: {
         container: {
            center: true,
            padding: "1rem",
            screens: {
               md: "720px",
               lg: "1024px",
               xl: "1060px",
               "1440px": "1220px",
            },
         },
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: "var(--primary)",
         },
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
         },
         animation: {
            spotlight: "spotlight 2s ease .75s 1 forwards",
         },
         keyframes: {
            spotlight: {
               "0%": {
                  opacity: "0",
                  transform: "translate(-72%, -62%) scale(0.5)",
               },
               "100%": {
                  opacity: "1",
                  transform: "translate(-50%,-40%) scale(1)",
               },
            },
         },
      },
   },

   plugins: [],
} satisfies Config;
