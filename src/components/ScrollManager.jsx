import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Scrolls to #hash targets (e.g. /#work from a project page) and to the top on page change.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        // wait for web fonts so the layout above the target has settled
        document.fonts.ready.then(() => requestAnimationFrame(() => el.scrollIntoView()))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
