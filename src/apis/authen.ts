import axios, { AxiosResponse } from 'axios'

import { apiEndPoint, ApiResponse } from '@/const/api'

import AxiosRefresh from '@/utils/axios/axiosAuth'
import { getRefreshToken, setAccessToken } from '@/utils/token'

export const AuthenApi = {
   login: async (
      email: string,
      password: string
   ): Promise<AxiosResponse<ApiResponse>> => {
      const body = {
         email,
         password,
      }

      try {
         const response = await axios.post(
            `${apiEndPoint}/api/v1/auth/login`,
            body
         )
         return response
      } catch (error: any) {
         throw error
      }
   },

   validate: async (): Promise<AxiosResponse<ApiResponse>> => {
      try {
         const response = await AxiosRefresh.get(`/api/v1/auth/validate`)
         return response
      } catch (error: any) {
         throw error
      }
   },

   getRefreshToken: async (): Promise<any> => {
      const refreshToken = await getRefreshToken()
      const config = {
         headers: { Authorization: `Bearer ${refreshToken}` },
      }
      try {
         const response = await axios.get(
            `${apiEndPoint}/api/v1/auth/refresh`,
            config
         )
         const accessToken = response.data.accessToken
         await setAccessToken(accessToken)
         return accessToken
      } catch (error: any) {
         throw error
      }
   },
}
