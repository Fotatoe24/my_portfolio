import { Link } from 'react-router'
import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Background: showreel video if provided, otherwise drifting light + pixel grid */}
      {site.showreel ? (
        <video
          src={site.showreel}
          poster={site.showreelPoster ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      ) : (
        <div className="ambient absolute inset-0" />
      )}
      <div className="pixel-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/30 via-transparent to-ink" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-28 md:px-10">
        <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
          <span className="mr-3 inline-block h-2 w-2 animate-pulse rounded-full bg-accent align-middle" />
          {site.label}
        </p>

        <h1 className="mt-6 font-display text-[clamp(4rem,14vw,12rem)] leading-[0.85] tracking-tight">
          {site.name}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-6 font-display text-2xl text-paper/70 italic md:text-4xl">{site.role}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/#work"
            className="rounded-full bg-paper px-7 py-3 font-mono text-xs tracking-widest text-ink uppercase transition hover:bg-accent"
          >
            View my work
          </Link>
          <Link
            to="/#contact"
            className="rounded-full border border-paper/30 px-7 py-3 font-mono text-xs tracking-widest uppercase transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-8 font-mono text-[11px] tracking-widest text-muted uppercase md:px-10">
        <span>{site.location}</span>
        <span className="flex flex-col items-center gap-2">
          Scroll
          <span className="h-10 w-px animate-pulse bg-muted" />
        </span>
      </div>
    </section>
  )
}
