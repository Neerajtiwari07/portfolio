import { useState } from "react"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Certificates from "./pages/Certificates"
import Footer from "./pages/Footer"

function App() {

  const [section, setSection] = useState("home")

  return (
    <div>

      <Navbar setSection={setSection} />

      {section === "home" && <Home />}

      {section === "about" && <About />}

      {section === "projects" && <Projects />}
       

      {section === "contact" && <Contact />}

      {section === "certificates" && <Certificates />}

       <Footer setSection={setSection} />
      

    </div>
  )
}

export default App