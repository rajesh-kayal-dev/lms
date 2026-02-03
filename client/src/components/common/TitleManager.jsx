import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const formatTitle = (pathname) => {
  if (pathname === '/') return null 

  const lastSegment = pathname.split('/').filter(Boolean).pop()

  return lastSegment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

const TitleManager = () => {
  const location = useLocation()

  useEffect(() => {
    const page = formatTitle(location.pathname)

    if (!page) {
      document.title = 'UpSkillr'
    } else {
      document.title = `${page} | UpSkillr`
    }
  }, [location.pathname])

  return null
}

export default TitleManager
