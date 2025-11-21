import { GradientBackground } from "@/components/gradient-background"
import { Instrument_Serif } from "next/font/google"
import { UrlShortener } from "@/components/url-shortener"
import { Footer } from "@/components/footer"
import { FadeIn, SlideIn, ScaleIn } from '@/components/animations'
import { ThemeToggle } from '@/components/theme-toggle'

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <GradientBackground />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <FadeIn delay={200}>
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 ${instrumentSerif.className}`}>
              Shorten Your URLs
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                Make Them Beautiful
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transform long, messy URLs into clean, shareable links with our powerful URL shortener.
              Track clicks, manage your links, and share with confidence.
            </p>
          </div>
        </FadeIn>

        <ScaleIn delay={400}>
          <UrlShortener />
        </ScaleIn>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <SlideIn direction="left" delay={600}>
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast & Simple</h3>
              <p className="text-gray-600 dark:text-gray-300">Shorten URLs in seconds with our intuitive interface and lightning-fast service.</p>
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={800}>
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Track Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">Monitor your link performance with detailed click analytics and insights.</p>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={1000}>
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-300">Your links are safe with us. We use enterprise-grade security and privacy protection.</p>
            </div>
          </SlideIn>
        </div>
      </div>

      <Footer />
    </main>
  )
}
