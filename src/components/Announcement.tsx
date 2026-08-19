import { activeAnnouncement, DISCORD_URL } from '../config'
import discordIcon from '../assets/icons/discord.svg'

export default function Announcement() {
  const item = activeAnnouncement()
  if (!item) return null

  return (
    <section id="announcement" className="announcement">
      <div className="container announcement-card">
        <div className="announcement-copy">
          <p className="eyebrow">{item.eyebrow}</p>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
        <div className="announcement-side">
          <dl className="announcement-facts">
            {item.facts.map((fact) => (
              <div key={fact.label} className="announcement-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="announcement-actions">
            <a href={DISCORD_URL} className="hero-cta" target="_blank" rel="noopener">
              <img src={discordIcon} alt="" className="icon" /> join the discord
            </a>
            {item.flier && (
              <a
                className="announcement-flier"
                href={`${import.meta.env.BASE_URL}${item.flier.path}`}
                target="_blank"
                rel="noopener"
              >
                {item.flier.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
