import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Search, X } from 'lucide-react'
import { BrandLockup } from './Logo'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        solid
          ? 'border-ink/10 bg-ivory/92 text-ink backdrop-blur-md'
          : 'border-transparent text-ivory'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 lg:px-12">
        <BrandLockup />

        <nav className="hidden items-center gap-10 text-[13px] lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search properties"
            className={`circle-control grid h-10 w-10 place-items-center rounded-full border ${
              solid ? 'border-ink/15 hover:bg-ink hover:text-ivory' : 'border-ivory/35 hover:bg-ivory hover:text-ink'
            }`}
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <a
            href="#contact"
            className={`link-arrow hidden items-center gap-2.5 rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-500 sm:inline-flex ${
              solid ? 'border-ink/20 hover:bg-ink hover:text-ivory' : 'border-ivory/40 hover:bg-ivory hover:text-ink'
            }`}
          >
            Get in Touch
            <ArrowRight className="link-arrow__icon h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              solid ? 'border-ink/15' : 'border-ivory/35'
            }`}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-ivory px-6 pb-8 pt-3 text-ink lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink/10 py-4 font-serif text-2xl"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="link-arrow mt-6 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory"
          >
            Get in Touch
            <ArrowRight className="link-arrow__icon h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  )
}
