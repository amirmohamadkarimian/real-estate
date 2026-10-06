import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80',
    alt: 'Contemporary villa at dusk with warm interior lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    alt: 'Modern house with landscaped gardens in the evening',
  },
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80',
    alt: 'Architectural facade at twilight with glowing windows',
  },
]

const FAMILIES = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const onScroll = () => setParallax(Math.min(window.scrollY, 900) * 0.2)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const step = useCallback((direction: number) => {
    setIndex((current) => (current + direction + SLIDES.length) % SLIDES.length)
  }, [])

  return (
    <section id="home" className="relative isolate flex min-h-[700px] flex-col overflow-hidden bg-ink text-ivory lg:h-[780px]">
      <div
        className="absolute inset-0 -z-10 scale-105"
        style={{ transform: `translate3d(0, ${parallax}px, 0) scale(1.06)` }}
      >
        {SLIDES.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
              slideIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/35" />
      </div>

      <div className="pointer-events-none absolute right-[7%] top-[22%] z-10 hidden -rotate-6 select-none text-right lg:block">
        <p className="font-script text-[6.5rem] leading-[0.78] text-ivory/85 drop-shadow-[0_4px_28px_rgba(0,0,0,0.5)]">
          A<br />
          Brighter
          <br />
          You
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pb-8 pt-32 lg:px-12 lg:pb-10 lg:pt-40">
        <div className="flex flex-1 items-center">
          <div className="max-w-[640px]">
            <p className="eyebrow text-ivory/70">More than spaces</p>

            <h1 className="mt-6 font-serif text-[3.1rem] font-light leading-[0.95] sm:text-[4.2rem] lg:text-[5.4rem]">
              Homes
              <br />
              for a brighter
              <br />
              tomorrow
            </h1>

            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ivory/75">
              Thoughtfully designed living spaces that bring comfort, convenience and a better tomorrow.
            </p>

            <a href="#properties" className="link-arrow group mt-10 inline-flex items-center gap-5">
              <span className="circle-control grid h-14 w-14 place-items-center rounded-full bg-ivory text-ink">
                <ArrowRight className="h-5 w-5" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em]">Explore Properties</span>
            </a>

            <div className="mt-12 flex items-center gap-5">
              <div className="flex -space-x-3">
                {FAMILIES.map((src, portraitIndex) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-ivory/70"
                    style={{ zIndex: FAMILIES.length - portraitIndex }}
                  />
                ))}
              </div>
              <p className="text-[13px] leading-snug text-ivory/75">
                Trusted by
                <br />
                <span className="text-ivory">5,000+ Families</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-6 pb-2">
          <div className="flex items-center gap-5">
            {SLIDES.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(slideIndex)}
                aria-label={`Show slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                className={`text-[11px] tracking-[0.2em] transition-colors duration-500 ${
                  slideIndex === index ? 'text-ivory' : 'text-ivory/45 hover:text-ivory/80'
                }`}
              >
                {String(slideIndex + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          <div className="relative h-px w-24 overflow-hidden bg-ivory/25">
            <span
              className="absolute inset-y-0 left-0 bg-ivory transition-all duration-700 ease-out"
              style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => step(-1)}
              className="circle-control grid h-10 w-10 place-items-center rounded-full border border-ivory/35 hover:bg-ivory hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => step(1)}
              className="circle-control grid h-10 w-10 place-items-center rounded-full border border-ivory/35 hover:bg-ivory hover:text-ink"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
