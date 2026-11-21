import { Link } from 'react-router'
import { site } from '../data/site.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-[11px] tracking-widest text-muted uppercase md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {YEAR} {site.fullName}</span>
        <span className="text-paper/50">Built pixel by pixel · React + Tailwind</span>
        <div className="flex gap-6">
          <Link to="/#work" className="hover:text-paper">Work</Link>
          <Link to="/#about" className="hover:text-paper">About</Link>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="hover:text-paper">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
