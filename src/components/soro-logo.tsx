import Link from "next/link"
import { cn } from "@/src/lib/utils"

export function SoroLogo({ className }: { className?: string }) {
  return (
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
  )
}
