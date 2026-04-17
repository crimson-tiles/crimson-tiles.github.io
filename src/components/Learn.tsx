import { LEARN_CARDS } from '../config'

export default function Learn() {
  return (
    <section id="learn" className="section-alt">
      <div className="container">
        <h2 className="section-title">Learn Riichi</h2>
        <p className="section-subtitle">Resources to get you started.</p>
        <div className="card-grid">
          {LEARN_CARDS.map((c, i) => (
            <div key={i} className="card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
