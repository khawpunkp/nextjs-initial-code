import React, { Dispatch, SetStateAction } from 'react'
import { Tabs, Tab } from '@mui/material'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { useAuth } from '@/contexts/authContext'

type Props = {
   value: number
   setValue: Dispatch<SetStateAction<number>>
   labels: string[]
}

export default function CustomTabs({ value, setValue, labels }: Props) {
   const { isMobile } = useAuth()

   const handleTabsValueChange = (
      event: React.SyntheticEvent,
      value: number
   ) => {
      setValue(value)
   }

   return (
      <Tabs
         value={value}
         onChange={handleTabsValueChange}
         variant={isMobile ? 'scrollable' : 'fullWidth'}
         scrollButtons={isMobile}
         allowScrollButtonsMobile
         sx={{
            minHeight: 40,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '.MuiTabs-flexContainer': {
               gap: 1,
               width: '100%',
            },
         }}
         ScrollButtonComponent={(props) => {
            const { slotProps, ...otherProps } = props
            if (props.direction === 'left' && !props.disabled) {
               return (
                  <div
                     {...otherProps}
                     className='absolute h-10 w-12 flex items-center justify-start aspect-square bg-gradient-to-r from-60% from-white z-40 -left-1 top-1/2 -translate-y-1/2'
                  >
                     <CaretLeft size={24} />
                  </div>
               )
            } else if (props.direction === 'right' && !props.disabled) {
               return (
                  <div
                     {...otherProps}
                     className='absolute h-10 w-12 flex items-center justify-end aspect-square bg-gradient-to-l from-60% from-white z-40 -right-1 top-1/2 -translate-y-1/2'
                  >
                     <CaretRight size={24} />
                  </div>
               )
            } else {
               return null
            }
         }}
      >
         {labels.map((label, index) => (
            <Tab key={index} label={label} value={index} />
         ))}
      </Tabs>
   )
}
