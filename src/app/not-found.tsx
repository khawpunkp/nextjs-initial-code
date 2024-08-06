'use client'

import React, { useEffect } from 'react'

import PageLoading from '@/components/pageLoading'

import { useAuth } from '@/contexts/authContext'

import { useNavigate } from '@/utils/navigation'

export default function () {
   const navigateTo = useNavigate()
   const { userExist } = useAuth()

   useEffect(() => {
      if (userExist === true) {
         navigateTo.Home()
      } else if (userExist === false) {
         navigateTo.Login()
      }
   }, [userExist])

   return <PageLoading />
}
