import watchgen from "../assets/projects/watchgen.png"
import RealtyMind from "../assets/projects/realtymind.png"
import Techvani from "../assets/projects/techvani.png"
import House from "../assets/projects/house.png"
import Sentimen from "../assets/projects/Sentimen.png"
import Employee from "../assets/projects/employee.png"
import Blog from "../assets/projects/blog.png"
import Digit from "../assets/projects/Digit.png"

import { motion } from "framer-motion"

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"

const projects = [

  {
    title: "WatchGen",
    desc: "AI-powered watch recommendation system using Django and Machine Learning.",
    image: watchgen,
    link: "https://github.com/Neerajtiwari07",
  },

  {
    title: "Blog Application",
    desc: "Modern Full Stack blog application built with Django, MySQL and JavaScript.",
    image: Blog,
    link: "https://github.com/Neerajtiwari07/Blog-Post-Project-Django",
  },

  {
    title: "WorkZen",
    desc: "Employee management platform using Django, MySQL and authentication system.",
    image: Employee,
    link: "https://github.com/Neerajtiwari07/EmployeeManagement",
  },

  {
    title: "House Price Prediction",
    desc: "Machine Learning regression model for predicting house prices using Python.",
    image: House,
    link: "https://github.com/Neerajtiwari07",
  },

  {
    title: "RealtyMind",
    desc: "AI-based real estate prediction platform using Machine Learning and Scikit-learn.",
    image: RealtyMind,
    demo: "https://realtymind.onrender.com/home/",
    link: "https://github.com/Neerajtiwari07/PropWorth",
  },

  {
    title: "Digit Recognition System",
    desc: "Deep Learning handwritten digit recognition using TensorFlow and Neural Networks.",
    image: Digit,
    link: "https://github.com/Neerajtiwari07/digit-recognition-system-",
  },

  {
    title: "Sentiment Analysis",
    desc: "NLP-based sentiment analysis system using Python and Machine Learning.",
    image: Sentimen,
    link: "https://github.com/Neerajtiwari07/sentiment-analysis-using-NLP",
  },

  {
    title: "Techvani AI Chatbot",
    desc: "AI chatbot built using NLP, Machine Learning and intelligent response systems.",
    image: Techvani,
    link: "https://github.com/Neerajtiwari07/mentorbot-techvani",
  },

]

function Projects() {

  return (

    <section className="min-h-screen bg-black text-white relative overflow-hidden px-6 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-[130px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-[130px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >

          <h1 className="text-6xl md:text-7xl font-extrabold mb-8">

            My
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              {" "}Projects

            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-10">

            Full Stack, Artificial Intelligence,
            Machine Learning, NLP and Deep Learning
            based real-world projects.

          </p>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              transition={{ duration: 0.5 }}
              className="group bg-white/5 backdrop-blur-lg border border-gray-800 rounded-[30px] overflow-hidden shadow-2xl hover:border-blue-500 transition duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-5 text-blue-400">

                  {project.title}

                </h2>

                {/* Description */}
                <p className="text-gray-300 leading-8 mb-8 text-[16px]">

                  {project.desc}

                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">

                  {/* GitHub */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl transition duration-300 shadow-xl"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  {/* Live Demo */}
                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-2xl transition duration-300"
                    >

                      <FaExternalLinkAlt />

                      Live Demo

                    </a>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Projects