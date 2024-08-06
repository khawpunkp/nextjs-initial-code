import './globals.css'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from '@mui/material'
import { Metadata } from 'next'

import { AuthProvider } from '@/contexts/authContext'
import { DropDownProvider } from '@/contexts/dropdownOption'
import { NavbarProvider } from '@/contexts/navbarContext'

import { muiTheme } from '@/styles/muitheme'
import { antdtheme } from '@/styles/antdtheme'

import thTH from 'antd/lib/locale/th_TH'
import th from 'antd/es/date-picker/locale/th_TH'

const globalBuddhistLocale: typeof thTH = {
   ...thTH,
   DatePicker: {
      ...thTH.DatePicker!,
      lang: {
         ...th.lang,
         fieldDateFormat: 'BBBB-MM-DD',
         fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
         yearFormat: 'BBBB',
         cellYearFormat: 'BBBB',
      },
   },
}

export const metadata: Metadata = {
   title: '',
   description: '',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang='th'>
         {/* visit https://realfavicongenerator.net/ to generate favicon for all device and place code below*/}

         <body className='m-0 min-h-screen'>
            <ThemeProvider theme={muiTheme}>
               <ConfigProvider
                  theme={antdtheme}
                  locale={globalBuddhistLocale}
                  form={{
                     validateMessages: {
                        types: { email: 'รูปแบบของ ${label} ไม่ถูกต้อง' },
                        pattern: {
                           mismatch: 'รูปแบบของ ${label} ไม่ถูกต้อง',
                        },
                        required: 'กรุณาเพิ่มข้อมูล ${label}',
                     },
                  }}
               >
                  <AuthProvider>
                     <NavbarProvider>
                        <DropDownProvider>{children}</DropDownProvider>
                     </NavbarProvider>
                  </AuthProvider>
               </ConfigProvider>
            </ThemeProvider>
         </body>
      </html>
   )
}
