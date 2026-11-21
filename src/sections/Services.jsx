import Reveal from '../components/Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { site } from '../data/site.js'
import { pad } from '../data/projects.js'

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionHead index="02" label="What I do" title="From database to pixel" />
      <div className="border-t border-line">
        {site.services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 80}
            className="group grid gap-4 border-b border-line py-8 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline md:py-10"
          >
            <span className="font-mono text-xs text-accent">{pad(i + 1)}</span>
            <h3 className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
              {s.title}
            </h3>
            <p className="text-muted">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
