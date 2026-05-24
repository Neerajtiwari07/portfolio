import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa"

import { useState } from "react"

function Navbar({ setSection }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-lg border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-white leading-8">

          Neeraj
          <br />

          <span className="text-blue-500">
            Tiwari
          </span>

        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium text-white">

          <button
            onClick={() => setSection("home")}
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaHome />
            Home
          </button>

          <button
            onClick={() => setSection("about")}
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaUser />
            About
          </button>

          <button
            onClick={() => setSection("projects")}
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaProjectDiagram />
            Projects
          </button>

          <button
            onClick={() => setSection("certificates")}
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaCertificate />
            Certificates
          </button>

          <button
            onClick={() => setSection("contact")}
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaEnvelope />
            Contact
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-6 text-white text-lg font-medium">

          <button
            onClick={() => {
              setSection("home")
              setMenuOpen(false)
            }}
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaHome />
            Home
          </button>

          <button
            onClick={() => {
              setSection("about")
              setMenuOpen(false)
            }}
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaUser />
            About
          </button>

          <button
            onClick={() => {
              setSection("projects")
              setMenuOpen(false)
            }}
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaProjectDiagram />
            Projects
          </button>

          <button
            onClick={() => {
              setSection("certificates")
              setMenuOpen(false)
            }}
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaCertificate />
            Certificates
          </button>

          <button
            onClick={() => {
              setSection("contact")
              setMenuOpen(false)
            }}
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaEnvelope />
            Contact
          </button>

        </div>

      )}

    </nav>

  )
}

export default Navbar