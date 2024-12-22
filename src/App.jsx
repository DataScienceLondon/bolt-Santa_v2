import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import SnowfallEffect from './components/SnowfallEffect'

function App() {
  const [heroContent, setHeroContent] = useState({
    headline: 'Welcome to Santa\'s Workshop',
    subtext: 'Where Christmas Magic Comes to Life',
    imageUrl: '/santa.webp'
  })

  return (
    <div className="relative">
      <Navigation />
      <SnowfallEffect />
      <Hero content={heroContent} />
      <Story />
      <Contact />
    </div>
  )
}

export default App
