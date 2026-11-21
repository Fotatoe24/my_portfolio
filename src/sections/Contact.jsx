import Reveal from '../components/Reveal.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div className="ambient absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48">
        <Reveal as="p" className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
          <span className="text-accent">04</span> — Contact
        </Reveal>
        <Reveal as="h2" delay={100} className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
          Let's build
          <br />
          <span className="text-paper/60 italic">something real.</span>
        </Reveal>

        <Reveal delay={200} className="mt-14">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-4 border-b border-paper/30 pb-2 font-display text-2xl transition hover:border-accent hover:text-accent md:text-4xl"
          >
            {site.email}
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </a>
        </Reveal>

        <Reveal delay={300} className="mt-12 flex gap-8 font-mono text-xs tracking-widest uppercase">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-paper">
              {s.label} ↗
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
