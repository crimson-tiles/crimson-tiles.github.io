import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NEXT_MEETING, MEETING_DOT_COLOR } from '../config'

type SectionLink = { kind: 'section'; id: string; label: string }
type RouteLink = { kind: 'route'; to: string; label: string }
type NavLink = SectionLink | RouteLink

const NAV_LINKS: NavLink[] = [
  { kind: 'section', id: 'schedule', label: 'schedule' },
  { kind: 'route', to: '/projects', label: 'projects' },
  { kind: 'route', to: '/leaderboard', label: 'leaderboard' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(id: string) {
    close()
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scroll: id } })
    }
  }

  return (
    <nav className="nav" style={{ ['--meeting-dot' as string]: MEETING_DOT_COLOR }}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={close}>
          <span className="nav-brand-mark" aria-hidden="true">赤牌</span>
          <span>Crimson Tiles</span>
        </Link>
        <span className="nav-next" aria-label="Next meeting">
          <span className="nav-next-dot" aria-hidden="true" />
          next: {NEXT_MEETING}
        </span>
        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${open ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) =>
            link.kind === 'section' ? (
              <li key={link.id}>
                <button type="button" onClick={() => goToSection(link.id)}>
                  {link.label}
                </button>
              </li>
            ) : (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={close}
                  className={location.pathname === link.to ? 'is-active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  )
}
