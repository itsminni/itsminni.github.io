import EntryAnimation from "./components/layout/EntryAnimation"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="bg-black">
            <EntryAnimation />
            <Navbar/>
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
          </div>
        } />
        <Route path="/project/:id" element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
