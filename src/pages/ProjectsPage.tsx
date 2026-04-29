import { useEffect } from 'react'
import { DISCORD_URL, PROJECTS, PROJECT_WISHLIST, type ProjectStatus } from '../config'

const STATUS_LABEL: Record<ProjectStatus, string> = {
  shipped: 'shipped',
  'in-progress': 'in progress',
  wanted: 'wanted',
}

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | Crimson Tiles'
  }, [])

  return (
    <main id="main-content" className="page">
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">projects</p>
          <h1 className="page-title">build something.</h1>
          <p className="page-lede">
            the club isn't only about playing. we tinker on tools that make the playing better, and you can join in.
            no prior coding experience needed -- mahjong wasn't your first language either.
          </p>
        </div>
      </header>

      <section className="page-section">
        <div className="container">
          <div className="standings-head">
            <h2 className="block-title">what's going on</h2>
            <span className="block-meta">{PROJECTS.length} projects</span>
          </div>

          <ul className="projects-list">
            {PROJECTS.map((p) => (
              <li key={p.name} className="project-card">
                <div className="project-head">
                  <h3 className="project-name">{p.name}</h3>
                  <span className={`project-status status-${p.status}`}>
                    {STATUS_LABEL[p.status]}
                  </span>
                </div>
                <p className="project-blurb">{p.blurb}</p>
                <div className="project-meta">
                  {p.tech && <span className="project-tech">{p.tech}</span>}
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener" className="project-link">
                      open
                      <svg viewBox="0 0 12 12" aria-hidden="true">
                        <path
                          d="M4 2h6v6M10 2L4 8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="standings-head standings-head-2">
            <h2 className="block-title">ideas worth a swing</h2>
            <span className="block-meta">pick one</span>
          </div>
          <ul className="rules">
            {PROJECT_WISHLIST.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>

          <p className="lb-source">
            want in? say hi in{' '}
            <a href={DISCORD_URL} target="_blank" rel="noopener">
              discord
            </a>{' '}
            and ping any officer. nothing's gatekept.
          </p>
        </div>
      </section>
    </main>
  )
}
