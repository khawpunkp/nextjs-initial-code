'use client'

import { createTheme } from '@mui/material'

declare module '@mui/material/Button' {
   interface ButtonPropsVariantOverrides {
      transparent: true
   }
   interface ButtonPropsColorOverrides {
      common: true
   }
}

export const muiTheme = createTheme({
   typography: {
      fontFamily: 'IBMPlexSansThai, sans-serif',
      h5: {
         fontSize: 25,
         fontWeight: 600,
         lineHeight: '23px',
      },
      h6: {
         fontSize: 21,
         fontWeight: 600,
         lineHeight: '23px',
      },
      subtitle1: {
         fontSize: 17,
         fontWeight: 500,
         lineHeight: '19px',
      },
      subtitle2: {
         fontSize: 15,
         fontWeight: 500,
         lineHeight: '17px',
      },
      body1: {
         fontSize: 17,
         fontWeight: 400,
         lineHeight: '19px',
      },
      body2: {
         fontSize: 15,
         fontWeight: 400,
         lineHeight: '17px',
      },
      button: {
         fontSize: 15,
         fontWeight: 500,
         lineHeight: '17px',
      },
      caption: {
         fontSize: 12,
         fontWeight: 400,
         lineHeight: '14px',
      },
      overline: {
         fontSize: 10,
         fontWeight: 500,
         lineHeight: '12px',
      },
   },
   palette: {
      primary: {
         main: '#573c82',
      },
      secondary: {
         main: '#4977D6',
      },
      success: {
         main: '#7BD71E',
      },
      error: {
         main: '#FF1313',
      },
      warning: {
         main: '#FF9E00',
      },
      common: {
         black: '#383A48',
      },
   },
   components: {
      MuiButton: {
         defaultProps: {
            disableElevation: true,
         },
         styleOverrides: {
            root: {
               paddingLeft: 8,
               paddingRight: 8,
               paddingTop: 8,
               paddingBottom: 8,
               borderRadius: '8px',
               boxShadow: 'none',
               fontSize: 14,
               minWidth: 0,
            },
         },
         variants: [
            {
               props: { variant: 'transparent' },
               style: {
                  backgroundColor: 'transparent',
                  color: 'inherit',
                  padding: 0,
                  borderRadius: 0,
               },
            },
         ],
      },
      MuiInputBase: {
         styleOverrides: {
            root: {
               borderRadius: '8px !important',
               backgroundColor: 'white',
            },
         },
      },
   },
})
