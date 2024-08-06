'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { AuthenApi } from '@/apis/authen'

import PageLoading from '@/components/pageLoading'

import { useNavigate } from '@/utils/navigation'
import { SwalCenter } from '@/utils/sweetAlertCenter'
import {
   getAccessToken,
   removeAccessToken,
   removeRefreshToken,
   setAccessToken as setAccessCookie,
   setRefreshToken,
} from '@/utils/token'

type UserProfile = any

type AuthContextValue = {
   login: (email: string, password: string) => Promise<void>
   logout: () => Promise<void>
   isMobile: boolean
   userExist: boolean | undefined
   userProfile: UserProfile | undefined
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

type Props = {
   children: React.ReactNode
}

export function AuthProvider({ children }: Props) {
   const [isMobile, setIsMobile] = useState<boolean>(false)

   const [userExist, setUserExist] = useState<boolean>()
   const [userProfile, setUserProfile] = useState<UserProfile | undefined>()
   const [accessToken, setAccessToken] = useState<string | undefined>('')

   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [loadingLabel, setLoadingLabel] = useState<string>('')

   const pathname = usePathname()
   const navigateTo = useNavigate()

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 768) setIsMobile(true)
         else setIsMobile(false)
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   const validate = async () => {
      setIsLoading(true)
      setLoadingLabel('กำลังดึงข้อมูลผู้ใช้')
      try {
         const userResponse: any = await AuthenApi.validate()

         if (userResponse.data) {
            setUserProfile(userResponse.data)
            setUserExist(true)
         } else {
            throw {
               data: {
                  messageTH: 'ดึงข้อมูลไม่สำเร็จ',
               },
            }
         }
      } catch (error: any) {
         if (await getAccessToken()) {
            SwalCenter(
               'error',
               'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้',
               error.data?.messageTH,
               () => navigateTo.Login()
            )
         }
         setUserExist(false)
      } finally {
         setTimeout(() => {
            setIsLoading(false)
         }, 1000)
      }
   }

   const login = async (email: string, password: string) => {
      setIsLoading(true)
      setLoadingLabel('กำลังเข้าสู่ระบบ')
      try {
         const loginResponse: any = await AuthenApi.login(email, password)
         if (loginResponse.data.statusCode === 200) {
            const accessToken = loginResponse.data.accessToken
            const refreshToken = loginResponse.data.refreshToken
            await setAccessCookie(accessToken)
            await setRefreshToken(refreshToken)
            initSetAccessToken()
            SwalCenter(
               'success',
               'เข้าสู่ระบบสำเร็จ',
               '',
               () => navigateTo.Home(),
               1
            )
         }
      } catch (error: any) {
         SwalCenter('error', error.data.messageTh, '')
      } finally {
         setIsLoading(false)
      }
   }

   const logout = async () => {
      try {
         await removeAccessToken()
         await removeRefreshToken()
         setAccessToken('')
         setUserExist(false)
         setUserProfile(undefined)
         SwalCenter(
            'success',
            'ออกจากระบบสำเร็จ',
            'ระบบกำลังพาคุณไปที่หน้าเข้าสู่ระบบ',
            () => navigateTo.Login(),
            1
         )
      } catch (error) {
         SwalCenter('error', 'ออกจากระบบไม่สำเร็จ')
      }
   }

   const initSetAccessToken = async () => {
      setAccessToken(await getAccessToken())
   }

   useEffect(() => {
      initSetAccessToken()
   }, [])

   useEffect(() => {
      isUserAuthenticated()
   }, [pathname, userExist, accessToken])

   useEffect(() => {
      validate()
   }, [accessToken])

   const isUserAuthenticated = async () => {
      if (userExist === true) {
         if (accessToken) redirectToHome()
      } else if (userExist === false) {
         redirectToLogin()
      }
   }

   const noAuthRequiredPaths = ['login']

   const redirectToLogin = () => {
      if (!noAuthRequiredPaths.some((path) => pathname.includes(path)))
         navigateTo.Login()
   }

   // ถ้าไปหน้าที่มีคำว่า login จะไปหน้า home
   const redirectToHome = () => {
      if (noAuthRequiredPaths.some((path) => pathname.includes(path)))
         navigateTo.Home()
   }

   return (
      <AuthContext.Provider
         value={{
            login,
            logout,
            isMobile,
            userExist,
            userProfile,
         }}
      >
         {isLoading && <PageLoading label={loadingLabel} />}
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => useContext(AuthContext)
