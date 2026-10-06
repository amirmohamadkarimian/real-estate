type IconProps = { className?: string }

export function InstagramIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.6 21v-7.6h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2.1H7.8v3h2.6V21h3.2Z"
      />
    </svg>
  )
}

export function LinkedinIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.9 8.6H4V20h2.9V8.6ZM5.4 4.2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.7c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.6h-2.9V20h2.9v-6.2c0-1.3.6-2.2 1.8-2.2s1.9.9 1.9 2.3V20H20v-6.3Z"
      />
    </svg>
  )
}

export function YoutubeIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 7.9c-.2-1-.9-1.8-1.9-2-1.7-.5-4.2-.6-7.7-.6s-6 .1-7.7.6c-1 .2-1.7 1-1.9 2C2.2 9.4 2.1 10.6 2.1 12s.1 2.6.3 4.1c.2 1 .9 1.8 1.9 2 1.7.5 4.2.6 7.7.6s6-.1 7.7-.6c1-.2 1.7-1 1.9-2 .2-1.5.3-2.7.3-4.1s-.1-2.6-.3-4.1ZM10.2 15.2V8.8l5.6 3.2-5.6 3.2Z"
      />
    </svg>
  )
}
