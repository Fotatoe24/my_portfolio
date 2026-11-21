import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-display text-6xl md:text-8xl">Lost frame.</h1>
      <p className="mt-4 text-muted">That page doesn't exist.</p>
      <Link to="/" className="mt-10 rounded-full border border-paper/30 px-7 py-3 font-mono text-xs tracking-widest uppercase hover:border-accent hover:text-accent">
        Back home
      </Link>
    </main>
  )
}
