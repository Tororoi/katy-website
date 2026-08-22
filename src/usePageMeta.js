import { useEffect } from 'react'

// The CRA SPA serves one HTML shell for every route; give each page a real
// title and meta description client-side.
const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
  }, [title, description])
}

export default usePageMeta
