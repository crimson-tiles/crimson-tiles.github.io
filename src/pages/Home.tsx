import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Meetups from '../components/Meetups'
import Schedule from '../components/Schedule'
import FirstTime from '../components/FirstTime'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'Crimson Tiles | Riichi Mahjong at UA'
    const target = (location.state as { scroll?: string } | null)?.scroll
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.key, location.state])

  return (
    <main id="main-content">
      <Hero />
      <About />
      <Meetups />
      <Schedule />
      <FirstTime />
    </main>
  )
}
