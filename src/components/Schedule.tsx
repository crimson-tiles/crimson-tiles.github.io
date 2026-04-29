import { SCHEDULE } from '../config'

export default function Schedule() {
  return (
    <section id="schedule" className="section-alt">
      <div className="container">
        <p className="eyebrow">schedule</p>
        <h2 className="section-title">when we meet.</h2>
        <div className="schedule-list">
          {SCHEDULE.map((item) => (
            <article key={item.title} className="schedule-item">
              <h3>{item.title}</h3>
              <div className="schedule-meta">
                <span className="time">{item.time}</span>
                <span className="dot" aria-hidden="true" />
                <span className="location">{item.location}</span>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
