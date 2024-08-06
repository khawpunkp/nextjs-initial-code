'use client'

import { createContext, useContext } from 'react'
import { usePathname } from 'next/navigation'

import Navbar from '@/components/layout/navbar'

type NavbarContextValue = {}

interface Props {
   children: React.ReactNode
}

const NavbarContext = createContext<NavbarContextValue>(
   {} as NavbarContextValue
)

export const NavbarProvider: React.FC<Props> = ({ children }) => {
   const pathname = usePathname()

   const noNavRequiredPaths = ['login']

   const isShowNavbar = !noNavRequiredPaths.some((path) => pathname.includes(path))

   return <NavbarContext.Provider value={{}}>{isShowNavbar ? <Navbar>{children}</Navbar> : children}</NavbarContext.Provider>
}

export const useNavbar = () => useContext(NavbarContext)
