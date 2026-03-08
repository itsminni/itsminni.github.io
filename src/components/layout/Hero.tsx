import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  typewriterDelay?: number;
}

function Hero({ typewriterDelay = 2000 }: HeroProps) {
  const [showTypewriter, setShowTypewriter] = useState(typewriterDelay === 0);
  const { t } = useTranslation();

  useEffect(() => {
    if (typewriterDelay === 0) return;
    const timer = setTimeout(() => setShowTypewriter(true), typewriterDelay);
    return () => clearTimeout(timer);
  }, [typewriterDelay]);

  return (
  <div className="relative w-full min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6 md:px-8 py-[calc(env(safe-area-inset-top)+1rem)]">

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
  <h1 className="text-zinc-100 font-black uppercase tracking-tighter leading-none text-[clamp(2.5rem,8vw,6.75rem)]">
          <span className="block font-light tracking-[0.35em] sm:tracking-[0.45em] mb-3 text-zinc-500 text-[clamp(0.6rem,2.2vw,1.6rem)]">
            {t('hero.greeting')}
          </span>
          <span className="inline-block overflow-hidden">
            <span className="inline-block text-white">
              {showTypewriter && (
                <Typewriter
                  words={[t('hero.name')]}
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
  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
          <div className="h-px w-10 sm:w-20 bg-zinc-700"></div>
          <p className="text-zinc-400 text-[clamp(0.65rem,2vw,0.95rem)] font-mono lowercase tracking-wider">
            {t('hero.subtitle')}
          </p>
          <div className="h-px w-10 sm:w-20 bg-zinc-700"></div>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a href="#projects" className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 overflow-hidden">
            <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-zinc-100 uppercase">
              {t('hero.explore')}
            </span>
            <div className="absolute inset-0 border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300"></div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
          </a>
          <a href="#about" className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 overflow-hidden">
            <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-black uppercase">
              {t('hero.aboutMe')}
            </span>
            <div className="absolute inset-0 bg-zinc-100 group-hover:bg-zinc-200 transition-colors duration-300"></div>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </div>
  )
}

export default Hero
