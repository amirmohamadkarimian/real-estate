import { ArrowRight } from 'lucide-react'
import { PROPERTIES } from '../data/properties'
import PropertyCard from './PropertyCard'
import Reveal from './Reveal'

export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-12 lg:pb-28">
        <Reveal>
          <div className="flex flex-col gap-10 border-t border-ink/10 pt-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-muted">Featured Properties</p>
              <div className="mt-6 flex items-center gap-6">
                <h2 className="font-serif text-[2.8rem] font-light leading-[1] sm:text-[3.6rem]">
                  Spaces
                  <br />
                  that inspire
                </h2>
                <a
                  href="#properties"
                  aria-label="View all properties"
                  className="circle-control grid h-14 w-14 shrink-0 place-items-center rounded-full border border-ink/20 hover:bg-ink hover:text-ivory"
                >
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="max-w-sm lg:pb-2">
              <p className="text-[15px] leading-relaxed text-muted">
                From urban apartments to serene villas, explore handpicked properties that match your
                lifestyle.
              </p>
              <a href="#contact" className="link-arrow mt-6 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em]">
                View All Properties
                <ArrowRight className="link-arrow__icon h-4 w-4 text-gold" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property, index) => (
            <Reveal key={property.title} delay={index * 120}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
