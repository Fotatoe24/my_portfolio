import Reveal from '../components/Reveal.jsx'

export default function SectionHead({ index, label, title, children }) {
  return (
    <Reveal className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
          <span className="text-accent">{index}</span> — {label}
        </p>
        <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">{title}</h2>
      </div>
      {children}
    </Reveal>
  )
}
