import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Footer({ setSection }) {

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  }

  return (

    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black border-t border-gray-800 text-white overflow-hidden">

      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* BRAND */}
          <div>

            <h1 className="text-4xl font-extrabold mb-6">

              Neeraj
              <span className="text-blue-500">
                {" "}Tiwari
              </span>

            </h1>

            <p className="text-gray-400 leading-8 text-lg">

              Passionate Full Stack Developer focused on
              Artificial Intelligence, Machine Learning,
              Deep Learning, and modern web technologies.

            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-8">

              {/* GitHub */}
              <a
                href="https://github.com/Neerajtiwari07"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-blue-500 hover:scale-110 transition duration-300 p-4 rounded-2xl text-2xl shadow-lg"
              >

                <FaGithub />

              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/neeraj-tiwari202082/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-blue-500 hover:scale-110 transition duration-300 p-4 rounded-2xl text-2xl shadow-lg"
              >

                <FaLinkedin />

              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-pink-500 hover:scale-110 transition duration-300 p-4 rounded-2xl text-2xl shadow-lg"
              >

                <FaInstagram />

              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-bold mb-8 text-blue-500">

              Quick Links

            </h2>

            <div className="flex flex-col gap-5 text-gray-300 text-lg">

  <button
    type="button"
    onClick={() => setSection("home")}
    className="hover:text-blue-400 transition duration-300 text-left bg-transparent"
  >
    Home
  </button>

  <button
    type="button"
    onClick={() => setSection("about")}
    className="hover:text-blue-400 transition duration-300 text-left bg-transparent"
  >
    About
  </button>

  <button
    type="button"
    onClick={() => setSection("projects")}
    className="hover:text-blue-400 transition duration-300 text-left bg-transparent"
  >
    Projects
  </button>

  <button
    type="button"
    onClick={() => setSection("certificates")}
    className="hover:text-blue-400 transition duration-300 text-left bg-transparent"
  >
    Certificates
  </button>

  <button
    type="button"
    onClick={() => setSection("contact")}
    className="hover:text-blue-400 transition duration-300 text-left bg-transparent"
  >
    Contact
  </button>

</div>
          </div>

          {/* SERVICES */}
          <div>

            <h2 className="text-2xl font-bold mb-8 text-blue-500">

              Services

            </h2>

            <div className="flex flex-col gap-5 text-gray-300 text-lg">

              <p className="hover:text-blue-400 transition">
                Full Stack Development
              </p>

              <p className="hover:text-blue-400 transition">
                AI/ML Projects
              </p>

              <p className="hover:text-blue-400 transition">
                Deep Learning
              </p>

              <p className="hover:text-blue-400 transition">
                Django Development
              </p>

              <p className="hover:text-blue-400 transition">
                React.js Websites
              </p>

            </div>

          </div>

          {/* CONTACT INFO */}
          <div>

            <h2 className="text-2xl font-bold mb-8 text-blue-500">

              Contact Info

            </h2>

            <div className="space-y-6 text-gray-300">

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="bg-blue-500 p-3 rounded-xl text-white">

                  <FaEnvelope />

                </div>

                <p className="text-lg">
                  neerajtiwari202082@gmail.com
                </p>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="bg-green-500 p-3 rounded-xl text-white">

                  <FaPhoneAlt />

                </div>

                <p className="text-lg">
                  +91 7388033391
                </p>

              </div>

              {/* Location */}
              <div className="flex items-center gap-4">

                <div className="bg-red-500 p-3 rounded-xl text-white">

                  <FaMapMarkerAlt />

                </div>

                <p className="text-lg">
                  Lucknow, Uttar Pradesh, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* COPYRIGHT */}
            <div>

              <p className="text-gray-400 flex items-center gap-2 text-lg">

                Made with
                <FaHeart className="text-red-500 animate-pulse" />
                by

                <span className="text-blue-400 font-semibold">

                  Neeraj Tiwari

                </span>

              </p>

              <p className="text-gray-500 mt-2">

                © 2026 All Rights Reserved.

              </p>

            </div>

            {/* BACK TO TOP */}
            <button
              onClick={scrollToTop}
              className="bg-blue-500 hover:bg-blue-600 hover:scale-110 transition duration-300 p-4 rounded-2xl shadow-2xl"
            >

              <FaArrowUp className="text-xl" />

            </button>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer