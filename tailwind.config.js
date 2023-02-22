/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green' : 'rgb(15, 76, 78)',
        'deep-dark-green' : 'rgb(63, 65, 66)',
        'shadow-green' : '#808e95',
        'light-green' : ' #88c399'
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.flex-full-center': {
          '@apply w-full h-full flex justify-center items-center': {}
        },
        '.border-all' : {
          '@apply border border-solid border-black' : {}
        },
        '.flex-center' : {
          '@apply flex justify-center items-center' : {}
        },
        '.flex-info li:nth-child(n+4)' : {
          '@apply flex items-center gap-2 mb-[3px]' : {}
        },
        '.flex-info li>a' : {
          '@apply text-[12px] hover:text-light-green' : {}
        }
      });
    },
  ],
}
