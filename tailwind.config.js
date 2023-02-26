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
        'light-green' : '#88c399',
        'olive-green' : '#307D5D',
        'blue-green' : '#3F7C80'
      },
      animation: {
        'flip': 'flip 2.5s ease-in-out',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(-180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
    },
    screens: {
      'md': {'max': '767px'},
    }
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
          '@apply text-[11px] hover:text-light-green' : {}
        },
        '.absolute-center' : {
          '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : {}
        },
        '.grid-shadow' : {
          '@apply rounded-sm shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:scale-[1.01]' : {}
        },
      });
    },
  ],
}
