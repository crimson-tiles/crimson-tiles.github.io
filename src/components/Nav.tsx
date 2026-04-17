import { useState } from 'react'
import { TRACKER_URL } from '../config'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-brand">Crimson Tiles</a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#schedule" onClick={() => setOpen(false)}>Schedule</a></li>
          <li><a href="#learn" onClick={() => setOpen(false)}>Learn</a></li>
          <li><a href={TRACKER_URL} target="_blank" rel="noopener" onClick={() => setOpen(false)}>Leaderboard</a></li>
        </ul>
      </div>
    </nav>
  )
}
