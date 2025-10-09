import { GradientBackground } from "@/components/gradient-background"
import { Instrument_Serif } from "next/font/google"
import { UrlShortener } from "@/components/url-shortener"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <section className="px-6">
        <h1
          className={`${instrumentSerif.className} text-white text-center text-balance font-normal tracking-tight text-7xl`}
        >
          Url Shortner
        </h1>
        <div className="mt-10">
          <UrlShortener />
        </div>
      </section>
    </main>
  )
}
