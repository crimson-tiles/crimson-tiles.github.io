import { OFFICERS } from '../config'

export default function FirstTime() {
  return (
    <section id="first-time">
      <div className="container first-time-grid">
        <div className="first-time-copy">
          <p className="eyebrow">showing up</p>
          <h2>your first monday.</h2>
          <p>
            walk in around 6. we'll run you through the basics of completing a hand, have you watch a round or two so you can see what
            it looks like, then you join a table and someone can coach you through calls as they happen.
            ideally, by 10, you've played at least one full game and you'll have a good idea of what to expect next time.
          </p>
        </div>
        <aside className="officers">
          <p className="eyebrow">who to talk to</p>
          <ul>
            {OFFICERS.map((o) => (
              <li key={o.name} className="officer-row">
                <div className="officer-avatar" aria-hidden="true">
                  {o.name.charAt(0).toUpperCase()}
                </div>
                <div className="officer-info">
                  <div className="officer-role">{o.role}</div>
                  <div className="officer-meta">
                    <span className="officer-name">{o.name}</span>
                    {o.discord && (
                      <>
                        <span className="officer-dot" aria-hidden="true">·</span>
                        <span className="officer-discord">{o.discord}</span>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
