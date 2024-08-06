'use client'

import {
   FC,
   ReactNode,
   createContext,
   useContext,
   useEffect,
   useState,
} from 'react'

import { useAuth } from '@/contexts/authContext'
import { BaseApi } from '@/apis/baseApi'

type DropDownContextValue = {
   dropdown: any
}

const DropDownContext = createContext<DropDownContextValue>(
   {} as DropDownContextValue
)

type Props = {
   children: ReactNode
}

export const DropDownProvider: FC<Props> = ({ children }) => {
   const { userExist } = useAuth()
   const [dropdown, setDropdown] = useState<any>()

   const getDropdown = async () => {
      try {
         const dropdownRes = await BaseApi.findAll()
         setDropdown(dropdownRes.data)
      } catch (error: any) {
         console.error(error)
      }
   }

   useEffect(() => {
      if (userExist) {
         getDropdown()
      }
   }, [userExist])

   return (
      <DropDownContext.Provider
         value={{
            dropdown,
         }}
      >
         {children}
      </DropDownContext.Provider>
   )
}

export const useDropDown = () => useContext(DropDownContext)
