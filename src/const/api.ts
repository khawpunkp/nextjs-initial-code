export const apiEndPoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export type ApiResponse = {
   statusCode: number
   data: any
   messageEN: string
   messageTH: string
}
