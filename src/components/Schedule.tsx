import { SCHEDULE } from '../config'

export default function Schedule() {
  return (
    <section id="schedule">
      <div className="container">
        <h2 className="section-title">Weekly Meetups</h2>
        <p className="section-subtitle">Come play with us.</p>
        <div className="schedule-list">
          {SCHEDULE.map((item) => (
            <div key={item.title} className="schedule-item">
              <h3>{item.title}</h3>
              <div className="time">{item.time}</div>
              <div className="location">{item.location}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
