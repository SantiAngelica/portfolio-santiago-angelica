import Navbar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import TechStack from "./components/TechStack/TechStack"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { LanguageProvider } from "./context/LanguajeContext"
import "./App.css"

function App() {
  return (
    <>
      <LanguageProvider>

        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
