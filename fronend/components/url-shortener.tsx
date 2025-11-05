"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from '@/components/loading-spinner'
import { Loader2, Link2, Copy, Check } from "lucide-react"

export function UrlShortener() {
  const [url, setUrl] = React.useState("")
  const [shortUrl, setShortUrl] = React.useState("")
  const [copied, setCopied] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")

  function isValidUrl(value: string) {
    try {
      const test = value.match(/^https?:\/\//i) ? value : `https://${value}`
      new URL(test)
      return true
    } catch {
      return false
    }
  }

  async function handleShorten() {
    setError("")
    
    if (!url.trim()) {
      setError("Please enter a URL")
      return
    }
    
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL")
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const base = typeof window !== "undefined" ? window.location.origin : "https://example.com"
    const slug = Math.random().toString(36).slice(2, 8)
    const normalized = url.match(/^https?:\/\//i) ? url : `https://${url}`
    setShortUrl(`${base}/${slug}`)
    setCopied(false)
    setIsLoading(false)
  }

  async function handleCopy() {
    if (!shortUrl) return
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      const id = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(id)
    } catch {
      setError("Failed to copy to clipboard")
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Input URL + Shorten button */}
      <div className="relative">
        <Card className="rounded-2xl p-0 border-0 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 text-foreground overflow-hidden">
          <div className="flex items-center w-full">
            <div className="flex-1 relative">
              <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Paste your long URL here..."
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                  setError("")
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleShorten()
                  }
                }}
                className="flex-1 h-16 bg-transparent border-0 pl-12 pr-5 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
                aria-label="Paste the link to shorten"
                inputMode="url"
                autoComplete="off"
              />
            </div>
            <Button 
              onClick={handleShorten} 
              disabled={isLoading}
              className="h-16 rounded-r-2xl px-8 text-lg font-semibold shrink-0 bg-black hover:bg-gray-900 text-white border border-gray-700 disabled:opacity-50 transition-all duration-200"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Shorten"
              )}
              <span className="sr-only">Shorten link</span>
            </Button>
          </div>
        </Card>
        
        {error && (
          <p className="text-red-400 text-sm mt-2 ml-2 animate-pulse">{error}</p>
        )}
      </div>

      {/* Short link + Copy button */}
      {shortUrl && (
        <Card className="rounded-2xl p-0 border-0 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 text-foreground overflow-hidden animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center w-full">
            <Input
              readOnly
              value={shortUrl}
              placeholder="Your shortened URL will appear here"
              className="flex-1 h-16 bg-transparent border-0 px-5 text-white focus-visible:ring-0 focus-visible:ring-offset-0 text-lg font-mono"
              aria-label="Shortened link"
            />
            <Button
              variant="secondary"
              onClick={handleCopy}
              className="h-16 rounded-r-2xl px-8 text-lg font-semibold shrink-0 bg-black hover:bg-gray-900 text-white border border-gray-700 transition-all duration-200"
            >
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
              <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
              <span className="sr-only">Copy shortened link</span>
            </Button>
          </div>
        </Card>
      )}
      
      {/* Success message */}
      {shortUrl && (
        <div className="text-center animate-in fade-in duration-500">
          <p className="text-green-400 text-lg font-medium">✨ Your URL has been shortened successfully!</p>
        </div>
      )}
    </div>
  )
}
