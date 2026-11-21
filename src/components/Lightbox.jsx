import { useCallback, useEffect } from 'react'

// Full-screen viewer for screenshots and .mp4 clips. Esc closes, ← → navigate.
export default function Lightbox({ items, index, onClose, onIndex }) {
  const count = items.length
  const go = useCallback((d) => onIndex((index + d + count) % count), [index, count, onIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [go, onClose])

  const src = items[index]
  const isVideo = /\.(mp4|webm)$/i.test(src)

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-12"
      onClick={onClose}
    >
      <div className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        {isVideo ? (
          <video src={src} controls autoPlay playsInline className="max-h-[80vh] w-full rounded-sm" />
        ) : (
          <img src={src} alt="" className="max-h-[80vh] w-auto rounded-sm object-contain" />
        )}
        <p className="mt-4 text-center font-mono text-xs tracking-widest text-muted">
          {index + 1} / {count}
        </p>
      </div>

      <button onClick={onClose} className="absolute top-5 right-6 font-mono text-xs tracking-widest text-muted uppercase hover:text-paper">
        Close ✕
      </button>
      {count > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            aria-label="Previous"
            className="absolute left-3 p-4 text-3xl text-muted hover:text-accent md:left-6"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1) }}
            aria-label="Next"
            className="absolute right-3 p-4 text-3xl text-muted hover:text-accent md:right-6"
          >
            →
          </button>
        </>
      )}
    </div>
  )
}
