import { Tooltip } from 'antd'
import { Button } from '@mui/material'
import {
   PencilSimple,
   ListBullets,
   Trash,
   ArrowSquareOut,
   Check,
   X,
} from '@phosphor-icons/react'

export function EditButton({ onClick }: { onClick?: () => any }) {
   return (
      <Tooltip title='แก้ไข' color='#FF9E00'>
         <Button
            onClick={onClick}
            className='max-w-8 max-h-8 aspect-square'
            sx={{
               minWidth: '32px',
               minHeight: '32px',
               backgroundColor: '#FF9E0033',
               padding: '6px',
               ':hover': { backgroundColor: '#FF9E0040', color: '#FF9E00' },
            }}
         >
            <PencilSimple size={18} color='#FF9E00' weight='fill' />
         </Button>
      </Tooltip>
   )
}

export function DetailButton({ onClick }: { onClick?: () => any }) {
   return (
      <Tooltip title={'ดูรายละเอียด'} color='#7D7D7D'>
         <Button
            onClick={onClick}
            className='max-w-8 max-h-8 aspect-square'
            sx={{
               minWidth: '32px',
               minHeight: '32px',
               backgroundColor: '#7D7D7D33',
               padding: '6px',
               ':hover': { backgroundColor: '#7D7D7D40', color: '#7D7D7D' },
            }}
         >
            <ListBullets size={20} color='#7D7D7D' weight='bold' />
         </Button>
      </Tooltip>
   )
}

export function NewPageButton({
   tooltip,
   onClick,
}: {
   tooltip: string
   onClick?: () => any
}) {
   return (
      <Tooltip title={tooltip} color='#2B99FF'>
         <Button
            onClick={onClick}
            className='max-w-8 max-h-8 aspect-square'
            sx={{
               minWidth: '32px',
               minHeight: '32px',
               backgroundColor: '#2B99FF33',
               padding: '6px',
               ':hover': { backgroundColor: '#2B99FF40', color: '#2B99FF' },
            }}
         >
            <ArrowSquareOut size={20} color='#2B99FF' weight='fill' />
         </Button>
      </Tooltip>
   )
}

export function DeleteButton({ onClick }: { onClick?: () => any }) {
   return (
      <Tooltip title='ลบ' color='#EE6A4A'>
         <Button
            onClick={onClick}
            className='max-w-8 max-h-8 aspect-square'
            sx={{
               minWidth: '32px',
               minHeight: '32px',
               backgroundColor: '#EE6A4A1A',
               padding: '6px',
               ':hover': {
                  backgroundColor: '#EE6A4A40',
                  color: '#EE6A4A',
               },
            }}
         >
            <Trash size={18} color='#EE6A4A' weight='fill' />
         </Button>
      </Tooltip>
   )
}

export function ApproveButton({ onClick }: { onClick?: () => any }) {
   return (
      <Tooltip title='อนุมัติ' color='#34B53A'>
         <Button
            onClick={onClick}
            className='max-w-8 max-h-8 aspect-square'
            sx={{
               minWidth: '32px',
               minHeight: '32px',
               backgroundColor: '#34B53A1A',
               padding: '6px',
               ':hover': {
                  backgroundColor: '#34B53A40',
                  color: '#34B53A',
               },
            }}
         >
            <Check size={18} color='#34B53A' />
         </Button>
      </Tooltip>
   )
}

export function RejectButton({ onClick }: { onClick?: () => any }) {
   return (
      <Tooltip title='ปฏิเสธ' color='#EE6A4A'>
         <Button
            onClick={onClick}
            className='max-w-8 max-h-8 aspect-square'
            sx={{
               minWidth: '32px',
               minHeight: '32px',
               backgroundColor: '#EE6A4A1A',
               padding: '6px',
               ':hover': {
                  backgroundColor: '#EE6A4A40',
                  color: '#EE6A4A',
               },
            }}
         >
            <X size={18} color='#EE6A4A' />
         </Button>
      </Tooltip>
   )
}
