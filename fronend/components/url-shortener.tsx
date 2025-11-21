"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Link2, Copy, Check, QrCode, Trash2, X, CheckCircle2, XCircle } from "lucide-react"
import QRCodeUtil from "qrcode"
import confetti from "canvas-confetti"

interface ShortenedLink {
  original: string
  short: string
  timestamp: number
}

export function UrlShortener() {
  const [url, setUrl] = React.useState("")
  const [shortUrl, setShortUrl] = React.useState("")
  const [copied, setCopied] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [isValid, setIsValid] = React.useState<boolean | null>(null)
  const [showQR, setShowQR] = React.useState(false)
  const [qrCode, setQrCode] = React.useState("")
  const [history, setHistory] = React.useState<ShortenedLink[]>([])

  // Load history from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("url-history")
    if (saved) {
      try {
        setHistory(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to load history", e)
      }
    }
  }, [])

  function isValidUrl(value: string) {
    if (!value.trim()) {
      setIsValid(null)
      return false
    }
    try {
      const test = value.match(/^https?:\/\//i) ? value : `https://${value}`
      new URL(test)
      setIsValid(true)
      return true
    } catch {
      setIsValid(false)
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
    const shortLink = `${base}/${slug}`

    setShortUrl(shortLink)
    setCopied(false)
    setIsLoading(false)

    // Generate QR code
    try {
      const qr = await QRCodeUtil.toDataURL(shortLink, {
        width: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      })
      setQrCode(qr)
    } catch (err) {
      console.error("QR code generation failed", err)
    }

    // Add to history
    const newLink: ShortenedLink = {
      original: normalized,
      short: shortLink,
      timestamp: Date.now()
    }
    const newHistory = [newLink, ...history].slice(0, 5) // Keep only 5 most recent
    setHistory(newHistory)
    localStorage.setItem("url-history", JSON.stringify(newHistory))

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  async function handleCopy(text?: string) {
    const textToCopy = text || shortUrl
    if (!textToCopy) return
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      const id = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(id)
    } catch {
      setError("Failed to copy to clipboard")
    }
  }

  function deleteFromHistory(timestamp: number) {
    const newHistory = history.filter(item => item.timestamp !== timestamp)
    setHistory(newHistory)
    localStorage.setItem("url-history", JSON.stringify(newHistory))
  }

  function clearHistory() {
    setHistory([])
    localStorage.removeItem("url-history")
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Input URL + Shorten button */}
      <div className="relative">
        <Card className={`rounded-2xl p-0 border-0 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 text-foreground overflow-hidden transition-all duration-300 ${isValid === true ? 'ring-2 ring-green-500/50' : isValid === false ? 'ring-2 ring-red-500/50' : ''
          }`}>
          <div className="flex items-center w-full">
            <div className="flex-1 relative">
              <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Paste your long URL here..."
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                  setError("")
                  isValidUrl(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleShorten()
                  }
                }}
                className="flex-1 h-16 bg-transparent border-0 pl-12 pr-12 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
                aria-label="Paste the link to shorten"
                inputMode="url"
                autoComplete="off"
              />
              {/* Validation Indicator */}
              {isValid === true && (
                <CheckCircle2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500 animate-in fade-in zoom-in duration-200" />
              )}
              {isValid === false && url.trim() && (
                <XCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500 animate-in fade-in zoom-in duration-200" />
              )}
            </div>
            <Button
              onClick={handleShorten}
              disabled={isLoading}
              className="h-16 rounded-r-2xl px-8 text-lg font-semibold shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 disabled:opacity-50 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
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
          <p className="text-red-400 text-sm mt-2 ml-2 animate-pulse flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            {error}
          </p>
        )}
      </div>

      {/* Short link + Copy button + QR Code */}
      {shortUrl && (
        <div className="space-y-4">
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
                onClick={() => handleCopy()}
                className="h-16 px-6 text-lg font-semibold shrink-0 bg-black hover:bg-gray-900 text-white border-r border-gray-700 transition-all duration-200 rounded-none"
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
                <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
                <span className="sr-only">Copy shortened link</span>
              </Button>
              <Button
                variant="secondary"
                onClick={() => setShowQR(!showQR)}
                className="h-16 rounded-r-2xl px-6 text-lg font-semibold shrink-0 bg-black hover:bg-gray-900 text-white border-0 transition-all duration-200"
              >
                <QrCode className="w-5 h-5" />
                <span className="ml-2">QR</span>
                <span className="sr-only">Show QR code</span>
              </Button>
            </div>
          </Card>

          {/* QR Code Display */}
          {showQR && qrCode && (
            <Card className="rounded-2xl p-6 border-0 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 text-foreground animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold text-white">QR Code</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowQR(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <img src={qrCode} alt="QR Code" className="w-64 h-64" />
                </div>
                <p className="text-sm text-gray-400 text-center">Scan to access the shortened URL</p>
              </div>
            </Card>
          )}

          {/* Success message */}
          <div className="text-center animate-in fade-in duration-500">
            <p className="text-green-400 text-lg font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Your URL has been shortened successfully!
            </p>
          </div>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <Card className="rounded-2xl p-6 border-0 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 text-foreground animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Link2 className="w-5 h-5" />
              Recent Links
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearHistory}
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
          <div className="space-y-3">
            {history.map((item) => (
              <div
                key={item.timestamp}
                className="flex items-center gap-3 p-3 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-200 group"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-400 truncate">{item.original}</p>
                  <p className="text-white font-mono text-sm truncate">{item.short}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(item.short)}
                  className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteFromHistory(item.timestamp)}
                  className="text-gray-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
