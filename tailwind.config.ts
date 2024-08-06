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
            orange: '#FF712B',
            yellow: '#FF9E00',
            blue: '#2B99FF',
            'light-blue': { 100: '#4977D6', 200: '#E8EFFC' },
            'dark-blue': {
               100: '#012060',
               200: '#2C3975',
            },
            purple: {
               100: '#573c82',
            },
            green: '#34B53A',
            red: '#FF3A29',
            pink: '#E90E8B',
            black: {
               100: '#383A48',
               200: '#7D7D7D',
            },
            gray: {
               100: '#BCBEC0',
               200: '#E5E5E5',
               300: '#B4AAA6',
            },
            'menu-text': '#7F828C',
            'menu-color': '#131420',
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
