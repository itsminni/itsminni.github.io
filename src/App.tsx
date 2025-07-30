import EntryAnimation from "./components/layout/EntryAnimation"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
function App() {

  return (
    
    <div className="bg-black">
      <EntryAnimation />
      <Navbar/>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default App
