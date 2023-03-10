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
        'blue-green' : '#3F7C80',
        'sky-blue' : '#ECF0FF',
        'blue' : '#3B6BE7'
      },
      animation: {
        'flip': 'flip 2.5s ease-in-out',
        'fadeIn' : 'fadeIn 0.3s ease-out'
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(-180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        fadeIn : {
          'from' : { opacity : 0 },
          'to' : { opacity : 1 }
        }
      },
      fontFamily: {
        'Nanum': ['"Nanum Myeongjo"', 'cursive'],
        'Gowon': ['"Gowun Batang"', 'cursive'],
      },
    },
    screens: {
      'md': {'max': '767px'},
      'laptop' : {'max' : '1440px', 'min' : '768px'}
    }
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.flex-full-center': {
          '@apply w-full h-full flex justify-center items-center': {}
        },
        '.flex-center' : {
          '@apply flex justify-center items-center' : {}
        },
        '.flex-col-center' : {
          '@apply flex flex-col justify-center items-center' : {}
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
        '.border-solid-black' : {
          '@apply border border-solid border-black' : {}
        },
        '.border-solid-gray' : {
          '@apply border border-solid border-gray-300' : {}
        },
        '.grid-shadow' : {
          '@apply rounded-sm shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:scale-[1.01]' : {}
        },
        '.initial' : {
          '@apply w-[80px] h-[80px] md:w-[50px] md:h-[50px] mx-3 md:mx-1 font-light text-blue text-6xl md:text-3xl flex-center rounded-[50%] border border-solid border-blue opacity-80' : {}
        },
        '.strength-title' : {
          '@apply flex-col-center gap-4 py-10 md:text-xs md:text-center blue-btn rounded-2xl pointer-events-none' : {}
        },
        '.strength-desc' : {
          '@apply flex flex-col justify-center gap-2 col-span-2 md:text-[11px] border-solid-gray desc-shadow rounded-2xl py-4 px-6 md:p-2' : {}
        },
        '.blue-btn' : {
          '@apply text-blue bg-sky-blue hover:shadow-[2px_2px_12px_#BFD1FF] active:shadow-[inset_4px_4px_4px_#C4CBDF]' : {}
        },
      });
    },
  ],
}
