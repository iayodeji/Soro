import Link from "next/link"
import { cn } from "@/src/lib/utils"

export function SoroLogo({ className }: { className?: string }) {
  return (
    <div className="flex items-center space-x-2">
    <img
      src="/soro-logo.png"
      alt="Soro Logo"
      className="h-9 w-9 border-2 border-terracotta rounded-full"
    />
    <Link
      href="/"
      className={cn(
        "font-heading text-2xl font-bold tracking-tight text-foreground inline-flex items-center",
        className,
      )}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-terracotta mr-2" aria-hidden="true" />
      Só<span className="text-terracotta">ró</span>
    </Link>
    </div>
  )
}
