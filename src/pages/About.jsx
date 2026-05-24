import profile from "../assets/profile.jpg"

import { motion } from "framer-motion"

import {
  FaPython,
  FaReact,
} from "react-icons/fa"

import {
  SiDjango,
  SiTensorflow,
  SiMysql,
} from "react-icons/si"

const skills = [

  "Python",
  "Django",
  "React.js",
  "JavaScript",
  "MySQL",
  "REST API",
  "TensorFlow",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Data Science",

]

function About() {

  return (

    <section className="min-h-screen bg-black text-white relative overflow-hidden px-6 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-[140px] rounded-full"></div>

      </div>

      {/* Floating Icons */}
      <FaPython className="absolute top-24 left-10 text-7xl text-blue-500 opacity-10 animate-bounce" />

      <FaReact className="absolute bottom-20 left-32 text-8xl text-cyan-400 opacity-10 animate-spin" />

      <SiDjango className="absolute top-24 right-20 text-7xl text-green-500 opacity-10 animate-pulse" />

      <SiTensorflow className="absolute bottom-24 right-24 text-7xl text-orange-500 opacity-10 animate-bounce" />

      <SiMysql className="absolute top-1/2 left-0 text-7xl text-blue-400 opacity-10 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >

          <h1 className="text-6xl md:text-7xl font-extrabold mb-8">

            About
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              {" "}Me

            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-10">

            Passionate AI/ML Engineer and Python Full Stack Developer
            building intelligent real-world applications using
            modern technologies and Deep Learning.

          </p>

        </motion.div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <motion.img
                src={profile}
                alt="profile"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.5)]"
              />

            </div>

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="text-5xl font-bold mb-8 text-blue-500">

              Who Am I ?

            </h2>

            <p className="text-gray-300 text-lg leading-10 mb-8">

              I am a BCA student passionate about
              Artificial Intelligence,
              Machine Learning,
              Deep Learning,
              Full Stack Development,
              and intelligent software systems.

            </p>

            <p className="text-gray-300 text-lg leading-10 mb-12">

              I enjoy building scalable web applications,
              AI-powered systems,
              Machine Learning models,
              and interactive modern user interfaces
              using Python, Django, React.js and AI technologies.

            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

              {skills.map((skill, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  className="bg-white/5 backdrop-blur-lg border border-gray-800 rounded-2xl px-5 py-4 text-center text-gray-200 shadow-xl hover:border-blue-500 transition duration-300"
                >

                  {skill}

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Premium Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-28">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-900/20 border border-blue-500/20 rounded-3xl p-10 text-center backdrop-blur-lg shadow-2xl"
          >

            <h1 className="text-5xl font-bold text-blue-500 mb-4">
              10+
            </h1>

            <p className="text-gray-300">
              Projects
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/10 to-purple-900/20 border border-purple-500/20 rounded-3xl p-10 text-center backdrop-blur-lg shadow-2xl"
          >

            <h1 className="text-5xl font-bold text-purple-400 mb-4">
              AI
            </h1>

            <p className="text-gray-300">
              ML Focus
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cyan-500/10 to-cyan-900/20 border border-cyan-500/20 rounded-3xl p-10 text-center backdrop-blur-lg shadow-2xl"
          >

            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Full
            </h1>

            <p className="text-gray-300">
              Stack Dev
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-500/10 to-green-900/20 border border-green-500/20 rounded-3xl p-10 text-center backdrop-blur-lg shadow-2xl"
          >

            <h1 className="text-5xl font-bold text-green-400 mb-4">
              100%
            </h1>

            <p className="text-gray-300">
              Passion
            </p>

          </motion.div>

        </div>

        {/* Technical Skills */}
        <div className="mt-32">

          <h2 className="text-5xl font-bold text-center mb-20 text-blue-500">

            Technical Skills

          </h2>

          <div className="space-y-10 max-w-5xl mx-auto">

            {[
              {
                name: "Python",
                percent: "95%",
                color: "from-blue-500 to-cyan-400",
              },

              {
                name: "Django",
                percent: "90%",
                color: "from-green-500 to-green-300",
              },

              {
                name: "React.js",
                percent: "85%",
                color: "from-cyan-500 to-blue-400",
              },

              {
                name: "JavaScript",
                percent: "82%",
                color: "from-yellow-400 to-yellow-200",
              },

              {
                name: "Machine Learning",
                percent: "88%",
                color: "from-pink-500 to-purple-400",
              },

              {
                name: "Deep Learning",
                percent: "80%",
                color: "from-red-500 to-orange-400",
              },

              {
                name: "TensorFlow",
                percent: "78%",
                color: "from-orange-500 to-yellow-300",
              },

              {
                name: "NLP",
                percent: "75%",
                color: "from-indigo-500 to-purple-400",
              },

              {
                name: "MySQL",
                percent: "84%",
                color: "from-blue-400 to-blue-200",
              },

              {
                name: "REST API",
                percent: "86%",
                color: "from-teal-400 to-cyan-300",
              },

            ].map((skill, index) => (

              <div key={index}>

                <div className="flex justify-between mb-3">

                  <span className="text-lg">
                    {skill.name}
                  </span>

                  <span>
                    {skill.percent}
                  </span>

                </div>

                <div className="w-full bg-gray-800 rounded-full h-5">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    transition={{ duration: 1 }}
                    className={`bg-gradient-to-r ${skill.color} h-5 rounded-full`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default About