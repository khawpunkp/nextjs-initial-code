import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'

type BreadcrumbComponentProps = {
   paths: {
      navigation: () => Promise<void> | null
      title: string
   }[]
}

export default function BreadcrumbComponent({
   paths,
}: BreadcrumbComponentProps) {

   return (
      <Breadcrumbs variant={'solid'}>
         {paths.map((path, index) => (
            <BreadcrumbItem key={index} onClick={path.navigation}>
               {path.title}
            </BreadcrumbItem>
         ))}
      </Breadcrumbs>
   )
}