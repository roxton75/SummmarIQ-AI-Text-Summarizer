
"use client"
import React from "react"
import { Brand } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <main className="mx-auto grid min-h-dvh max-w-3xl place-items-center px-6">
      <div className="w-full text-center">
        <Brand size="text-5xl" />
        <p className="mt-2 text-lg text-[color:var(--sq-accent)]">AI Powered Content Summarization tool</p>

        <h2 className="mt-8 font-serif text-3xl font-semibold tracking-wide text-[color:var(--sq-accent)]">SIGN IN</h2>

        <form
          className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log("[v0] login submit")
          }}
        >
          <Input
            placeholder="Email address"
            type="email"
            className="sq-rounded-lg sq-focus border-2 border-[var(--sq-ink)] bg-white px-4 py-3 text-[var(--sq-ink)] placeholder:text-[color:var(--sq-accent)]"
          />
          <Input
            placeholder="Password"
            type="password"
            className="sq-rounded-lg sq-focus border-2 border-[var(--sq-ink)] bg-white px-4 py-3 text-[var(--sq-ink)] placeholder:text-[color:var(--sq-accent)]"
          />

          <div className="mt-2 grid grid-cols-2 gap-3">
            <Button
              type="button"
              className="sq-rounded sq-animated sq-pill w-full px-4 py-2 text-base shadow-sm hover:brightness-95"
            >
              Sign in with Google
            </Button>
            <Button
              type="button"
              className="sq-rounded sq-animated sq-pill w-full px-4 py-2 text-base shadow-sm hover:brightness-95"
            >
              Create Account
            </Button>
          </div>

          <Button
            type="submit"
            className="sq-rounded mt-2 w-full border-2 border-[var(--sq-ink)] bg-[var(--sq-primary)] px-4 py-3 text-base text-white shadow-sm transition-transform hover:scale-[1.01]"
          >
            Login
          </Button>
        </form>
      </div>
    </main>
  )
}
