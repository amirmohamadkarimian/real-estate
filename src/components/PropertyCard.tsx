import { Bath, Bed, MapPin, Ruler } from 'lucide-react'
import type { Property } from '../data/properties'

export default function PropertyCard({ property }: { property: Property }) {
  const stats = [
    { icon: Bed, label: property.beds },
    { icon: Bath, label: property.baths },
    { icon: Ruler, label: property.area },
  ]

  return (
    <a
      href="#contact"
      aria-label={`${property.title}, ${property.location} — enquire about this property`}
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-[0_30px_60px_-35px_rgba(16,24,21,0.55)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.image}
          alt={property.alt}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-ink backdrop-blur">
          {property.badge}
        </span>
      </div>

      <div className="p-6 lg:p-7">
        <h3 className="font-serif text-[26px] leading-tight">{property.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted">
          <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
          {property.location}
        </p>

        <div className="mt-6 grid grid-cols-3 divide-x divide-ink/10 border-t border-ink/10 pt-5">
          {stats.map((stat) => (
            <span
              key={stat.label}
              className="flex items-center gap-2 pl-3 text-[12px] text-ink/80 first:pl-0"
            >
              <stat.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
              {stat.label}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
