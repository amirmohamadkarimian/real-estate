import { BrandLockup } from './Logo'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
]

const LEGAL_LINKS = ['Privacy Policy', 'Terms', 'Sitemap']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          <BrandLockup />

          <nav className="flex flex-wrap gap-x-9 gap-y-3 lg:justify-center" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link text-[13px] text-ivory/80 hover:text-ivory">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 lg:justify-end">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="circle-control grid h-11 w-11 place-items-center rounded-full border border-ivory/25 text-ivory/80 hover:border-ivory hover:text-ivory"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-[12px] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Aurevia. All rights reserved.</p>
          <div className="flex gap-8">
            {LEGAL_LINKS.map((label) => (
              <a key={label} href="#home" className="hover:text-ivory">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
