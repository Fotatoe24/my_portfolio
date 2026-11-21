import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import PixelMark from './PixelMark.jsx'
import { site } from '../data/site.js'

const links = [
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'border-b border-line/60 bg-ink/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3 text-paper hover:text-accent" aria-label="Home">
          <PixelMark size={3} />
          <span className="hidden font-mono text-xs tracking-widest uppercase sm:inline">{site.name}</span>
        </Link>
        <ul className="flex items-center gap-6 font-mono text-xs tracking-widest uppercase md:gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="text-muted transition-colors hover:text-paper">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
