import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GAMES_CSV_URL,
  RANKED_MIN_GAMES,
  TRACKER_URL,
  currentSeason,
  previousSeasons,
} from '../config'
import {
  type Game,
  computeStandings,
  fmtScore,
  parseGameCsv,
} from '../lib/standings'

export default function StandingsPage() {
  const [games, setGames] = useState<Game[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = 'Standings | Crimson Tiles'
    fetch(GAMES_CSV_URL)
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.text()
      })
      .then((t) => setGames(parseGameCsv(t)))
      .catch(() => setError(true))
  }, [])

  const season = currentSeason()
  const archive = previousSeasons()
  const seasonGames = games
    ? games.filter((g) => g.date >= season.start && g.date <= season.end)
    : []
  const standings = games ? computeStandings(seasonGames) : []
  const ranked = standings
    .filter((s) => s.games >= RANKED_MIN_GAMES)
    .sort((a, b) => b.totalPts - a.totalPts || b.avgScore - a.avgScore)
  const unranked = standings
    .filter((s) => s.games < RANKED_MIN_GAMES)
    .sort((a, b) => b.totalPts - a.totalPts || b.avgScore - a.avgScore)

  return (
    <main id="main-content" className="page">
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">standings</p>
          <h1 className="page-title">season standings.</h1>
          <p className="page-lede">
            {season.label} &middot; season ends {season.end}.
            <Link to="/leaderboard" className="page-lede-link">elo board ↗</Link>
            <Link to="/ruleset" className="page-lede-link">house rules ↗</Link>
          </p>
          <ul className="rules">
            <li>
              ranked once you've played <strong>{RANKED_MIN_GAMES}+</strong> games this season
            </li>
            <li>
              per-game score = <code>(raw points − 30,000) / 1,000 + uma</code>.</li>
            <li> hanchan (south) uma is{' '}
              <code>20 / 10 / 0 / -10</code>; tonpuusen (east) uma is half: <code>10 / 5 / 0 / -5</code></li>

            <li>standings reset every season &middot; sanma (3p) games are excluded for the moment, but i plan to spin up a separate leaderboard for them later</li>
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

          {!error && !games && (
            <div className="lb-skeleton" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="lb-skeleton-row" />
              ))}
            </div>
          )}

          {games && (
            <>
              <div className="standings-head">
                <h2 className="block-title">rankings</h2>
                <span className="block-meta">
                  {ranked.length} players &middot; {seasonGames.length} games this season
                </span>
              </div>

              <div className="lb-wrap">
                <table className="lb">
                  <thead>
                    <tr>
                      <th className="lb-rank">#</th>
                      <th className="lb-name">player</th>
                      <th className="lb-num">total</th>
                      <th className="lb-num">avg score</th>
                      <th className="lb-num">games</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranked.map((s, i) => (
                      <tr key={s.name} className={i < 3 ? `lb-top lb-top-${i + 1}` : ''}>
                        <td className="lb-rank">{i + 1}</td>
                        <td className="lb-name">{s.name}</td>
                        <td className="lb-num lb-elo">{fmtScore(s.totalPts)}</td>
                        <td className="lb-num">{fmtScore(s.avgScore)}</td>
                        <td className="lb-num">{s.games}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {unranked.length > 0 && (
                <>
                  <div className="standings-head standings-head-2">
                    <h2 className="block-title">unranked participants</h2>
                    <span className="block-meta">
                      under {RANKED_MIN_GAMES} games &middot; {unranked.length} players
                    </span>
                  </div>
                  <div className="lb-wrap">
                    <table className="lb">
                      <thead>
                        <tr>
                          <th className="lb-name">player</th>
                          <th className="lb-num">total</th>
                          <th className="lb-num">avg score</th>
                          <th className="lb-num">games remaining</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unranked.map((s) => (
                          <tr key={s.name}>
                            <td className="lb-name">{s.name}</td>
                            <td className="lb-num lb-elo">{fmtScore(s.totalPts)}</td>
                            <td className="lb-num">{fmtScore(s.avgScore)}</td>
                            <td className="lb-num">{RANKED_MIN_GAMES - s.games}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              <p className="lb-source">
                source:{' '}
                <a href={TRACKER_URL} target="_blank" rel="noopener">
                  full tracker sheet
                </a>{' '}
                &middot; computed from the games tab. ties on raw score split uma evenly.
              </p>

              <div className="standings-head standings-head-2">
                <h2 className="block-title">previous seasons</h2>
              </div>
              {archive.length === 0 ? (
                <p className="lb-source">
                  no archive yet — this fills in once a season ends. seasons follow the UA academic calendar (spring / summer / fall).
                </p>
              ) : (
                <ul className="rules">
                  {archive.map((s) => (
                    <li key={s.id}>
                      <strong>{s.label}</strong> ({s.start} → {s.end})
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  )
}
