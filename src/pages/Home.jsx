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
  SiMysql,
} from "react-icons/si"

function Home() {

  return (

    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 opacity-20 blur-[150px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 opacity-20 blur-[150px] rounded-full animate-pulse"></div>

      </div>

      {/* Floating Icons */}
      <FaPython className="absolute top-32 left-20 text-7xl text-blue-500 opacity-20 animate-bounce" />

      <FaReact className="absolute bottom-32 left-40 text-8xl text-cyan-400 opacity-20 animate-spin" />

      <SiDjango className="absolute top-32 right-24 text-7xl text-green-500 opacity-20 animate-pulse" />

      <SiTensorflow className="absolute bottom-24 right-32 text-7xl text-orange-500 opacity-20 animate-bounce" />

      <SiMysql className="absolute top-1/2 left-10 text-7xl text-blue-400 opacity-20 animate-pulse" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Small Intro */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[8px] text-blue-400 text-sm mb-6"
        >

          Welcome To My Portfolio

        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight mb-8"
        >

          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

            Neeraj Tiwari

          </span>

          <span className="inline-block ml-4 animate-bounce">

            🚀

          </span>

        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >

          <TypeAnimation
            sequence={[

              "AI/ML Engineer 🚀",
              2000,

              "Python Full Stack Developer 💻",
              2000,

              "Deep Learning Enthusiast 🤖",
              2000,

              "React & Django Developer ⚡",
              2000,

            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          />

        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-4xl mx-auto text-gray-400 text-lg md:text-2xl leading-10 mb-16"
        >

          Passionate about building intelligent AI-powered
          applications using Python, Django, React.js,
          Machine Learning and Deep Learning technologies.

        </motion.p>

        {/* Premium Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/5 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-blue-500 transition"
          >

            <h1 className="text-5xl font-bold text-blue-500 mb-4">
              10+
            </h1>

            <p className="text-gray-300 text-lg">
              Projects Completed
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/5 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-purple-500 transition"
          >

            <h1 className="text-5xl font-bold text-purple-400 mb-4">
              AI
            </h1>

            <p className="text-gray-300 text-lg">
              Machine Learning Focus
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/5 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-cyan-500 transition"
          >

            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Full
            </h1>

            <p className="text-gray-300 text-lg">
              Stack Development
            </p>

          </motion.div>

        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">

          <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl hover:border-blue-500 transition">
            Python
          </div>

          <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl hover:border-blue-500 transition">
            Django
          </div>

          <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl hover:border-blue-500 transition">
            React.js
          </div>

          <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl hover:border-blue-500 transition">
            Machine Learning
          </div>

          <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl hover:border-blue-500 transition">
            Deep Learning
          </div>

          <div className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl hover:border-blue-500 transition">
            TensorFlow
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/Neerajtiwari07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-blue-500 p-5 rounded-2xl text-3xl transition duration-300 shadow-xl"
          >

            <FaGithub />

          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-blue-500 p-5 rounded-2xl text-3xl transition duration-300 shadow-xl"
          >

            <FaLinkedin />

          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-pink-500 p-5 rounded-2xl text-3xl transition duration-300 shadow-xl"
          >

            <FaInstagram />

          </a>

        </div>

      </div>

    </section>

  )
}

export default Home