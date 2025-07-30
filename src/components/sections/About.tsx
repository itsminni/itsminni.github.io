import { useEffect, useRef } from 'react';

const newsData = [
  'Simone Benanchietti',
  'Gabriele Mininni',
  'Elia Apicella',
  'Anita Cappello',
  'Michele Lomartire',
  'Daniele Corn',
  'Martina Pellegrini',
  'Giulio Finocchiaro',
  'Matteo Messori',
  'James Ayres',
];

export default function About() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    let animationId: number;
    let start: number | null = null;
    let left = 0;
    const speed = 50; // px per secondo

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      left -= (speed * (elapsed / 1000));
      if (!ticker) return;
      if (ticker.scrollWidth + left < ticker.offsetWidth) {
        left = 0;
      }
      ticker.style.transform = `translateX(${left}px)`;
      start = timestamp;
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="about-container">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-bold">WHO ARE WE</h1>
      <div className="relative w-full max-w-3xl overflow-x-hidden mt-4 sm:mt-6 md:mt-8">
        <div
          ref={tickerRef}
          className="flex whitespace-nowrap gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-white font-medium py-2"
          style={{ willChange: 'transform' }}
        >
          {newsData.concat(newsData).map((text, idx) => (
            <a href={'/' + text.replace(/\s+/g, '')} key={idx}>
              <span
                className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 border bg-white/10 border-white/15 rounded-full backdrop-blur-sm hover:bg-white/20 cursor-pointer text-xs sm:text-sm md:text-base"
              >
                {text}
              </span>
            </a>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      <style>{`
        .about-container {
          position: relative;
          height: 30vh;
          min-height: 300px;
          width: 100%;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1rem;
          overflow: hidden;
        }
        
        @media (min-width: 640px) {
          .about-container {
            height: 35vh;
            padding: 0 2rem;
          }
        }
        
        @media (min-width: 768px) {
          .about-container {
            height: 40vh;
          }
        }
      `}</style>
    </div>
  );
}
