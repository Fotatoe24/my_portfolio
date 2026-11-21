import { useRef, useState } from 'react'
import { Link } from 'react-router'
import ProjectMedia from './ProjectMedia.jsx'
import { pad } from '../data/projects.js'

export default function ProjectCard({ project, index }) {
  const video = useRef(null)
  const [active, setActive] = useState(false)

  const start = () => {
    setActive(true)
    const v = video.current
    if (v && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.play().catch(() => {})
    }
  }
  const stop = () => {
    setActive(false)
    const v = video.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }

  return (
    <Link
      to={`/work/${project.slug}`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className="group block focus:outline-none"
    >
      <ProjectMedia
        ref={video}
        project={project}
        index={index}
        active={active}
        className="aspect-[16/10] rounded-sm ring-1 ring-line transition group-hover:ring-accent/60 group-focus-visible:ring-accent"
      />

      <div className="mt-5 flex items-baseline justify-between gap-4 font-mono text-[11px] tracking-widest text-muted uppercase">
        <span>
          /{pad(index + 1)} · {project.category}
          {project.team && ' · Team'}
        </span>
        {project.year && <span>{project.year}</span>}
      </div>

      <h3 className="mt-2 flex items-center gap-3 font-display text-3xl leading-tight md:text-4xl">
        <span className="transition-colors group-hover:text-accent">{project.title}</span>
        <span className="translate-x-[-6px] text-accent opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </h3>
      <p className="mt-1 text-muted">{project.tagline}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wider text-paper/70 uppercase">
            {s}
          </li>
        ))}
      </ul>
    </Link>
  )
}
