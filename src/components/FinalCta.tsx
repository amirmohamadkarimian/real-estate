import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function FinalCta() {
  return (
    <section id="contact" className="relative isolate flex min-h-[420px] items-center overflow-hidden text-ivory">
      <img
        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80"
        alt="City skyline at sunset seen from a high balcony"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/92 via-ink/60 to-ink/25" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-ivory/70">It's more than a home</p>
          <h2 className="mt-6 font-serif text-[3rem] font-light leading-[0.98] sm:text-[3.8rem]">
            It's a
            <br />
            brighter you
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ivory/75">
            Experience spaces designed for the moments that matter.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <a href="#properties" className="link-arrow group inline-flex items-center gap-6">
            <span className="circle-control grid h-24 w-24 place-items-center rounded-full border border-ivory/40 hover:bg-ivory hover:text-ink">
              <ArrowRight className="h-6 w-6" />
            </span>
            <span className="text-[12px] uppercase tracking-[0.3em]">Find Your Home</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
