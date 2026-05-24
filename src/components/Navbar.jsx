import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCertificate } from "react-icons/fa"

function Navbar({ setSection }) {

  return (

    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg border-b border-gray-800 px-8 py-5 z-50 shadow-2xl">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">

          <span className="text-white">
            Neeraj
          </span>

          <span className="text-blue-500">
            {" "}Tiwari
          </span>

        </h1>

        {/* Menu */}
        <div className="flex items-center gap-8 text-white text-lg font-medium">

          {/* Home */}
          <button
            onClick={() => setSection("home")}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >

            <FaHome />

            Home

          </button>

          {/* About */}
          <button
            onClick={() => setSection("about")}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >

            <FaUser />

            About

          </button>

          {/* Projects */}
          <button
            onClick={() => setSection("projects")}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >

            <FaProjectDiagram />

            Projects

          </button>

          {/* Certificates */}
          <button
            onClick={() => setSection("certificates")}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >

            <FaCertificate />

            Certificates

          </button>
           

          {/* Contact */}
          <button
            onClick={() => setSection("contact")}
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >

            <FaEnvelope />

            Contact

          </button>
           

        </div>

      </div>

    </nav>

  )
}

export default Navbar