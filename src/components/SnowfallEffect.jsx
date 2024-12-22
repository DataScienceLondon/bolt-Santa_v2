import { motion } from 'framer-motion'

export default function SnowfallEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          animate={{
            y: ['0vh', '100vh'],
            x: [
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`
            ],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}
