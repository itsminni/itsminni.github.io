import EntryAnimation from "./components/layout/EntryAnimation"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import Placeholder from "./components/layout/Placeholder"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
function App() {

  return (
    
    <div>
      <EntryAnimation />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
