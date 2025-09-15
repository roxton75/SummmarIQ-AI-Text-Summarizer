"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Paperclip, ArrowRight } from "lucide-react"

export function SummarizeInput({
  onSubmit,
  isLoading,
}: {
  onSubmit?: (text: string, style: string) => void
  isLoading?: boolean
}) {
  const [value, setValue] = useState("")
  const [style, setStyle] = useState("normal")
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit() {
    if (value.trim() && !isLoading) {
      onSubmit?.(value, style)
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-3xl border-card border-0 items-stretch flex-row text-background">
      <div className="mb-4 flex items-center gap-3">
        <label htmlFor="style-select" className="text-sm font-medium text-[var(--sq-ink)]">
          Style:
        </label>
        <Select value={style} onValueChange={setStyle} disabled={isLoading}>
          <SelectTrigger
            id="style-select"
            className="w-40 sq-rounded border-2 border-[var(--sq-border)] bg-white text-[var(--sq-ink)]"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="sq-rounded border-2 border-[var(--sq-border)] bg-white">
            <SelectItem value="normal" className="sq-rounded-sm text-[var(--sq-ink)] hover:bg-gray-50">
              Normal
            </SelectItem>
            <SelectItem value="abstracted" className="sq-rounded-sm text-[var(--sq-ink)] hover:bg-gray-50">
              Abstracted
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Paste the text you want to summarize."
        disabled={isLoading}
        className="sq-rounded-xl sq-focus min-h-28 resize-y border-2 border-[var(--sq-ink)] bg-white px-5 py-6 pb-16 text-lg leading-relaxed text-[var(--sq-ink)] placeholder:text-[color:var(--sq-accent)] disabled:opacity-50"
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            handleSubmit()
          }
        }}
      />
      <div className="absolute bottom-3 right-3 flex gap-2">
        <Button
          type="button"
          className="pointer-events-auto sq-rounded sq-animated border-2 border-[var(--sq-ink)] bg-[var(--sq-accent)] px-3 py-2 text-white transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
          aria-label="Summarize"
          title="Summarize"
          onClick={handleSubmit}
          disabled={isLoading || !value.trim()}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : (
            <ArrowRight className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  )
}
