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

      // Add a brief hide/show effect during transformation
      if (scrollY > 95 && scrollY < 105) {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const collaborators = [
    "Simone Benanchietti",
    "Gabriele Mininni",
    "Elia Apicella",
    "Anita Cappello",
    "Michele Lomartire",
    "Daniele Corn",
    "Martina Pellegrini",
    "Giulio Finocchiaro",
    "Matteo Messori",
    "James Ayres",
  ];

  return (
    <>
      {/* Horizontal Navbar - Hidden on mobile */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 py-5 bg-black/90 backdrop-blur-sm border-b border-zinc-800 z-50 transition-all duration-500 hidden md:flex ${isScrolled
          ? "translate-y-[-100%] opacity-0"
          : "translate-y-0 opacity-100"
          }`}
      >
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

        <ul className="flex gap-6 lg:gap-10 items-center">
          <li>
            <a
              href="#hero"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
            >
              About
            </a>
          </li>
          <li className="relative group">
            <button className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase flex items-center gap-2">
              Team
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 bg-zinc-900 border border-zinc-800 rounded shadow-lg py-2 w-48 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50">
              {collaborators.map((name, idx) => (
                <a
                  key={idx}
                  href={"/" + name.replace(/\s+/g, "")}
                  className="block px-4 py-2 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 text-sm transition-colors duration-150"
                >
                  {name}
                </a>
              ))}
            </div>
          </li>
          <li>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-5 bg-black/90 backdrop-blur-sm border-b border-zinc-800 z-50 md:hidden">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 flex items-center relative">
            <svg
              id="Totale"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 582.97 497.03"
              className="fill-zinc-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300"
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

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <ul className="flex flex-col gap-8 items-center">
            <li>
              <a
                href="#hero"
                className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-lg font-medium tracking-wide uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-lg font-medium tracking-wide uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-lg font-medium tracking-wide uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-lg font-medium tracking-wide uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Team dropdown for mobile */}
          <div className="text-center">
            <h3 className="text-zinc-400 text-lg font-medium tracking-wide uppercase mb-4">
              Team
            </h3>
            <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
              {collaborators.map((name, idx) => (
                <a
                  key={idx}
                  href={"/" + name.replace(/\s+/g, "")}
                  className="block px-3 py-2 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 text-sm transition-colors duration-150 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hover area for sidebar trigger - Extended width for better UX */}
      <div
        className="fixed left-0 top-0 h-full w-16 z-20 hidden lg:block"
        onMouseEnter={() => setIsSidebarVisible(true)}
        onMouseLeave={() => setIsSidebarVisible(false)}
      />

      {/* Simple visual hint for sidebar - appears only when sidebar is hidden */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 hidden lg:block ${isScrolled && !isSidebarVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="w-10 h-16  shadow-lg flex items-center justify-start pl-2  border-r border-b border-t border-white/30 rounded-r-full">
          <svg
            className="w-4 h-4 rotate-90 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Vertical Sidebar - Fixed functionality */}
      <nav
        className={`fixed left-0 top-0 h-full w-16 lg:w-20 bg-black/95 backdrop-blur-sm border-r border-zinc-800 z-30 transition-all duration-300 hidden lg:block ${isScrolled && isVisible && isSidebarVisible
            ? "translate-x-0"
            : "-translate-x-full"
          }`}
        onMouseEnter={() => setIsSidebarVisible(true)}
        onMouseLeave={() => setIsSidebarVisible(false)}
      >
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
            <li className="group/item relative">
              <a
                href="#hero"
                className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200"
              >
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Home
                </span>
              </a>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                Home
              </div>
            </li>
            <li className="group/item relative">
              <a
                href="#about"
                className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200"
              >
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  About
                </span>
              </a>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                About
              </div>
            </li>

            <li className="group/item relative">
              <a
                href="#contact"
                className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200"
              >
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Contact
                </span>
              </a>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                Contact
              </div>
            </li>

            <li className="group/item relative mt-4">
              <a
                href="#projects"
                className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200"
              >
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Projects
                </span>
              </a>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                Projects
              </div>
            </li>
            <li className="group/item relative mt-auto">
              <button className="flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Team
                </span>
              </button>
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-zinc-100 text-xs rounded opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                Team
              </div>
              <div className="absolute left-full ml-2 bottom-0 bg-zinc-900 border border-zinc-800 rounded shadow-lg py-2 w-56 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 z-50 pointer-events-auto">
                {collaborators.map((name, idx) => (
                  <a
                    key={idx}
                    href={"/" + name.replace(/\s+/g, "")}
                    className="block px-4 py-2 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 text-xs transition-colors duration-150"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <style>{`
    body {
      scroll-behavior: smooth;
    }
  `}</style>
    </>
  );
}

export default Navbar;