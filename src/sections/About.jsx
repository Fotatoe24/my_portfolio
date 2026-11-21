import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import PixelMark from '../components/PixelMark.jsx'
import SectionHead from './SectionHead.jsx'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'

// Stats are counted from your project list, so they stay accurate as you add work.
const stats = [
  { value: projects.length, label: 'Projects built' },
  { value: projects.filter((p) => p.kind === 'web').length, label: 'Web apps' },
  { value: projects.filter((p) => p.kind === 'desktop').length, label: 'Desktop apps' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10">
      <SectionHead index="03" label="About" title="The person behind the work" />

      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-2 ring-1 ring-line">
          {site.photo ? (
            <img src={site.photo} alt={site.fullName} className="h-full w-full object-cover" />
          ) : (
            <div className="pixel-grid flex h-full items-center justify-center text-paper/80">
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(50% 50% at 50% 40%, rgb(255 106 61 / 0.18), transparent 70%)' }}
              />
              <PixelMark size={18} className="relative" />
            </div>
          )}
        </Reveal>

        <div className="flex flex-col justify-between gap-12">
          <div className="space-y-6 text-lg leading-relaxed text-paper/80">
            {site.bio.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 120}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="grid grid-cols-3 gap-6 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-6xl leading-none md:text-7xl">
                  <Counter to={s.value} />
                </p>
                <p className="mt-3 font-mono text-[10px] tracking-widest text-muted uppercase">{s.label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="flex items-center gap-3 font-mono text-xs tracking-widest text-paper/70 uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {site.availability}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
