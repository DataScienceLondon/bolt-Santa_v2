import { motion } from 'framer-motion'

export default function Hero({ content }) {
  return (
    <section className="min-h-screen relative flex items-center justify-center" aria-label="Welcome Section">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-4"
        >
          {content.headline}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary mb-8"
        >
          {content.subtext}
        </motion.p>
        <motion.img
          src={content.imageUrl}
          alt="Santa Claus"
          className="mx-auto rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        />
      </div>
    </section>
  )
}
