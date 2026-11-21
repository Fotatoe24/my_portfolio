import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Reveal from '../components/Reveal.jsx'
import ProjectMedia from '../components/ProjectMedia.jsx'
import Lightbox from '../components/Lightbox.jsx'
import NotFound from './NotFound.jsx'
import { projects, pad } from '../data/projects.js'
import { site } from '../data/site.js'

export default function Project() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (project) document.title = `${project.title} — ${site.name}`
    return () => {
      document.title = `${site.name} — ${site.role}`
    }
  }, [project])

  if (!project) return <NotFound />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const { video, gallery } = project.media

  return (
    <main className="pt-28">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <Link to="/#work" className="font-mono text-xs tracking-widest text-muted uppercase hover:text-accent">
          ← All work
        </Link>
        <Reveal className="mt-10">
          <p className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
            <span className="text-accent">/{pad(index + 1)}</span> — {project.category}
            {project.team && ' · Team project'}
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]">{project.title}</h1>
          <p className="mt-4 font-display text-2xl text-paper/60 italic md:text-3xl">{project.tagline}</p>
        </Reveal>
      </section>

      {/* Main media: walkthrough video, else poster/placeholder */}
      <Reveal className="mx-auto mt-14 max-w-7xl px-6 md:px-10">
        <div className="overflow-hidden rounded-sm ring-1 ring-line">
          {video?.youtube ? (
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.youtube}?rel=0`}
                title={`${project.title} walkthrough`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : video ? (
            <video src={video} poster={project.media.poster ?? undefined} controls playsInline className="aspect-video w-full bg-ink-2" />
          ) : (
            <ProjectMedia project={project} index={index} active className="aspect-video" />
          )}
        </div>
      </Reveal>

      {/* Details */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1fr_2fr] md:px-10 md:py-28">
        <Reveal className="space-y-8 font-mono text-xs tracking-widest uppercase">
          {project.year && <Meta label="Year">{project.year}</Meta>}
          <Meta label="Type">{project.category}</Meta>
          <Meta label="Stack">
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-[10px] text-paper/80">
                  {s}
                </li>
              ))}
            </ul>
          </Meta>
          {(project.github || project.live) && (
            <div className="flex flex-col gap-3 pt-2">
              {project.live && <ExtLink href={project.live}>Live demo</ExtLink>}
              {project.github && <ExtLink href={project.github}>Source on GitHub</ExtLink>}
            </div>
          )}
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <h2 className="font-mono text-xs tracking-[0.3em] text-accent uppercase">What it is</h2>
            <p className="mt-4 font-display text-3xl leading-snug md:text-4xl">{project.whatItIs}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-mono text-xs tracking-[0.3em] text-accent uppercase">What it does</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/80">{project.whatItDoes}</p>
          </Reveal>
          {project.highlights.length > 0 && (
            <Reveal as="ul" className="border-t border-line">
              {project.highlights.map((h, i) => (
                <li key={h} className="flex gap-6 border-b border-line py-4 text-paper/80">
                  <span className="font-mono text-xs text-muted">{pad(i + 1)}</span>
                  {h}
                </li>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <h2 className="mb-8 font-mono text-xs tracking-[0.3em] text-muted uppercase">Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 80}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-sm bg-ink-2 ring-1 ring-line hover:ring-accent/60"
                >
                  {/\.(mp4|webm)$/i.test(src) ? (
                    <>
                      <video src={src} muted playsInline preload="metadata" className="h-full w-full object-cover" />
                      <span className="absolute inset-0 flex items-center justify-center text-4xl text-paper/80">▶</span>
                    </>
                  ) : (
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Prev / next */}
      <nav className="grid border-t border-line md:grid-cols-2">
        <PagerLink to={prev} dir="Previous" />
        <PagerLink to={next} dir="Next" alignRight />
      </nav>

      {lightbox !== null && (
        <Lightbox items={gallery} index={lightbox} onIndex={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </main>
  )
}

function Meta({ label, children }) {
  return (
    <div>
      <p className="text-muted">{label}</p>
      <div className="mt-2 text-paper">{children}</div>
    </div>
  )
}

function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-paper hover:text-accent">
      {children}
      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
    </a>
  )
}

function PagerLink({ to, dir, alignRight }) {
  return (
    <Link
      to={`/work/${to.slug}`}
      className={`group px-6 py-12 transition-colors hover:bg-ink-2 md:px-10 md:py-16 ${
        alignRight ? 'md:border-l md:border-line md:text-right' : 'border-b border-line md:border-b-0'
      }`}
    >
      <p className="font-mono text-xs tracking-widest text-muted uppercase">{dir}</p>
      <p className="mt-3 font-display text-4xl transition-colors group-hover:text-accent md:text-5xl">{to.title}</p>
    </Link>
  )
}
