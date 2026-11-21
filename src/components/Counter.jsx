import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'

export default function Counter({ to, duration = 1400 }) {
  const [ref, inView] = useInView(0.5)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduced ? 0 : duration
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = total === 0 ? 1 : Math.min((t - t0) / total, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return <span ref={ref}>{n}</span>
}
