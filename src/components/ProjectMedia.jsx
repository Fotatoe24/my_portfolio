import { forwardRef } from 'react'
import { pad } from '../data/projects.js'

// Poster + optional hover clip. Falls back to a styled title card until media is added.
const ProjectMedia = forwardRef(function ProjectMedia({ project, index, active = false, className = '' }, videoRef) {
  const { poster, clip } = project.media

  return (
    <div className={`relative overflow-hidden bg-ink-2 ${className}`}>
      {poster ? (
        <img
          src={poster}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
            active ? 'scale-105' : 'scale-100'
          }`}
        />
      ) : (
        <Placeholder project={project} index={index} active={active} />
      )}

      {clip && (
        <video
          ref={videoRef}
          src={clip}
          poster={poster ?? undefined}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* letterbox vignette */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-ink/20" />
    </div>
  )
})

function Placeholder({ project, index, active }) {
  return (
    <div className="pixel-grid absolute inset-0 flex items-center justify-center">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-50'}`}
        style={{
          background:
            project.kind === 'desktop'
              ? 'radial-gradient(60% 60% at 70% 30%, rgb(90 120 255 / 0.25), transparent 70%)'
              : 'radial-gradient(60% 60% at 30% 30%, rgb(255 106 61 / 0.25), transparent 70%)',
        }}
      />
      <span className="absolute top-4 left-5 font-mono text-[10px] tracking-widest text-muted uppercase">
        /{pad(index + 1)}
      </span>
      <span
        className={`relative px-6 text-center font-display text-4xl italic leading-none text-paper/80 transition-transform duration-700 md:text-5xl ${
          active ? 'scale-105' : ''
        }`}
      >
        {project.title}
      </span>
    </div>
  )
}

export default ProjectMedia
