import { ArrowRight, Play } from 'lucide-react'
import Reveal from './Reveal'

const STATS = [
  { value: '10+', label: 'Years of Trust' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '5,000+', label: 'Happy Families' },
]

export default function About() {
  return (
    <section id="about" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="grid gap-12 border-t border-ink/10 pt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
                alt="Luxurious modern living room framed by greenery"
                className="h-[380px] w-full object-cover lg:h-[540px]"
              />
              <div className="absolute inset-0 bg-ink/25" />
              <button
                type="button"
                aria-label="Watch our story"
                className="circle-control absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-ink backdrop-blur-sm hover:bg-ivory"
              >
                <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
              </button>
              <p className="absolute left-1/2 top-[calc(50%+3.6rem)] -translate-x-1/2 whitespace-nowrap text-[11px] uppercase tracking-[0.3em] text-ivory">
                Watch Our Story
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:pt-6">
            <p className="eyebrow text-muted">About Aurevia</p>
            <h2 className="mt-6 font-serif text-[2.8rem] font-light leading-[1] sm:text-[3.4rem]">
              Building
              <br />
              better lives
            </h2>
            <p className="mt-7 text-[15px] leading-relaxed text-muted">
              We believe a home is more than a structure — it's the foundation for a happier, healthier
              life. At Aurevia, we create spaces that inspire, connect and grow with you.
            </p>
            <a href="#contact" className="link-arrow mt-8 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em]">
              Our Story
              <ArrowRight className="link-arrow__icon h-4 w-4 text-gold" />
            </a>
          </Reveal>

          <Reveal delay={220} className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-beige lg:border-l lg:border-beige lg:pl-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="lg:py-7 lg:first:pt-0 lg:last:pb-0">
                  <p className="font-serif text-[2.6rem] leading-none lg:text-[3.2rem]">{stat.value}</p>
                  <p className="mt-2 text-[13px] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
