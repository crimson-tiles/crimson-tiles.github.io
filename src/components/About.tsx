import { useState } from 'react'
import stats from '../generated/stats.json'
import { currentSeason, type MeetupItem } from '../config'
import aboutPhoto from '../assets/meetups/meet6.webp'
import Lightbox from './Lightbox'

const ABOUT_PHOTO: MeetupItem = {
  src: aboutPhoto,
  alt: 'dr. ikejiri achieves the coveted akadora sanshoku',
}

function fmtSeasonEnd(end: string): string {
  return new Date(end).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function About() {
  const season = currentSeason()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">about</p>
            <h2>UA's riichi mahjong club.</h2>
            <p>
              riichi is the four-player japanese version of mahjong. it looks intimidating from the
              outside, like there's a textbook between you and your first game. honestly, it isn't.
              each hand is just 14 tiles arranged into four sets of three and a pair, and you race
              the rest of the table to complete one.
            </p>
            <p>
              you don't need to know any of that walking in. you don't need to own tiles. we lend
              them and coach you through your first hand in real time. tables run from people who
              started last week to people grinding ranked online. nobody's going to make you do
              the scoring math.
            </p>
          </div>
          <div className="about-visual">
            <button
              type="button"
              className="about-photo-btn"
              onClick={() => setLightboxOpen(true)}
              aria-label={`expand: ${ABOUT_PHOTO.alt}`}
            >
              <img className="about-photo" src={ABOUT_PHOTO.src} alt={ABOUT_PHOTO.alt} />
            </button>
          </div>
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
          <div className="about-stat about-stat-season">
            <dt>{season.label}</dt>
            <dd>ends {fmtSeasonEnd(season.end)}</dd>
          </div>
        </dl>
      </div>
      <Lightbox
        items={[ABOUT_PHOTO]}
        index={lightboxOpen ? 0 : null}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </section>
  )
}
