import Tile from './Tile'
import stats from '../generated/stats.json'
import { currentSeason } from '../config'

export default function About() {
  const season = currentSeason()
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">about</p>
            <h2>UA's riichi mahjong club.</h2>
            <p>
              riichi is the four-player japanese version of mahjong. you don't need to know any of it
              walking in and you don't need to own a set. we'll teach you.
            </p>
          </div>
          <div className="about-tiles">
            <div className="about-tile-stack" aria-hidden="true">
              <Tile name="haku" size={88} tilt={-4} />
              <Tile name="hatsu" size={88} tilt={2} />
              <Tile name="chun" size={88} tilt={-2} />
            </div>
            <dl className="about-stats">
              <div className="about-stat">
                <dt>games</dt>
                <dd>{stats.games}</dd>
              </div>
              <div className="about-stat">
                <dt>players</dt>
                <dd>{stats.players}</dd>
              </div>
            </dl>
            <p className="about-stats-meta">
              {season.label} · ends{' '}
              {new Date(season.end).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                timeZone: 'UTC',
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
