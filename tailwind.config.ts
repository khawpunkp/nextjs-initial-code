/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
   corePlugins: {
      preflight: true,
   },
   content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         width: {
            '1123': '1123px',
         },
         height: {
            '794': '794px',
         },
         screens: {
            mobile: { max: '600px' },
            tablet: { min: '600px' },
            laptop: { min: '768px' },
            desktop: { min: '1024px' },
         },
         colors: {
            primary: '#012060',
            secondary: '#2C3975',
         },
      },
   },
   plugins: [
      nextui({
         prefix: 'nextui',
         addCommonColors: false,
         defaultTheme: 'light',
         defaultExtendTheme: 'light',
         layout: {},
         themes: {
            light: {
               colors: {
                  primary: '#FFFFFF',
               },
            },
            dark: {
               colors: {
                  primary: '#000000',
               },
            },
         },
      }),
   ],
}
