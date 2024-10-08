import { CircularProgress } from '@mui/material'

type Props = {
   isLoading?: boolean
}

export default function ElementLoading({ isLoading = true }: Props) {
   return (
      <div className={`w-full h-full max-h-[calc(100vh-64px)] flex justify-center items-center bg-white/10 absolute top-0 left-0 backdrop-blur-sm z-50 ${isLoading ? '' : 'hidden'}`}>
         <CircularProgress />
      </div>
   )
}
