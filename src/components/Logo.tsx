export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.5 13.8 16 3.6l12.5 10.2" />
      <path d="M6.8 12.4V28h18.4V12.4" />
      <path d="M12.8 28v-8.3h6.4V28" />
    </svg>
  )
}

/** Mark + wordmark + tagline, used in the header and the footer. */
export function BrandLockup({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`} aria-label="Aurevia — home">
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-[0.34em]">AUREVIA</span>
        <span className="mt-1 text-[8px] tracking-[0.32em] opacity-70">LIVE A BETTER TOMORROW</span>
      </span>
    </a>
  )
}
