/** @type {import('tailwindcss').Config} */

const tailwind = {
  darkMode: ['class'],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs:'480px',
        sm:'720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1200px',
      },
      padding: '15px'
    },
    extend: {

      colors: {
       appPurple:{
        100:'#7868E6'
       },
       appRed:{
        100:'#FF4D4F'
       },
       blogText:{
        100:"rgb(222 226 227)"
       },
       gray: {
        500: "#dddde1",
        600: "#e5e7eb",
        900: "#0f0f0f"
       }
      },
      right:{
        12:"12rem"
      },
    },
  },
  variants: {},
}
export default tailwind
