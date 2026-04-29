import { useState } from 'react'
import { MEETUPS } from '../config'
import Lightbox from './Lightbox'

export default function Meetups() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const close = () => setOpenIndex(null)
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + MEETUPS.length) % MEETUPS.length))
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % MEETUPS.length))

  return (
    <section id="meetups">
      <div className="container">
        <p className="eyebrow">meetups</p>
        <h2 className="section-title">recent sessions.</h2>
        <div className="meetups-grid">
          {MEETUPS.map((m, i) => (
            <button
              key={m.src}
              type="button"
              className="meetup-card"
              onClick={() => setOpenIndex(i)}
              aria-label={`expand: ${m.alt}`}
            >
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                style={m.position ? { objectPosition: m.position } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
      <Lightbox items={MEETUPS} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
    </section>
  )
}
