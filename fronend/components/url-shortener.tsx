"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function UrlShortener() {
  const [url, setUrl] = React.useState("")
  const [shortUrl, setShortUrl] = React.useState("")
  const [copied, setCopied] = React.useState(false)

  function isValidUrl(value: string) {
    try {
      // Allow missing protocol by trying to prepend https://
      const test = value.match(/^https?:\/\//i) ? value : `https://${value}`
      new URL(test)
      return true
    } catch {
      return false
    }
  }

  function handleShorten() {
    if (!url || !isValidUrl(url)) {
      // Basic guard: ignore invalid input
      return
    }
    const base = typeof window !== "undefined" ? window.location.origin : "https://example.com"
    const slug = Math.random().toString(36).slice(2, 8)
    const normalized = url.match(/^https?:\/\//i) ? url : `https://${url}`
    // In a real app, you would POST normalized to an API and get a slug back.
    setShortUrl(`${base}/${slug}`)
    setCopied(false)
  }

  async function handleCopy() {
    if (!shortUrl) return
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      const id = setTimeout(() => setCopied(false), 1500)
      return () => clearTimeout(id)
    } catch {
      // ignore copy errors
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto grid gap-4">
      {/* Box 1: Input URL + Shorten button */}
      <Card className="rounded-full p-0 border-0 bg-transparent shadow-none text-foreground">
        <div className="flex items-center w-full overflow-hidden rounded-full bg-background/30 backdrop-blur-xl">
          <Input
            placeholder="Paste link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 h-14 bg-transparent border-0 px-5 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            aria-label="Paste the link to shorten"
            inputMode="url"
            autoComplete="off"
          />
          <Button onClick={handleShorten} className="h-14 rounded-full px-6 text-base font-medium shrink-0">
            Shorten
            <span className="sr-only">Shorten link</span>
          </Button>
        </div>
      </Card>

      {/* Box 2: Short link + Copy button */}
      <Card className="rounded-full p-0 border-0 bg-transparent shadow-none text-foreground">
        <div className="flex items-center w-full overflow-hidden rounded-full bg-background/30 backdrop-blur-xl">
          <Input
            readOnly
            value={shortUrl || ""}
            placeholder="Shortened link will appear here"
            className="flex-1 h-14 bg-transparent border-0 px-5 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            aria-label="Shortened link"
          />
          <Button
            variant="secondary"
            onClick={handleCopy}
            disabled={!shortUrl}
            className="h-14 rounded-full px-6 text-base font-medium shrink-0 disabled:opacity-50"
          >
            {copied ? "Copied" : "Copy"}
            <span className="sr-only">Copy shortened link</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}
