"use client"

export function Brand({ size = "text-3xl" }: { size?: string }) {
  return (
    <div className="flex items-center">
      <span className={`font-serif ${size} font-semibold tracking-tight text-[var(--sq-ink)]`}>SummarIQ</span>
    </div>
  )
}
