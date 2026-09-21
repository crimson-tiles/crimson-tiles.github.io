import { SCHEDULE } from '../config'
import { calendarUrl, dateParts, relativeDay, timeRange, upcomingMeetings } from '../lib/meetings'

export default function Schedule() {
  const meetings = upcomingMeetings()

  return (
    <section id="schedule" className="section-alt">
      <div className="container">
        <p className="eyebrow">schedule</p>
        <h2 className="section-title">when we meet.</h2>

        {meetings.length > 0 && (
          <div className="schedule-block">
            <h3 className="schedule-block-title">coming up</h3>
            <ol className="dates">
              {meetings.map((m, i) => {
                const { dow, day, mon } = dateParts(m.date)
                return (
                  <li key={`${m.date}-${m.start}`} className={`date-row${i === 0 ? ' is-next' : ''}`}>
                    <time className="date-stamp" dateTime={m.date}>
                      <span className="date-dow">{dow}</span>
                      <span className="date-day">{day}</span>
                      <span className="date-mon">{mon}</span>
                    </time>
                    <div className="date-when">
                      <span className="date-time">{timeRange(m.start, m.end)}</span>
                      {i === 0 && <span className="date-rel">{relativeDay(m.date)}</span>}
                    </div>
                    <span className="date-room">
                      {m.room}
                      <span className="date-building">{m.building}</span>
                    </span>
                    <a
                      className="date-cal"
                      href={calendarUrl(m)}
                      target="_blank"
                      rel="noopener"
                      aria-label={`add ${dow} ${mon} ${day} to google calendar`}
                    >
                      add to calendar
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        )}

        <div className="schedule-block">
          {meetings.length > 0 && <h3 className="schedule-block-title">ongoing</h3>}
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
      </div>
    </section>
  )
}
