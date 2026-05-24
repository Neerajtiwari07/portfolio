import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPython,
  FaReact,
} from "react-icons/fa"

import {
  SiDjango,
  SiTensorflow,
  SiMongodb,
} from "react-icons/si"

function Home() {

  return (

    <section className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* HERO SECTION */}
        <div className="text-center">

          {/* Main Heading */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              Neeraj Tiwari

            </h1>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-6xl md:text-7xl"
            >

              🚀

            </motion.div>

          </div>

          {/* Typing Animation */}
          <div className="text-2xl md:text-5xl font-bold mb-10 text-blue-400 min-h-[80px]">

            <TypeAnimation
              sequence={[
                "Python Full Stack Developer",
                2000,
                "AI/ML Engineer",
                2000,
                "Deep Learning Enthusiast",
                2000,
                "React & Django Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-300 text-lg md:text-2xl leading-10 max-w-4xl mx-auto mb-14"
          >

            Passionate about building intelligent AI-powered applications
            using Python, Django, React.js, Machine Learning and Deep Learning technologies.

          </motion.p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 flex-wrap mb-16">

            <a
              href="https://github.com/Neerajtiwari07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-blue-500 p-5 rounded-2xl text-3xl transition duration-300 hover:scale-110"
            >

              <FaGithub />

            </a>

            <a
              href="https://www.linkedin.com/in/neeraj-tiwari202082/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-blue-500 p-5 rounded-2xl text-3xl transition duration-300 hover:scale-110"
            >

              <FaLinkedin />

            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-pink-500 p-5 rounded-2xl text-3xl transition duration-300 hover:scale-110"
            >

              <FaInstagram />

            </a>

          </div>

        </div>

        {/* STATS SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-10 text-center shadow-2xl"
          >

            <h2 className="text-6xl font-black text-blue-500 mb-5">

              10+

            </h2>

            <p className="text-gray-300 text-2xl">

              Projects Completed

            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-10 text-center shadow-2xl"
          >

            <h2 className="text-6xl font-black text-purple-500 mb-5">

              AI

            </h2>

            <p className="text-gray-300 text-2xl">

              ML & Deep Learning

            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-10 text-center shadow-2xl"
          >

            <h2 className="text-6xl font-black text-cyan-400 mb-5">

              Full Stack

            </h2>

            <p className="text-gray-300 text-2xl">

              Django + React.js

            </p>

          </motion.div>

        </div>

        {/* TECH STACK */}
        <div className="mt-28">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">

            Tech
            <span className="text-blue-500">
              {" "}Stack
            </span>

          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center"
            >

              <FaPython className="text-6xl text-yellow-400 mx-auto mb-4" />

              <p className="text-xl font-semibold">
                Python
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center"
            >

              <SiDjango className="text-6xl text-green-500 mx-auto mb-4" />

              <p className="text-xl font-semibold">
                Django
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center"
            >

              <FaReact className="text-6xl text-cyan-400 mx-auto mb-4" />

              <p className="text-xl font-semibold">
                React.js
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center"
            >

              <SiTensorflow className="text-6xl text-orange-500 mx-auto mb-4" />

              <p className="text-xl font-semibold">
                TensorFlow
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center"
            >

              <SiMongodb className="text-6xl text-green-400 mx-auto mb-4" />

              <p className="text-xl font-semibold">
                MongoDB
              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Home