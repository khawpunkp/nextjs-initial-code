import { CircularProgress, Typography } from '@mui/material'

type Props = {
   label?: JSX.Element | string
   isLoading?: boolean
}

export default function PageLoading({ label, isLoading = true }: Props) {
   return (
      <div className={isLoading ? '' : 'hidden'}>
         <div className='fixed inset-0 flex flex-col gap-6 items-center justify-center z-[99] w-full h-full bg-white text-primary'>
            <Typography variant='h6'>{label}</Typography>
            <CircularProgress />
         </div>
      </div>
   )
}
