import Reveal from '../components/Reveal.jsx'
import { site } from '../data/site.js'

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <Reveal as="p" className="max-w-5xl font-display text-3xl leading-tight md:text-5xl">
        {site.intro[0]}
      </Reveal>
      <Reveal as="p" delay={150} className="mt-8 max-w-2xl text-lg text-muted md:ml-auto">
        {site.intro[1]}
      </Reveal>
    </section>
  )
}
