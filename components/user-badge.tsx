"use client"

export function UserBadge({ name = "User_name" }: { name?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base text-[var(--sq-ink)]">{name}</span>
      <span
        aria-hidden
        className="h-7 w-7 rotate-45 rounded-md border-2 border-[var(--sq-ink)]"
        style={{ backgroundColor: "var(--sq-accent)" }}
      />
    </div>
  )
}
