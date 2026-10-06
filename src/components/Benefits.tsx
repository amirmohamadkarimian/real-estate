import { Building2, Headset, MapPin, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const ITEMS = [
  { icon: MapPin, title: 'Prime Locations', text: 'Close to what matters' },
  { icon: Building2, title: 'Modern Design', text: 'For modern living' },
  { icon: ShieldCheck, title: 'Secure Investment', text: 'Built for your future' },
  { icon: Headset, title: 'End-to-End Support', text: "We're with you always" },
]

export default function Benefits() {
  return (
    <section id="services" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24">
        <div className="grid gap-px bg-beige sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="bg-ivory">
              <div className="flex h-full flex-col items-start gap-5 px-2 py-8 lg:px-8">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 text-gold">
                  <item.icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="font-serif text-[22px] leading-tight">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
