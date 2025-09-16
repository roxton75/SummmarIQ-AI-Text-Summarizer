"use client"

import { useState } from "react"
import { SummarizeInput } from "@/components/summarize-input"

export default function HomePage() {
  const [summary, setSummary] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const handleSummarize = async (text: string, style: string) => {
    if (!text.trim()) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, style }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to summarize")
      }

      setSummary(data.summary)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-dvh">
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-10">
        <div className="text-center">
          <h1 className="font-serif text-5xl font-semibold text-[var(--sq-ink)] text-balance">SummarIQ</h1>
          <p className="mt-2 font-sans text-lg text-[color:var(--sq-accent)]">AI Powered Content Summarization tool</p>
        </div>

        <div className="w-full max-w-4xl bg-white sq-rounded-lg border border-[var(--sq-border)] p-12 min-h-[400px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-[var(--sq-accent)] border-t-transparent"></div>
              <p className="text-[var(--sq-accent)] font-sans text-lg">Generating summary...</p>
            </div>
          ) : error ? (
            <div className="text-center max-w-2xl">
              <p className="text-red-500 font-sans text-lg mb-4">{error}</p>
              {error.includes("API key") && (
                <div className="bg-red-50 border border-red-200 sq-rounded p-4 text-left">
                  <p className="text-red-700 font-sans text-sm mb-2">
                    <strong>Setup Required:</strong> To use Google Gemini for summarization:
                  </p>
                  <ol className="text-red-700 font-sans text-sm space-y-1 list-decimal list-inside">
                    <li>
                      Go to{" "}
                      <a
                        href="https://makersuite.google.com/app/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Google AI Studio
                      </a>{" "}
                      to get your API key
                    </li>
                    <li>
                      Add <code className="bg-red-100 px-1 rounded">GOOGLE_GENERATIVE_AI_API_KEY</code> to your
                      environment variables
                    </li>
                    <li>Restart your development server</li>
                  </ol>
                </div>
              )}
            </div>
          ) : summary ? (
            <div className="w-full">
              <p className="text-[var(--sq-ink)] font-sans text-lg leading-relaxed whitespace-pre-wrap" style={{ textAlign: 'justify' }}>{summary}</p>
            </div>
          ) : (
            <p className="text-[var(--sq-accent)] font-sans text-lg">Summary will appear here</p>
          )}
        </div>

        <div className="w-full max-w-4xl">
          <SummarizeInput onSubmit={handleSummarize} isLoading={isLoading} />
        </div>

        <div className="text-center text-sm text-[var(--sq-accent)] font-sans">
          •Uses Google Gemini Vision Pro (Free tier)•
        </div>
      </section>
    </main>
  )
}
