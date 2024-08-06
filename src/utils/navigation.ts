'use client'

import { useRouter } from 'next/navigation'

export const useNavigate = () => {
   const router = useRouter()

   return {
      Back: async () => {
         await router.back()
      },

      Home: async () => {
         await router.push(`/`)
      },

      Login: async () => {
         await router.push(`/login`)
      },
   }
}
