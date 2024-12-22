import { motion } from 'framer-motion'

export default function Navigation() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Santa's Workshop</a>
        <button
          onClick={scrollToContact}
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
        >
          Contact Santa
        </button>
      </div>
    </motion.nav>
  )
}
