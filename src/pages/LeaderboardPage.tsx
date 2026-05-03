import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GAMES_CSV_URL,
  LEADERBOARD_CSV_URL,
  RANKED_MIN_GAMES,
  SEASON_LABEL,
  TRACKER_URL,
} from '../config'
import { type Row, parseCsv } from '../lib/leaderboard'
import { fmtFreshness, mostRecentGameDate, parseGameCsv } from '../lib/standings'
import PlacementBar from '../components/PlacementBar'

function EloDelta({ row }: { row: Row }) {
  const delta = row.elo - row.startingElo
  const sign = delta > 0 ? '+' : ''
  const cls = delta > 0 ? 'delta-up' : delta < 0 ? 'delta-down' : 'delta-flat'
  return <span className={`elo-delta ${cls}`}>{sign}{delta.toFixed(1)}</span>
}

export default function LeaderboardPage() {
  const [rows, setRows] = useState<Row[] | null>(null)
  const [lastGameDate, setLastGameDate] = useState<string | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = 'Leaderboard | Crimson Tiles'
    fetch(LEADERBOARD_CSV_URL)
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.text()
      })
      .then((t) => setRows(parseCsv(t)))
      .catch(() => setError(true))

    // best-effort freshness signal; never blocks the leaderboard render
    fetch(GAMES_CSV_URL)
      .then((r) => (r.ok ? r.text() : null))
      .then((t) => {
        if (!t) return
        setLastGameDate(mostRecentGameDate(parseGameCsv(t)))
      })
      .catch(() => {})
  }, [])

  const ranked = rows?.filter((r) => r.games >= RANKED_MIN_GAMES) ?? []
  const unranked = rows?.filter((r) => r.games < RANKED_MIN_GAMES) ?? []

  return (
    <main id="main-content" className="page">
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">leaderboard</p>
          <h1 className="page-title">standings.</h1>
          <p className="page-lede">
            {SEASON_LABEL} &middot; live from the tracker.
            {lastGameDate && <> {fmtFreshness(lastGameDate)}.</>}
          </p>
          <ul className="rules">
            <li>
              <Link to="/standings" className="page-lede-link">season standings ↗</Link></li>
            <li>
              <Link to="/ruleset" className="page-lede-link">club rules ↗</Link></li>
          </ul>
        </div>
      </header>

      <section className="page-section">
        <div className="container">
          {error && (
            <p className="lb-fallback">
              couldn't load standings.{' '}
              <a href={TRACKER_URL} target="_blank" rel="noopener">
                open the tracker directly
              </a>
              .
            </p>
          )}

          {!error && !rows && (
            <div className="lb-skeleton" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="lb-skeleton-row" />
              ))}
            </div>
          )}

          {rows && (
            <>
              <div className="standings-head">
                <h2 className="block-title">ranked players</h2>
                <span className="block-meta">{ranked.length} players</span>
              </div>

              <div className="lb-wrap">
                <table className="lb">
                  <thead>
                    <tr>
                      <th className="lb-rank">#</th>
                      <th className="lb-name">player</th>
                      <th className="lb-num">elo</th>
                      <th className="lb-num lb-hide-md">Δ</th>
                      <th className="lb-num">games</th>
                      <th className="lb-num lb-hide-md">adj pts</th>
                      <th className="lb-num">avg</th>
                      <th className="lb-placements lb-hide-sm">placements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranked.map((r, i) => (
                      <tr key={r.name} className={i < 3 ? `lb-top lb-top-${i + 1}` : ''}>
                        <td className="lb-rank">{i + 1}</td>
                        <td className="lb-name">{r.name}</td>
                        <td className="lb-num lb-elo">{r.elo.toFixed(1)}</td>
                        <td className="lb-num lb-hide-md"><EloDelta row={r} /></td>
                        <td className="lb-num">{r.games}</td>
                        <td className="lb-num lb-hide-md">{r.adjPts > 0 ? '+' : ''}{r.adjPts.toFixed(1)}</td>
                        <td className="lb-num">{r.avg.toFixed(2)}</td>
                        <td className="lb-placements lb-hide-sm">
                          <PlacementBar row={r} />
                          <span className="placement-counts">
                            {r.firsts}/{r.seconds}/{r.thirds}/{r.fourths}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {unranked.length > 0 && (
                <>
                  <div className="standings-head standings-head-2">
                    <h2 className="block-title">still settling in</h2>
                    <span className="block-meta">
                      under {RANKED_MIN_GAMES} games &middot; {unranked.length} players
                    </span>
                  </div>
                  <ul className="unranked-grid">
                    {unranked
                      .sort((a, b) => b.elo - a.elo)
                      .map((r) => (
                        <li key={r.name} className="unranked-card">
                          <div className="unranked-name">{r.name}</div>
                          <div className="unranked-meta">
                            <span className="unranked-elo">{r.elo.toFixed(1)}</span>
                            <span className="unranked-dot" aria-hidden="true">·</span>
                            <span>{r.games} {r.games === 1 ? 'game' : 'games'}</span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </>
              )}

              <p className="lb-source">
                source:{' '}
                <a href={TRACKER_URL} target="_blank" rel="noopener">
                  full tracker sheet
                </a>{' '}
                &middot; got a question about the score? ask in the discord.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
