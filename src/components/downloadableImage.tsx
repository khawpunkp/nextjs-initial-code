import { Image, UploadFile } from 'antd'
import {
   ArrowClockwise,
   ArrowCounterClockwise,
   DownloadSimple,
   MagnifyingGlassMinus,
   MagnifyingGlassPlus,
} from '@phosphor-icons/react'
import { downloadFile } from '@/utils/misc'

type Props = {
   src: UploadFile
   className: string
}

export default function DownloadableImage({ src, className }: Props) {
   return (
      <Image
         src={src.url}
         alt={src.name}
         className={className}
         preview={{
            toolbarRender: (
               _,
               { actions: { onZoomOut, onZoomIn, onRotateLeft, onRotateRight } }
            ) => (
               <div className='flex flex-col gap-2 justify-center '>
                  <div className='flex  px-6 py-2 gap-6 rounded-full  bg-[#00000040]'>
                     <MagnifyingGlassMinus size={24} onClick={onZoomOut} />
                     <MagnifyingGlassPlus size={24} onClick={onZoomIn} />
                     <ArrowCounterClockwise size={24} onClick={onRotateLeft} />
                     <ArrowClockwise size={24} onClick={onRotateRight} />
                     <DownloadSimple
                        size={24}
                        onClick={() =>
                           downloadFile(src.name, src.originFileObj)
                        }
                     />
                  </div>
               </div>
            ),
         }}
      />
   )
}
