export function SoroLogo({ className }: { className?: string }) {
  return (
    <a href="/" className={className} aria-label="Sóró home">
      <img
        src="/soro-logo.webp"
        alt="Sóró"
        width="140"
        height="140"
        decoding="async"
        className="h-24 w-24 object-contain"
      />
    </a>
  )
}
