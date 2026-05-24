import { useRef } from "react"

import emailjs from "@emailjs/browser"

import { motion } from "framer-motion"

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram
} from "react-icons/fa"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      "service_r1c5bsp",
      "template_id6456o",
      form.current,
      "owbrH8QMAOGP6RrnZ"
    )

    .then(() => {

      alert("Message Sent Successfully 🚀")

      form.current.reset()

    })

    .catch(() => {

      alert("Something went wrong ❌")

    })

  }

  return (

    <section className="min-h-screen bg-black text-white relative overflow-hidden px-6 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-[140px] rounded-full"></div>

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

            Contact
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              {" "}Me

            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-10">

            Let’s connect and build something amazing together 🚀

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >

            <div>

              <h2 className="text-4xl font-bold mb-8 text-blue-500">

                Get In Touch

              </h2>

              <p className="text-gray-400 leading-9 text-lg">

                I’m always open to discussing
                AI projects, Full Stack Development,
                Machine Learning ideas,
                internships, and collaboration opportunities.

              </p>

            </div>

            {/* Contact Cards */}

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-gray-800 rounded-3xl p-6 flex items-center gap-5 shadow-xl hover:border-blue-500 transition"
            >

              <div className="bg-blue-500 p-4 rounded-2xl text-2xl">

                <FaEnvelope />

              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">

                  Email

                </h3>

                <p className="text-gray-400">

                  neerajtiwari202082@gmail.com

                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-gray-800 rounded-3xl p-6 flex items-center gap-5 shadow-xl hover:border-green-500 transition"
            >

              <div className="bg-green-500 p-4 rounded-2xl text-2xl">

                <FaPhoneAlt />

              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">

                  Phone

                </h3>

                <p className="text-gray-400">

                  +91 7388033391

                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-gray-800 rounded-3xl p-6 flex items-center gap-5 shadow-xl hover:border-purple-500 transition"
            >

              <div className="bg-purple-500 p-4 rounded-2xl text-2xl">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">

                  Location

                </h3>

                <p className="text-gray-400">

                  Lucknow, Uttar Pradesh, India

                </p>

              </div>

            </motion.div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4">

              <a
                href="https://github.com/Neerajtiwari07"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-blue-500 p-5 rounded-2xl text-3xl transition duration-300 shadow-xl"
              >

                <FaGithub />

              </a>

              <a
                href="https://www.linkedin.com/in/neeraj-tiwari202082"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-blue-500 p-5 rounded-2xl text-3xl transition duration-300 shadow-xl"
              >

                <FaLinkedin />

              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-pink-500 p-5 rounded-2xl text-3xl transition duration-300 shadow-xl"
              >

                <FaInstagram />

              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 backdrop-blur-lg border border-gray-800 rounded-[35px] p-10 shadow-2xl space-y-8"
          >

            <h2 className="text-4xl font-bold text-blue-500 mb-6">

              Send Message

            </h2>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-black/40 border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-black/40 border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 transition"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="6"
              required
              className="w-full bg-black/40 border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500 transition"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 py-5 rounded-2xl text-xl font-semibold transition duration-300 shadow-2xl"
            >

              <FaPaperPlane />

              Send Message

            </button>

          </motion.form>

        </div>

      </div>

    </section>

  )
}

export default Contact