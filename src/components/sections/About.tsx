import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase mb-6 sm:mb-8 font-bold text-white">
          {t('about.title')}
        </h2>

        <div className="space-y-6">
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed font-light">
            {t('about.bio')}
          </p>

          <div className="flex flex-wrap gap-3 mt-6 items-center">
            <span className="px-4 py-2 border bg-white/5 border-white/15 rounded-full text-sm text-zinc-300">
              📍 {t('about.location')}
            </span>

            <span className="px-4 py-2 border bg-white/5 border-white/15 rounded-full text-sm text-zinc-300 flex items-center gap-2">
              <a href="https://github.com/itsminni" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-200 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </span>

            <span className="px-4 py-2 border bg-white/5 border-white/15 rounded-full text-sm text-zinc-300">
              🎮 {t('about.nickname')}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          position: relative;
          min-height: 50vh;
          width: 100%;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: left;
          padding: 4rem 1rem;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .about-container { padding: 5rem 2rem; }
        }
        @media (min-width: 768px) {
          .about-container { padding: 6rem 2rem; }
        }
      `}</style>
    </div>
  );
}
