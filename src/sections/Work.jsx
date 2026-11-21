import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHead from './SectionHead.jsx'
import { projects } from '../data/projects.js'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'desktop', label: 'Desktop' },
]

export default function Work() {
  const [filter, setFilter] = useState('all')

  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10">
      <SectionHead index="01" label="Selected work" title="Things I've built">
        <div className="flex gap-2 font-mono text-[11px] tracking-widest uppercase">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 transition ${
                filter === f.id ? 'border-accent text-accent' : 'border-line text-muted hover:text-paper'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </SectionHead>

      <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
        {projects.map((p, i) =>
          filter === 'all' || p.kind === filter ? (
            <Reveal key={p.slug} delay={(i % 2) * 120}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ) : null,
        )}
      </div>
    </section>
  )
}
