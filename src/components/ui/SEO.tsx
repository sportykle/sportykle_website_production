import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
}

export function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Sportykle`
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
    if (keywords) {
      const metaKw = document.querySelector('meta[name="keywords"]')
      if (metaKw) {
        metaKw.setAttribute('content', keywords)
      }
    }
  }, [title, description, keywords])

  return null
}
