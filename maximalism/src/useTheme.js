import { useState, useEffect, useCallback } from 'react'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('tralance-theme')
    if (saved === 'light' || saved === 'dark') return saved
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('tralance-theme', theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggle }
}

export default useTheme
