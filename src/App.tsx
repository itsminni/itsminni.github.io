import EntryAnimation from "./components/layout/EntryAnimation";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [entryDone, setEntryDone] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('entryPlayed') === '1';
  });

  // Safeguard for hydration (in case of SSR or future SSR adoption)
  useEffect(() => {
    if (sessionStorage.getItem('entryPlayed') === '1' && !entryDone) {
      setEntryDone(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black min-h-screen relative">
              {!entryDone && (
                <EntryAnimation onFinish={() => {
                  sessionStorage.setItem('entryPlayed', '1');
                  setEntryDone(true);
                }} />
              )}
              {entryDone && (
                <>
                  <Navbar />
                  <section id="hero"><Hero typewriterDelay={entryDone ? 0 : 2000} /></section>
                  <section id="about"><About /></section>
                  <section id="projects"><Projects /></section>
                  <section id="contact"><Contact /></section>
                </>
              )}
            </div>
          }
        />
        <Route path="/project/:id" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
