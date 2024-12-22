import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const reindeerProfiles = [
  { name: 'Dasher', speed: '100 mph', specialty: 'Sprint Expert' },
  { name: 'Dancer', speed: '95 mph', specialty: 'Aerial Acrobatics' },
  { name: 'Prancer', speed: '98 mph', specialty: 'Navigation' },
  { name: 'Rudolph', speed: '105 mph', specialty: 'Night Vision' }
]

export default function Story() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('story-section')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="story-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-primary">
            Santa's Workshop
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                The Magic Behind Christmas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Deep in the North Pole, Santa's workshop is a marvel of holiday magic 
                and efficiency. Our dedicated team of elves works year-round to ensure 
                every child's Christmas wish comes true.
              </p>
            </div>
            <motion.img
              src="/workshop.webp"
              alt="Santa's Workshop"
              className="rounded-lg shadow-xl w-full h-auto"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            />
          </div>

          <h3 className="text-2xl font-bold text-center text-secondary mb-8">
            Meet the Reindeer Team
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reindeerProfiles.map((reindeer, index) => (
              <motion.div
                key={reindeer.name}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-primary mb-2">
                  {reindeer.name}
                </h4>
                <p className="text-gray-600 mb-2">Speed: {reindeer.speed}</p>
                <p className="text-gray-600">
                  Specialty: {reindeer.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
