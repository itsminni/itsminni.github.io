import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      if (scrollY > 95 && scrollY < 105) {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = ({ size = "w-9 h-9" }: { size?: string }) => (
    <span className={`${size} flex items-center justify-center text-zinc-100 font-black text-lg tracking-tight select-none`}>
      M
    </span>
  );

  return (
    <>
      {/* Horizontal Navbar - Hidden on mobile */}
      <nav
        className={`fixed top-0 left-0 w-full hidden md:flex items-center justify-between px-4 md:px-10 py-5 bg-black/90 backdrop-blur-sm border-b border-zinc-800 z-50 transition-all duration-500 ${
          isScrolled ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <ul className="flex gap-6 lg:gap-10 items-center select-none">
          <li>
            <a href="#hero" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center px-4 justify-between py-5 bg-black/90 backdrop-blur-sm border-b border-zinc-800 z-50 md:hidden">
        <div className="flex items-center gap-3">
          <Logo size="w-8 h-8" />
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
        >
          <span className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <ul className="flex flex-col gap-8 items-center">
            <li>
              <a href="#hero" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-lg font-medium tracking-wide uppercase" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-lg font-medium tracking-wide uppercase" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-lg font-medium tracking-wide uppercase" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hover area for sidebar trigger */}
      <div
        className="fixed left-0 top-0 h-full w-16 z-20 hidden lg:block"
        onMouseEnter={() => setIsSidebarVisible(true)}
        onMouseLeave={() => setIsSidebarVisible(false)}
      />

      {/* Visual hint for sidebar */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 hidden lg:block ${
          isScrolled && !isSidebarVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-10 h-16 shadow-lg flex items-center justify-start pl-2 border-r border-b border-t border-white/30 rounded-r-full">
          <svg className="w-4 h-4 rotate-90 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Vertical Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full w-16 lg:w-20 bg-black/95 backdrop-blur-sm border-r border-zinc-800 z-30 transition-all duration-300 hidden lg:block ${
          isScrolled && isVisible && isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseEnter={() => setIsSidebarVisible(true)}
        onMouseLeave={() => setIsSidebarVisible(false)}
      >
        <div className="flex flex-col items-center h-full py-8">
          <div className="mb-12">
            <span className="w-10 h-10 flex items-center justify-center text-zinc-100 font-black text-xl group cursor-pointer hover:scale-110 transition-transform duration-300">
              M
            </span>
          </div>

          <ul className="flex flex-col gap-8 flex-1">
            {[
              { href: "#hero", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
            ].map(({ href, label }) => (
              <li key={href} className="group/item relative">
                <a href={href} className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {label}
                  </span>
                </a>
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style>{`
        body { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}

export default Navbar;
