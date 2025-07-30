import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      
      // Add a brief hide/show effect during transformation
      if (scrollY > 95 && scrollY < 105) {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Horizontal Navbar */}
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-10 py-5 bg-black/90 backdrop-blur-sm border-b border-zinc-800 z-50 transition-all duration-500 ${
        isScrolled ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 flex items-center relative">
            <svg
              id="Totale"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 582.97 497.03"
              className="fill-zinc-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <path
                id="Sinistra"
                d="M5.81,71.13h151l169,294-77.5,127L5.81,71.13Z"
              />
              <polygon
                id="Destra"
                points="272.81 272.92 325.81 365.13 425.81 219.61 458.81 258.61 522.81 258.61 459.81 170.61 576.81 6.61 453.81 5.61 398.05 87.95 365.81 47.11 304.81 47.11 366.69 134.4 272.81 272.92"
              />
            </svg>
          </span>
        </div>
        
        <ul className="flex gap-10 items-center">
          <li>
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
              Contact
            </a>
          </li>
          <li>
            <button className="ml-4 px-4 py-2 text-sm font-medium text-zinc-100 border border-zinc-700 hover:border-zinc-500 rounded-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Get Started
            </button>
          </li>
        </ul>
      </nav>

      {/* Vertical Sidebar */}
      <nav className={`fixed left-0 top-0 h-full w-20 bg-black/95 backdrop-blur-sm border-r border-zinc-800 z-50 transition-all duration-700 ${
        isScrolled && isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col items-center h-full py-8">
          {/* Logo */}
          <div className="mb-12">
            <span className="w-10 h-10 flex items-center relative group cursor-pointer">
              <svg
                id="Totale"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 582.97 497.03"
                className="fill-zinc-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:scale-110"
              >
                <path
                  id="Sinistra"
                  d="M5.81,71.13h151l169,294-77.5,127L5.81,71.13Z"
                />
                <polygon
                  id="Destra"
                  points="272.81 272.92 325.81 365.13 425.81 219.61 458.81 258.61 522.81 258.61 459.81 170.61 576.81 6.61 453.81 5.61 398.05 87.95 365.81 47.11 304.81 47.11 366.69 134.4 272.81 272.92"
                />
              </svg>
            </span>
          </div>

          {/* Navigation Items */}
          <ul className="flex flex-col gap-8 flex-1">
            <li className="group relative">
              <a href="#" className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                <span className="text-xs font-bold tracking-wider uppercase -rotate-90 whitespace-nowrap">Home</span>
              </a>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                Home
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                <span className="text-xs font-bold tracking-wider uppercase -rotate-90 whitespace-nowrap">About</span>
              </a>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                About
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                <span className="text-xs font-bold tracking-wider uppercase -rotate-90 whitespace-nowrap">Contact</span>
              </a>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                Contact
              </div>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-auto">
            <button className="group relative w-12 h-12 border border-zinc-700 hover:border-zinc-500 rounded-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <span className="text-zinc-100 text-lg">→</span>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                Get Started
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;