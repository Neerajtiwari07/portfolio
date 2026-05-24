import { motion } from "framer-motion"

const certificates = [

  {
    title: "Python Full Stack Development",
    issuer: "Udemy",
    year: "2025",
  },

  {
    title: "Machine Learning Certification",
    issuer: "Coursera",
    year: "2025",
  },

  {
    title: "Deep Learning & Neural Networks",
    issuer: "Udemy",
    year: "2025",
  },

  {
    title: "Data Science with Python",
    issuer: "Great Learning",
    year: "2024",
  },

  {
    title: "AI & NLP Workshop",
    issuer: "TechVani",
    year: "2025",
  },

]

function Certificates() {

  return (

    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Certificates &
            <span className="text-blue-500">
              {" "}Achievements
            </span>

          </h1>

          <p className="text-gray-400 text-lg">

            My certifications, achievements,
            and learning journey.

          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 shadow-xl"
            >

              <div className="text-5xl mb-6">
                🏆
              </div>

              <h2 className="text-2xl font-bold text-blue-500 mb-4">
                {item.title}
              </h2>

              <p className="text-gray-300 text-lg mb-3">
                {item.issuer}
              </p>

              <span className="text-gray-500">
                {item.year}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Certificates