import { motion } from "framer-motion"

const certificates = [

  {
    title: "Python Full Stack Development",
    platform: "Udemy",
    year: "2025",
  },

  {
    title: "Machine Learning Certification",
    platform: "Coursera",
    year: "2025",
  },

  {
    title: "Deep Learning & Neural Networks",
    platform: "Udemy",
    year: "2025",
  },

  {
    title: "Data Science with Python",
    platform: "Coursera",
    year: "2024",
  },

  {
    title: "AI & NLP Workshop",
    platform: "Tech Event",
    year: "2024",
  },

  {
    title: "React.js Frontend Development",
    platform: "Udemy",
    year: "2024",
  },

]

function Certificates() {

  return (

    <section className="min-h-screen bg-black text-white px-6 pt-28 pb-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-7xl font-black mb-6 leading-tight"
          >

            Certificates
            <span className="text-blue-500">
              {" "} & Achievements
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-9"
          >

            My certifications, achievements, and continuous learning journey
            in Full Stack Development, AI, Machine Learning, and modern technologies.

          </motion.p>

        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(59,130,246,0.4)"
              }}
              className="bg-gradient-to-br from-gray-900 to-[#0b1220] border border-gray-800 rounded-3xl p-10 hover:border-blue-500 transition duration-300"
            >

              {/* Icon */}
              <div className="text-6xl mb-6">

                🏆

              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-6 text-blue-500 leading-tight">

                {item.title}

              </h2>

              {/* Platform */}
              <p className="text-gray-300 text-xl mb-4">

                {item.platform}

              </p>

              {/* Year */}
              <p className="text-gray-500 text-lg">

                {item.year}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Bottom Achievement Section */}
        <div className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[40px] p-14 text-center shadow-2xl"
          >

            <h2 className="text-4xl md:text-6xl font-black mb-8">

              🚀 Never Stop Learning

            </h2>

            <p className="text-lg md:text-2xl text-white leading-10 max-w-4xl mx-auto">

              Continuously improving my skills in Artificial Intelligence,
              Full Stack Development, Deep Learning, NLP, Cloud Computing,
              and scalable modern web applications.

            </p>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default Certificates