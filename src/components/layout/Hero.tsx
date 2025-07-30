import { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true)
    }, 2000) // ⏱️ Delay di 2 secondi
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-zinc-100 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] sm:tracking-[0.5em] mb-2 text-zinc-500">
            WELCOME TO
          </span>
          <span className="inline-block overflow-hidden">
            <span className="inline-block text-white">
              {showTypewriter && (
                <Typewriter
                  words={['VALLINX']}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          <div className="h-px w-10 sm:w-20 bg-zinc-700"></div>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-mono lowercase tracking-wider">
            connectivity × innovation
          </p>
          <div className="h-px w-10 sm:w-20 bg-zinc-700"></div>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 overflow-hidden">
            <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-zinc-100 uppercase">
              Explore
            </span>
            <div className="absolute inset-0 border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300"></div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
          </button>
          <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 overflow-hidden">
            <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-black uppercase">
              Get Started
            </span>
            <div className="absolute inset-0 bg-zinc-100 group-hover:bg-zinc-200 transition-colors duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </div>
  )
}

export default Hero
