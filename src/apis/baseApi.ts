import { AxiosResponse } from 'axios'

import { ApiResponse } from '@/const/api'

import AxiosAuth from '@/utils/axios/axiosAuth'

export const BaseApi = {
   findAll: async (): Promise<AxiosResponse<ApiResponse>> => {
      try {
         const response = await AxiosAuth.get(`/api`)
         return response
      } catch (error: any) {
         throw error
      }
   },
   findOne: async (
      id: string | number
   ): Promise<AxiosResponse<ApiResponse>> => {
      try {
         const response = await AxiosAuth.get(`/api/${id}`)
         return response
      } catch (error: any) {
         throw error
      }
   },
   create: async (body: any): Promise<AxiosResponse<ApiResponse>> => {
      try {
         const response = await AxiosAuth.post(`/api/create`, body)
         return response
      } catch (error: any) {
         throw error
      }
   },
   update: async (
      id: string | number,
      body: any
   ): Promise<AxiosResponse<ApiResponse>> => {
      try {
         const response = await AxiosAuth.patch(`/api/update/${id}`, body)
         return response
      } catch (error: any) {
         throw error
      }
   },
   delete: async (id: string | number): Promise<AxiosResponse<ApiResponse>> => {
      try {
         const response = await AxiosAuth.delete(`/api/delete/${id}`)
         return response
      } catch (error: any) {
         throw error
      }
   },
}
