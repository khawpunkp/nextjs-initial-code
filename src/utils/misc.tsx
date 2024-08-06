export const downloadFile = (name: string, file?: File) => {
   if (file) {
      const url = URL.createObjectURL(file)
      const link = document.createElement('a')
      link.href = url
      link.download = name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
   }
}

export const openInNewTab = (url: string) => {
   window.open(url, '_blank')
}

export const scrollToTop = () => {
   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

export function numberFormatter(value: number | undefined) {
   return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const nonCaseSensitiveSearch = (text: string, search: string) => {
   return text.toLowerCase().includes(search.toLowerCase().trim())
}