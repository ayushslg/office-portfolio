import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const location = useLocation()
  const { pathname, state } = location

  useEffect(() => {
    if (state?.scrollTo) {
      const targetId = state.scrollTo
      const timer = window.setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, left: 0 })
        }

        const { scrollTo, ...rest } = state
        window.history.replaceState(rest, '', `${window.location.pathname}${window.location.search}${window.location.hash}`)
      }, 60)

      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, state])

  return null
}

export default ScrollToTop
